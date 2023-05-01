import React from "react";
import { Props } from "../types";
import { Backdrop } from "./Modal_styled";

const Modal: React.FC<Props> = ({ children }) => {
  return <Backdrop>{children}</Backdrop>;
};

export default Modal;
