import styled from "styled-components";

//styled components
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
  position: absolute;
  width: 100vw;

  img {
    width: 150px;
    height: 100px;
    position: relative;
    bottom: 25px;
    z-index: 1000;
  }
  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    img {
      width: 200px;
      margin-top: 15px;
    }
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    padding-bottom: 0px;
    img {
      width: 310px;
      height: 105px;
      margin: 30px 0 0 20px;
    }
  }
`;
