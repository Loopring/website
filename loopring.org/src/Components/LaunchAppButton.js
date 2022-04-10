import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled/";

export const LaunchAppButtonButtonStyled = styled(Button)`
  margin-top: 20px;
  width: 260px;
  height: 64px;
  justify-content: space-around;
  background: linear-gradient(94.92deg, #4169ff 0.91%, #a016c2 103.55%);
  padding-left: 3rem;
  font-size: 1.5rem;
  color: #ffffff;

  div {
    height: 64px;
    line-height: 64px;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  :hover {
    color: #ffffff;
  }

  :hover:before {
    background: rgba(255, 255, 255, 0.2);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const LaunchAppSmallButtonStyled = styled(Button)`
  margin: auto 10px;
  width: 133px;
  height: 32px;
  justify-content: space-around;
  background: linear-gradient(94.92deg, #4169ff 0.91%, #a016c2 103.55%);
  font-size: 16px !important;
  color: #ffffff;
  text-transform: none;
  padding: 0;

  div {
    height: 32px;
    line-height: 32px;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  :hover {
    color: #ffffff;
  }

  :hover:before {
    background: rgba(255, 255, 255, 0.2);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const LaunchAppButton = props => {
  return <div></div>;
};
