import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import MeetGridItem from "components/meet/MeetGridItem";

interface MeetGridProps {
  users: IWebRTCUser[];
  sidebarOpen: boolean;
}

function MeetGrid({ users, sidebarOpen }: MeetGridProps) {
  const [itemWidth, setItemWidth] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const ref = useRef<any>();

  const divisor = useMemo(() => {
    return Math.ceil(Math.sqrt(users.length)) || 1;
  }, [users.length]);

  useLayoutEffect(() => {
    const gridWidth = ref.current.clientWidth;
    const gridHeight = ref.current.clientHeight;

    setItemWidth(gridWidth / divisor);
    setItemHeight(gridHeight / divisor);
  }, [divisor]);

  useEffect(() => {
    if (users.length === 1) {
      setItemWidth(ref.current.clientWidth / divisor - 400);
      setItemHeight(ref.current.clientHeight / divisor - 50);
    }
    console.log("users", users);
  }, [users, divisor]);

  return (
    <Grid ref={ref}>
      {users.map((user, index) => (
        <MeetGridItem
          key={index}
          stream={user.stream}
          width={itemWidth}
          height={itemHeight}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: black;
  flex-wrap: wrap;
  justify-content: center;
`;

export default MeetGrid;