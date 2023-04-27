import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
//styled components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #252525;
  width: 100vw;
  height: auto;

  //Tablet

  //Desktop
`;

const Hamburger = styled.div`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
const DropDownNavigation = styled.div``;
const DefaultNavigation = styled.div``;

//react component

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="Nakia Solution Inc Logo" width="150" height="50" />
        <Hamburger>
          <div />
          <div />
          <div />
        </Hamburger>
      </HeaderContainer>
      <DropDownNavigation></DropDownNavigation>
    </>
  );
};

export default Header;
