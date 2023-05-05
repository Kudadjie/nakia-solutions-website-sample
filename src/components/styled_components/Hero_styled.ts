import styled from "styled-components";
import Hero1 from "../../assets/hero-images/1.png";
import Hero2 from "../../assets/hero-images/2.png";
import Hero3 from "../../assets/hero-images/3.png";
import Hero4 from "../../assets/hero-images/4.png";
import Hero5 from "../../assets/hero-images/5.png";
import Hero6 from "../../assets/hero-images/6.png";

const randomPool = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6];

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const HeroBackdrop = styled.div`
  background-image: url(${randomPool[randomIntFromInterval(0, 5)]});
  height: 800px;
  display: flex;
  background-size: cover;
`;
export const HeroContainer = styled.div`
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;
export const HeroSection = styled.span`
  top: 126px;
  font-size: 1rem;

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
    cursor: pointer;
  }

  a:hover {
    background-color: green;
    color: white;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    position: absolute;
    width: 50vw;
    position: initial;
    text-align: justify;

    a {
      padding: 10px 30px;
      align-self: flex-start;
    }

    :first-child {
      padding: 0px 70px;
    }
  }
`;
