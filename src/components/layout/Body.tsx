import React from "react";
import { Props } from "../types";
const Body: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Body;
