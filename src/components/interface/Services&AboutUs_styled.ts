import styled from "styled-components";

//styled components
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;

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
  text-align: justify;

  h2 {
    text-align: center;
    color: #1b3450;
    margin: 40px 0;
  }

  p {
    padding: 10px;
    margin: 10px;
  }
`;

export const LargeInfo = styled.p`
  font-weight: 100;
  background-color: #1b3450;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const WhatWeOfferImageFrame = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
`;

export const NAICSection = styled.section`
  margin: 10px;
  padding: 10px;

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
`;

export const AboutUsDetails = styled.section`
  text-align: justify;

  h2 {
    text-align: center;
    color: #1b3450;
    margin-bottom: 20px;
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    h2 {
      text-align: initial;
      margin-left: 6%;
    }
  }
  //Desktop
  @media screen and (min-width: 1200px) {
  }
`;
