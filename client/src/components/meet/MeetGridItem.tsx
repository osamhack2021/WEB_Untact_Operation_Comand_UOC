import useFullscreen from "hooks/common/useFullscreen";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  stream: MediaStream;
  muted: boolean;
  width: number;
}

const MeetGridItem = ({ stream, muted, width }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  const { element, onFullScreen } = useFullscreen();

  useEffect(() => {
    if (ref.current) {
      ref.current.srcObject = stream;
      console.log("muted", ref.current.muted);
    }
    console.log("랄라", stream.getTracks());
  }, [muted, stream]);

  return (
    <MeetGridItemBlock ref={element} style={{ width }}>
      <VideoContainer
        ref={ref}
        onDoubleClick={onFullScreen}
        muted={muted}
        playsInline
        autoPlay
      />
    </MeetGridItemBlock>
  );
};

const MeetGridItemBlock = styled.div`
  border: 8px solid #212121;
  position: relative;
`;

const VideoContainer = styled.video`
  object-fit: cover; // video 태그 무조건 1:1 비율인걸 깨뜨려주는 얘임
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export default MeetGridItem;