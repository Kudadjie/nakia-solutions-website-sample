import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";

//styled components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
  position: absolute;
  width: 100vw;
  /* backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(16 19 24 / 75%); */
  height: auto;

  img {
    position: relative;
    bottom: 25px;
  }
  //Tablet

  //Desktop
`;

//react component
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Nakia Solution Inc Logo" width="150" height="100" />
    </HeaderContainer>
  );
};

export default Header;
