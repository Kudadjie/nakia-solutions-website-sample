import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #252525;
  padding: 10px;
  color: #cacaca;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  grid-row-gap: 5px;
`;
const Footer: React.FC = () => {
  return (
    <FooterSection>
      <p>
        Nakia Solutions Inc. is certified DBE, MBE by the Marland Department of
        Transportation, Maryland. DUNS: 118546974; CAGE: 9A4J9
      </p>
      <p>© 2023 Nakia Solutions Incoporated</p>
    </FooterSection>
  );
};

export default Footer;
