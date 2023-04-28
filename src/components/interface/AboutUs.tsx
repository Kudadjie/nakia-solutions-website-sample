import React from "react";
import styled from "styled-components";
//certification
import acdbe from "../../assets/acdbe cert.webp";
import dbe from "../../assets/dbe cert.webp";
import mbe from "../../assets/mbe cert.webp";
import sbe from "../../assets/sbe cert.webp";

//customers
import jonhnsonControls from "../../assets/johnson-controls.webp";
import NIH from "../../assets/NIH-Logo.webp";

import { Props } from "../types";

const AboutUsDetails = styled.section`
  padding: 20px;
  margin: 20px;
  & {
    text-align: justify;
  }
  & h2 {
    text-align: center;
  }
`;

const Certifications = styled.div`
  & div {
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

const Customers = styled.div`
  h2 {
    margin: 0 auto;
    width: fit-content;
    color: #79a4cd;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin: 10px;
    }
  }
`;
const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsDetails>
        <h2>About Us</h2>
        <p>
          Our commitment to ensuring successful customer engagement and
          experience is achieved through the development of robust client
          relationships, efficient deliveries, and personalized customer
          service. We strive to exceed the expectations of our valued clients by
          ensuring that all lifecycle requirements are met with the highest
          standard of quality in accordance with our core values.
          <br></br>
          <br></br>
          Nakia Solutions is personable with a diverse staff (maintenance, real
          estate & health care) We use the latest project management tools to
          streamline our purchase orders, quotes and delivery of products
        </p>
      </AboutUsDetails>

      <Customers>
        <h2>Trusted Clients</h2>
        <div>
          <img src={jonhnsonControls} alt="Johnson Controls" width="200" />
          <img className="NIH" src={NIH} alt="NIH" width="300" />
        </div>
      </Customers>
      <Certifications>
        <div>
          <img src={acdbe} alt="ACDBE certification"></img>
          <img src={dbe} alt="DBE certification"></img>

          <img src={mbe} alt="MBE certification"></img>
          <img src={sbe} alt="SBE certification"></img>
        </div>
      </Certifications>
    </>
  );
};

export default AboutUs;
