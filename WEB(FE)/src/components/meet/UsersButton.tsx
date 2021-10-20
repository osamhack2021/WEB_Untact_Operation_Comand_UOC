import { PeopleIcon } from "assets/icons";
import styled from "styled-components";
import React from "react";

interface UsersButtonProps {
  usersCount: number;
  onClick: () => void;
}

function UsersButton({ usersCount, onClick }: UsersButtonProps) {
  return (
    <Button onClick={onClick}>
      <PeopleIcon />
      <span>{usersCount}</span>
    </Button>
  );
}

const Button = styled.button`
  border-radius: 8px;
  border: none;
  outline: none;
  background: transparent;
  position: relative;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    color: white;
    width: 28px;
    height: 28px;
  }
  span {
    padding: 4px 7px;
    position: absolute;
    top: -12px;
    right: 5px;
    font-size: 12px;
    font-weight: bold;
    margin-left: 8px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.15);
    color: white;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export default UsersButton;