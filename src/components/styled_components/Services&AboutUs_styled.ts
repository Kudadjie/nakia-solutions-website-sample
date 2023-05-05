import styled from "styled-components";
import AboutUsBackdropImage from "./../../assets/about-us-images/About-us.png";

//styled components
export const ServicesSection = styled.section`
  padding: 10px;
  margin: 10px;

  text-align: center;

  h2 {
    text-align: center;
    color: #1b3450;
    margin: 40px 0;
  }

  p {
    padding: 10px;
    margin: 10px;
  }

  //Tablet

  //Desktop
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageOverlayHorizontal = styled.div`
  img {
    width: 50vw;
    height: 100%;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    img {
    }
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    img {
      width: 640px;
    }
  }
`;

export const ImageOverlayVertical = styled.div`
  img {
    width: 47vw;
    height: 100%;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  img {
    width: 47vw;
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    img {
      width: 50vw;
    }
  }
`;
export const TextSection = styled.section`
  display: inherit;
  flex-direction: column;
  align-items: center;
`;

export const LargeInfo = styled.p`
  font-weight: 400;
  background-color: #1b3450;
  color: white;
  text-align: center;
  padding: 20px;

  //Tablet

  //Desktop
  @media screen and (min-width: 1200px) {
    font-size: x-large;
    padding: 20px 100px;
  }
`;

export const AboutUsBackdrop = styled.div`
  background-image: url(${AboutUsBackdropImage});
  background-size: cover;
  height: 1100px;

  div {
    backdrop-filter: blur(3px) saturate(180%);
    background-color: rgb(16 19 24 / 75%);
    height: 100%;
    color: white;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    height: 100%;
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    height: 460px;
  }
`;
export const WhatWeOfferImageFrame = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
`;

export const AboutUsDetails = styled.section`
  text-align: justify;
  padding: 50px;

  h2 {
    text-align: inherit;
    margin-bottom: 20px;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    h2 {
      text-align: initial;
    }
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    padding: 100px 130px;
  }
`;

export const DownloadErrorMessage = styled.span`
  width: fit-content;
  background-color: white;
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
  border: 3px solid red;
  color: black;

  i {
    padding: 10px;
  }
`;
