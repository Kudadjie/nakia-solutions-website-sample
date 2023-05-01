import styled from "styled-components";

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

export const Certifications = styled.div`
  div {
    display: flex;

    justify-content: center;
    margin-bottom: 20px;
    margin-top: 50px;
    img {
      width: 90px;
      padding: 0 5px;
    }
  }
`;
export const Customers = styled.div`
  h2 {
    margin: 0 auto;

    width: fit-content;
    color: #79a4cd;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img {
      margin: 10px;
    }
  }
`;

export const CustomerRemark = styled.div`
  display: flex;
  flex-direction: column;
`;
