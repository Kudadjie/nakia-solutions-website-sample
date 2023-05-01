import React from "react";
import Logo from "../../assets/Logo.svg";
import { HeaderContainer } from "./Header_styled";

//react component
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Nakia Solution Inc Logo" width="150" height="100" />
    </HeaderContainer>
  );
};

export default Header;
