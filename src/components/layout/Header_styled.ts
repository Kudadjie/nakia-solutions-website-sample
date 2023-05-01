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
  height: auto;

  img {
    position: relative;
    bottom: 25px;
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
  }
`;
