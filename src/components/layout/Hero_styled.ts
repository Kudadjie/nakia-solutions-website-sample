import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeroSection = styled.span`
  position: absolute;
  top: 126px;
  font-size: 1rem;
  padding: 28px 15px 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 30px;
  text-align: center;
  color: white;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(16 19 24 / 75%);
  z-index: 5;

  :first-child {
    padding: 0px 20px;
  }

  a {
    color: white;
    width: fit-content;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2984ca;
    border-radius: 10px;
  }

  a:visited {
    color: white;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
  }
`;
