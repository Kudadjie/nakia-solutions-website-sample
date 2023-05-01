import styled from "styled-components";

//styled components
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
  position: absolute;
  width: 100vw;

  /* backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(16 19 24 / 75%); */

  img {
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
      width: 141px;
      height: 50px;
      margin: 30px 0 0 20px;
    }
  }
`;
