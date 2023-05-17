import styled from "styled-components";

export const Divider = styled.div`
  width: 100%;
  background: rgb(255, 175, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 175, 0, 1) 0%,
    rgba(223, 151, 4, 1) 35%,
    rgba(255, 154, 0, 1) 100%
  );
  height: 10px;
`;

//styled components
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 426px) and (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Certified = styled(Section)`
  margin: 50px;
  //Tablet
  @media screen and (min-width: 50px) and (max-width: 1200px) {
    flex-direction: column;
  }

  //Desktop
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-evenly;

    gap: 0px;
  }
`;

export const Certification = styled.img`
  width: 160px;

  //Tablet

  //Desktop
  @media screen and (min-width: 1200px) {
  }
`;

export const ProudlyCertified = styled.p`
  padding: 40px;
  font-size: 30px;
  text-align: center;
  background-color: rgb(27, 52, 80);
  color: white;

  //Tablet

  //Desktop
  @media screen and (min-width: 1200px) {
  }
`;
