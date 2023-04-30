import React from "react";
import styled from "styled-components";
import { Props } from "../types";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(16 19 24 / 75%);
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal: React.FC<Props> = ({ children }) => {
  return <Backdrop>{children}</Backdrop>;
};

export default Modal;
