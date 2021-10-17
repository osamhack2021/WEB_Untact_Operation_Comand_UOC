import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useParams } from "react-router";
import MeetGrid from "components/meet/MeetGrid";
import styled from "styled-components";
import UsersSidebar from "components/meet/UsersSideBar";
import { SERVER_URL } from "lib/config";
import { useRecoilValue } from "recoil";
import { userState } from "atoms/userState";
import FooterButtonGroup from "./FooterButtonGroup";
import UsersButton from "./UsersButton";
import { IMeetState } from "atoms/meetState";
import ChatsSideBar from "./ChatsSideBar";
import ChatsButton from "./ChatsButton";
import EndMeetModal from "./EndMeetModal";

let newSocket = io.connect(SERVER_URL); // 소켓 연결

export interface MeetParams {
  meetId: string;
}

interface MeetProps {
  meetInfo: IMeetState;
}

const Meet = ({ meetInfo }: MeetProps) => {
  const user = useRecoilValue(userState);
  const [users, setUsers] = useState<Array<IWebRTCUser>>([]);
  const [myPeerConnection, setMyPeerConnection] = useState<RTCPeerConnection>();

  // 회의 상태
  const [isEnd, setIsEnd] = useState(false);

  const [mySessionId, setMySessionId] = useState<string>("");
  const [{ muted, videoDisabled }, setMediaState] = useState({
    muted: false,
    videoDisabled: false,
  });
  const { meetId } = useParams<MeetParams>();

  // 사이드바 토글 상태
  const [usersSidebarOpen, setUsersSidebarOpen] = useState(false);
  const [chatsSidebarOpen, setChatsSidebarOpen] = useState(false);

  // 유저 목록사이드바 토글
  const onToggleUsersSidebar = () => {
    setUsersSidebarOpen(!usersSidebarOpen);
  };

  // 채팅 사이드바 토글
  const onToggleChatsSidebar = () => {
    setChatsSidebarOpen(!chatsSidebarOpen);
  };

  let sendPC: RTCPeerConnection;
  let receivePCs: { [socketId: string]: RTCPeerConnection };

  const pc_config = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  };

  useEffect(() => {
    async function getMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        const myStream = {
          id: newSocket.id,
          stream,
          name: user.name,
          muted: false,
          videoOff: false,
        };
        setUsers(users.concat(myStream));
        setMySessionId(myStream.id);

        // eslint-disable-next-line
        sendPC = createSenderPeerConnection(newSocket, stream);
        setMyPeerConnection(sendPC);
        createSenderOffer(newSocket);

        newSocket.emit("joinRoom", {
          id: newSocket.id,
          meetId,
        });
      } catch (e) {
        console.log(`getUserMedia error: ${e}`);
      }
    }

    getMedia();

    // //화면공유 테스트 여기부터
    // navigator.mediaDevices
    //   .getDisplayMedia({
    //     video: true,
    //     audio: true,
    //   })
    //   .then((stream) => {
    //     console.log("getDisplayMedia", stream);
    //   })
    //   .catch((error) => {
    //     console.log(`getDisplayMedia error: ${error}`);
    //   });

    // //화면 공유 테스트 여기까지

    newSocket.on(
      "userEnter",
      (data: { id: string; name: string; muted: boolean }) => {
        createReceivePC(data.id, newSocket, data.name, data.muted);
      }
    );

    // 해당 방에 있는 유저들 목록을 받음
    newSocket.on(
      "allUsers",
      (data: {
        users: Array<{ id: string; name: string; muted: boolean }>;
      }) => {
        let len = data.users.length;
        for (let i = 0; i < len; i++) {
          createReceivePC(
            data.users[i].id,
            newSocket,
            data.users[i].name,
            data.users[i].muted
          );
        }
      }
    );

    newSocket.on("userExit", (data: { id: string }) => {
      receivePCs[data.id].close();
      delete receivePCs[data.id];
      setUsers((users) => users.filter((user) => user.id !== data.id));
    });

    newSocket.on(
      "getSenderAnswer",
      async (data: { sdp: RTCSessionDescription }) => {
        try {
          console.log("get sender answer");
          await sendPC.setRemoteDescription(
            new RTCSessionDescription(data.sdp)
          );
        } catch (error) {
          console.log(error);
        }
      }
    );

    newSocket.on(
      "getSenderCandidate",
      async (data: { candidate: RTCIceCandidateInit }) => {
        try {
          console.log("get sender candidate");
          if (!data.candidate) return;
          sendPC.addIceCandidate(new RTCIceCandidate(data.candidate));
          console.log("candidate add success");
        } catch (error) {
          console.log(error);
        }
      }
    );

    newSocket.on(
      "getReceiverAnswer",
      async (data: { id: string; sdp: RTCSessionDescription }) => {
        try {
          console.log(`get socketID(${data.id})'s answer`);
          let pc: RTCPeerConnection = receivePCs[data.id];
          await pc.setRemoteDescription(data.sdp);
          console.log(`socketID(${data.id})'s set remote sdp success`);
        } catch (error) {
          console.log(error);
        }
      }
    );

    newSocket.on(
      "getReceiverCandidate",
      async (data: { id: string; candidate: RTCIceCandidateInit }) => {
        try {
          console.log(`get socketID(${data.id})'s candidate`);
          let pc: RTCPeerConnection = receivePCs[data.id];
          if (!data.candidate) return;
          pc.addIceCandidate(new RTCIceCandidate(data.candidate));
          console.log(`socketID(${data.id})'s candidate add success`);
        } catch (error) {
          console.log(error);
        }
      }
    );

    newSocket.on(
      "receiveToggleMuted",
      (data: { userSocketId: string; meetId: string; muted: boolean }) => {
        setUsers((users) =>
          users.map((user) => {
            if (user.id === data.userSocketId) {
              user.muted = data.muted;
            }
            return user;
          })
        );
      }
    );

    newSocket.on("hostLeave", async (data: { message: string }) => {
      setIsEnd(true);
    });
  }, []);

  const createReceivePC = (
    id: string,
    newSocket: SocketIOClient.Socket,
    name: string,
    muted: boolean
  ) => {
    try {
      console.log(`socketID(${id}) user entered`);
      let pc = createReceiverPeerConnection(id, newSocket, name, muted);
      createReceiverOffer(pc, newSocket, id);
    } catch (error) {
      console.log(error);
    }
  };

  const createSenderOffer = async (newSocket: SocketIOClient.Socket) => {
    try {
      let sdp = await sendPC.createOffer({
        offerToReceiveAudio: false,
        offerToReceiveVideo: false,
      });
      console.log("create sender offer success");
      await sendPC.setLocalDescription(new RTCSessionDescription(sdp));

      newSocket.emit("senderOffer", {
        sdp,
        senderSocketID: newSocket.id,
        meetId,
        userId: user._id,
        name: user.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createReceiverOffer = async (
    pc: RTCPeerConnection,
    newSocket: SocketIOClient.Socket,
    senderSocketID: string
  ) => {
    try {
      let sdp = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      });
      console.log("create receiver offer success");
      await pc.setLocalDescription(new RTCSessionDescription(sdp));

      newSocket.emit("receiverOffer", {
        sdp,
        receiverSocketID: newSocket.id,
        senderSocketID,
        meetId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createSenderPeerConnection = (
    newSocket: SocketIOClient.Socket,
    localStream: MediaStream
  ): RTCPeerConnection => {
    let pc = new RTCPeerConnection(pc_config);

    pc.onicecandidate = (e) => {
      if (e.candidate) {
        console.log("sender PC onicecandidate");
        newSocket.emit("senderCandidate", {
          candidate: e.candidate,
          senderSocketID: newSocket.id,
        });
      }
    };

    pc.oniceconnectionstatechange = (e: any) => {
      console.log(
        "Sender oniceconnectionstatechange",
        e.target.iceConnectionState
      );
    };

    if (localStream) {
      console.log("localstream add", localStream.getTracks());
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });
    } else {
      console.log("no local stream");
    }

    // return pc
    return pc;
  };

  const createReceiverPeerConnection = (
    socketID: string,
    newSocket: SocketIOClient.Socket,
    name: string,
    muted: boolean
  ): RTCPeerConnection => {
    let pc = new RTCPeerConnection(pc_config);

    // add pc to peerConnections object
    receivePCs = { ...receivePCs, [socketID]: pc };

    pc.onicecandidate = (e) => {
      if (e.candidate) {
        console.log("receiver PC onicecandidate", e.candidate);
        newSocket.emit("receiverCandidate", {
          candidate: e.candidate,
          receiverSocketID: newSocket.id,
          senderSocketID: socketID,
        });
      }
    };

    pc.oniceconnectionstatechange = (e: any) => {
      console.log(
        "Receiver oniceconnectionstatechange",
        e.target.iceConnectionState
      );
    };

    pc.ontrack = (e) => {
      console.log("ontrack success", e);
      setUsers((oldUsers) => oldUsers.filter((user) => user.id !== socketID));
      e.streams[0].getTracks().forEach((track) => {
        console.log("stream 정보", track);
      });
      setUsers((oldUsers) =>
        oldUsers.concat({
          id: socketID,
          stream: e.streams[0],
          name,
          muted,
          videoOff: false,
        })
      );
    };

    // return pc
    return pc;
  };

  const onToggleMuted = () => {
    const nextValue = !muted;
    setMediaState((prev) => ({ ...prev, muted: nextValue }));

    const audioTrack = users[0].stream.getAudioTracks()[0];
    if (!audioTrack) return;
    audioTrack.enabled = !nextValue;

    const payload = {
      userSocketId: newSocket.id,
      meetId,
      muted: nextValue,
    };

    newSocket.emit("sendToggleMuted", payload);
  };

  const onToggleVideoDisabled = () => {
    const nextValue = !videoDisabled;
    setMediaState((prev) => ({ ...prev, videoDisabled: nextValue }));

    const videoTrack = users[0].stream.getVideoTracks()[0];
    if (!videoTrack) return;
    videoTrack.enabled = !nextValue;
  };

  // 통화 종료
  const onHangOff = () => {
    window.location.replace("/");
  };

  // 화면 공유

  const onScreenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        console.log("getDisplayMedia", stream);
        const myStream = {
          id: "1asdasd6789",
          stream,
          name: user.name,
          muted: false,
          videoOff: false,
        };

        setUsers((oldUsers) => [...oldUsers, myStream]);
        // eslint-disable-next-line

        // todo : 화면 공유 했을때 상대방도 보이게 설정 해줘야됌.
        // 아마 displayMedia 를 따로 사용하는법이 있을 거 같은데 낼 일어나서 해보자

        let ScreenSocket = newSocket;
        ScreenSocket.id = "1asdasd6789";

        sendPC = createSenderPeerConnection(ScreenSocket, stream);
        createSenderOffer(ScreenSocket);

        newSocket.emit("joinRoom", {
          id: "1asdasd6789",
          meetId,
        });
      })
      .catch((error) => {
        console.log(`getDisplayMedia error: ${error}`);
      });
  };

  if (isEnd) return <EndMeetModal />;

  const getMedia = async (deviceId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          deviceId,
        },
      });
      return stream;
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeVideo = async (videoId: string) => {
    const myStream = await getMedia(videoId);
    if (myPeerConnection) {
      const videoTrack = myStream?.getVideoTracks()[0];
      const videoSender = myPeerConnection
        .getSenders()
        .find((sender) => sender.track?.kind === "video");
      if (videoTrack) {
        videoSender?.replaceTrack(videoTrack);
        setUsers((prev) => prev.map((user) => ({ ...user, stream: myStream })));
      }
    }
  };

  return (
    <MeetPageBlock>
      <Wrapper>
        <main>
          <MeetGrid users={users} sidebarOpen={usersSidebarOpen} />
        </main>
        <UsersSidebar
          visible={usersSidebarOpen}
          onToggleSidebar={onToggleUsersSidebar}
          users={users}
          mySessionId={mySessionId}
        />

        <ChatsSideBar
          visible={chatsSidebarOpen}
          onToggleSidebar={onToggleChatsSidebar}
          meetId={meetId}
          user={user}
          newSocket={newSocket}
        />
      </Wrapper>

      <MeetFooter>
        <div className="left">
          <div className="meetId">{meetInfo.title}</div>
        </div>
        <div className="center">
          <FooterButtonGroup
            muted={muted}
            onToggleMuted={onToggleMuted}
            videoDisabled={videoDisabled}
            onToggleVideoDisabled={onToggleVideoDisabled}
            onHangOff={onHangOff}
            onScreenShare={onScreenShare}
            onChangeVideo={onChangeVideo}
          />
        </div>
        <div className="right">
          <ChatsButton onClick={onToggleChatsSidebar} />
          <UsersButton
            usersCount={users.length}
            onClick={onToggleUsersSidebar}
          />
        </div>
      </MeetFooter>
    </MeetPageBlock>
  );
};

const MeetPageBlock = styled.div`
  height: 100%;
  background: #212121;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  main {
    height: 100%;
    position: relative;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
`;

const MeetFooter = styled.footer`
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 24px;
  padding-right: 24px;
  .left,
  .right {
    width: 240px;
    display: flex;
  }
  .right {
    justify-content: flex-end;
    margin-right: 80px;
  }
  .center {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  .meetId {
    font-family: monospace;
    color: white;
    font-size: 21px;
    font-weight: bold;
  }
`;

export default Meet;