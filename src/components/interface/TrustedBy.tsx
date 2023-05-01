import React from "react";
import jonhnsonControls from "../../assets/johnson-controls.webp";
import NIH from "../../assets/NIH-Logo.webp";
import {
  Customer1,
  Customer2,
  Customer3,
  RatedOutstanding,
  SectionTrustedBy,
} from "./TrustedBy_styled";

const TrustedBy: React.FC = () => {
  return (
    <>
      <SectionTrustedBy>
        <Customer1 src={jonhnsonControls} alt="Johnson Controls" />
        <Customer2 className="NIH" src={NIH} alt="NIH" />
        <Customer3 className="NIH" src={NIH} alt="NIH" />
      </SectionTrustedBy>
      <RatedOutstanding>
        We are rated <b style={{ color: "gold" }}>"Outstanding"</b> by our
        trusted clients!
      </RatedOutstanding>
    </>
  );
};
export default TrustedBy;
