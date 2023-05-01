import styled from "styled-components";
//styled components
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
