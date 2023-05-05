import React from "react";
import Logo from "../../assets/Logo.svg";
import { HeaderContainer } from "../styled_components/Header_styled";

//react component
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Nakia Solution Inc Logo" />
    </HeaderContainer>
  );
};

export default Header;
