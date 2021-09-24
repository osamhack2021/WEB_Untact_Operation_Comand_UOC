import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Styled from "styled-components";

<<<<<<< HEAD
=======
const VideoContainer = Styled.video<{ ItemWidth: number; ItemHeight: number }>`
    background-color: black;
    object-fit: cover; // video 태그 무조건 1:1 비율인걸 깨뜨려주는 얘임
    width: ${(props) => props.ItemWidth}px;
    height: ${(props) => props.ItemHeight}px;
`;

>>>>>>> 1784f4249506dee64ffc0509966687bcb73c1ebd
interface Props {
  stream: MediaStream;
  muted?: boolean;
  width: number;
  isLastRow: boolean;
}

const MeetGridItem = ({ stream, muted, width, isLastRow }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream;
    if (muted) setIsMuted(muted);
  }, [muted, stream]);

  return (
<<<<<<< HEAD
    <MeetGridItemBlock style={{ width, flex: isLastRow ? 1 : undefined }}>
      <VideoContainer ref={ref} muted={isMuted} autoPlay />
    </MeetGridItemBlock>
=======
    <VideoContainer
      ref={ref}
      muted={isMuted}
      ItemWidth={width}
      ItemHeight={height}
      autoPlay
    ></VideoContainer>
>>>>>>> 1784f4249506dee64ffc0509966687bcb73c1ebd
  );
};

const MeetGridItemBlock = styled.div`
  border: 8px solid #212121;
  position: relative;
`;

const VideoContainer = Styled.video`
  object-fit: cover; // video 태그 무조건 1:1 비율인걸 깨뜨려주는 얘임
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export default MeetGridItem;