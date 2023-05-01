import React from "react";

//certification
import acdbe from "../../assets/acdbe cert.webp";
import dbe from "../../assets/dbe cert.webp";
import mbe from "../../assets/mbe cert.webp";
import sbe from "../../assets/sbe cert.webp";

//customers
import jonhnsonControls from "../../assets/johnson-controls.webp";
import NIH from "../../assets/NIH-Logo.webp";
import {
  Customers,
  CustomerRemark,
  Certifications,
  Section,
} from "./Customers_styled";

//react component
const AboutUs: React.FC = () => {
  return (
    <>
      <Customers>
        <CustomerRemark>
          <h2>"Outstanding Service"</h2>
          <p>
            <i>- our clients</i>
          </p>
        </CustomerRemark>

        <Section>
          <img src={jonhnsonControls} alt="Johnson Controls" width="200" />
          <img className="NIH" src={NIH} alt="NIH" width="300" />
        </Section>
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
