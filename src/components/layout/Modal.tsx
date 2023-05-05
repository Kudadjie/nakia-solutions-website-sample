import React from "react";
import { Backdrop } from "../styled_components/Modal_styled";
interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <Backdrop>{children}</Backdrop>;
};

export default Modal;
