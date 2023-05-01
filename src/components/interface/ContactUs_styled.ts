import styled from "styled-components";
//styled components
export const ContactUsSection = styled.section`
  padding: 10px;
  margin: 10px;
  background-color: #8fbfec;
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    background-color: transparent;
  }
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
