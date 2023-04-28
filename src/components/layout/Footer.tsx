import React from "react";
import { Props } from "../types";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #252525;
  padding: 10px;
  color: #cacaca;
  display: flex;
  justify-content: center;
`;
const Footer: React.FC = () => {
  return (
    <FooterSection>
      <p>© 2023 Nakia Solutions Incoporated</p>
    </FooterSection>
  );
};

export default Footer;
