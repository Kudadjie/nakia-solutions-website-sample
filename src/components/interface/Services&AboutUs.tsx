import React from "react";

import GridGallery from "./GridGallery";
import {
  ServicesSection,
  LargeInfo,
  TextSection,
  AboutUsDetails,
  AboutUsBackdrop,
} from "./Services&AboutUs_styled";

interface Services_AboutUsProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

//react component
const Services_AboutUs: React.FC<Services_AboutUsProps> = ({
  contactHandler,
}) => {
  return (
    <>
      <ServicesSection>
        <h2>Popular Products</h2>
        <GridGallery contactHandler={contactHandler} />
      </ServicesSection>
      <LargeInfo>
        We provide quality services to the National Institute of Health research
        community, federal agencies, and state and local municipalities with
        high standards for efficiency and customer service.
      </LargeInfo>

      <AboutUsBackdrop>
        <div>
          <TextSection>
            <AboutUsDetails>
              <h2>About Us</h2>
              <p>
                Our commitment to ensuring successful customer engagement and
                experience is achieved through the development of robust client
                relationships, efficient deliveries, and personalized customer
                service. We strive to exceed the expectations of our valued
                clients by ensuring that all lifecycle requirements are met with
                the highest standard of quality in accordance with our core
                values.
                <br></br>
                <br></br>
                Nakia Solutions is personable with a diverse staff (maintenance,
                real estate & health care) We use the latest project management
                tools to streamline our purchase orders, quotes and delivery of
                products
              </p>
            </AboutUsDetails>
          </TextSection>
        </div>
      </AboutUsBackdrop>
    </>
  );
};

export default Services_AboutUs;
