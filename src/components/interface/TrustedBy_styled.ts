import styled from "styled-components";
import { Section } from "./Customers_styled";

export const SectionTrustedBy = styled(Section)`
  //Tablet
  @media screen and (min-width: 580px) and (max-width: 1200px) {
    gap: 0px;
  }

  //Desktop
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 50px;
    gap: 0px;
  }
`;

export const Customer1 = styled.img`
  width: 100px;
  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    width: 200px;
  }
`;
export const Customer2 = styled.img`
  width: 240px;
  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;
export const Customer3 = styled(Customer2)``;

export const RatedOutstanding = styled.p`
  padding: 40px;
  background-color: rgb(27, 52, 80);
  color: white;
  text-align: center;
  margin-top: 50px;

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    font-size: x-large;
  }
`;
