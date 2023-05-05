import React from "react";
import MBE from "../../assets/certifications/MBE.webp";
import SBE from "../../assets/certifications/SBE.webp";
import ACDBE from "../../assets/certifications/ACDBE.webp";
import DBE from "../../assets/certifications/DBE.webp";
import {
  Certification,
  Divider,
  ProudlyCertified,
  Certified,
} from "../styled_components/Certification_styled";

const CertificationSection: React.FC = () => {
  return (
    <>
      <Divider></Divider>
      <ProudlyCertified>
        <b>We are Proudly Certified!</b>
      </ProudlyCertified>
      <Certified>
        <Certification src={DBE} alt="DBE" />
        <Certification src={MBE} alt="MBE" />
        <Certification src={SBE} alt="SBE" />
        <Certification src={ACDBE} alt="ACDBE" />
      </Certified>
    </>
  );
};
export default CertificationSection;
