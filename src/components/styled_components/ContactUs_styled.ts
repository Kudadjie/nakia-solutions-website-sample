import styled from "styled-components";
//styled components

export const NAICSection = styled.section`
  padding: 10px;
  width: 300px;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ContactUsSection = styled.section`
  padding: 10px;
  margin: 10px;
  background-color: transparent;
`;
export const ContactInfo = styled.div`
  padding: 10px;
  margin: 10px;

  h3 {
    color: #1f68aa;
  }
  a {
    color: #252525;
    text-decoration: underline;
  }

  i {
    margin: 10px;
  }

  p {
    margin: 10px 0;
  }
`;
