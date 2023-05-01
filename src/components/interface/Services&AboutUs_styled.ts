import styled from "styled-components";
import AboutUsBackdropImage from "./../../assets/about-us-images/About-us.webp";

//styled components
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    flex-direction: row;
  }
  //Desktop
  @media screen and (min-width: 1200px) {
  }
`;

export const TextSection = styled.section`
  display: inherit;
  flex-direction: column;
  align-items: center;
`;
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

  //Desktop
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LargeInfo = styled.p`
  font-weight: 400;
  background-color: #1b3450;
  color: white;
  text-align: center;
  padding: 20px;

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    font-size: x-large;
    padding: 20px 100px;
  }
`;

export const AboutUsBackdrop = styled.div`
  background-image: url(${AboutUsBackdropImage});
  background-size: cover;
  height: 795px;

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
    height: 400px;
  }
`;
export const WhatWeOfferImageFrame = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
`;

export const NAICSection = styled.section`
  padding: 10px;
  width: 360px;

  table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-size: 0.8rem;
  }

  td,
  th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px 20px;
  }

  th {
    background-color: rgb(235, 235, 235);
    text-align: center;
    font-size: 20px;
    color: #1b3450;
  }

  td {
    text-align: center;
    font-weight: bold;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    width: 360px;
    margin: 10px;
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    width: 400px;
    margin: 10px;
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
