import React from "react";
import WhatWeOfferImage from "../../assets/about-us-images/About-Us-Mobile .webp";
import WhatWeOfferImageTablet_Desktop from "../../assets/about-us-images/About-Us-Tablet .webp";
import GridGallery from "./GridGallery";
import {
  ServicesSection,
  LargeInfo,
  ServicesContainer,
  TextSection,
  WhatWeOfferImageFrame,
  AboutUsDetails,
  NAICSection,
} from "./Services&AboutUs_styled";

interface Services_AboutUsProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

//react component
const Services_AboutUs: React.FC<Services_AboutUsProps> = ({
  contactHandler,
}) => {
  return (
    <ServicesSection>
      <h2>Popular Products</h2>
      <GridGallery contactHandler={contactHandler} />
      <LargeInfo>
        <i>
          " We provide quality services to the National Institute of Health
          research community, federal agencies, and state and local
          municipalities with high standards for efficiency and customer
          service."
        </i>
      </LargeInfo>
      <ServicesContainer>
        <TextSection>
          <h2>What we Offer</h2>
          <WhatWeOfferImageFrame>
            <img
              src={WhatWeOfferImageTablet_Desktop}
              alt="What we offer - Nakia Solutions"
            />
          </WhatWeOfferImageFrame>
          <p>
            At Nakia, we offer a comprehensive range of products and services
            that cater to diverse needs, encompassing Building and Maintenance
            Supplies, Janitorial Supplies, Cleaning Supplies, and Medical
            Courier Services. We are committed to fostering successful customer
            engagement and delivering exceptional experiences by cultivating
            robust client relationships, surpassing lifecycle requirements, and
            upholding our core values to the highest standards.
          </p>
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
        <NAICSection>
          <table>
            <thead>
              <tr>
                <th>NAIC Codes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  423990 - Other Miscellaneous Durable Goods Merchant
                  Wholesalers
                </td>
              </tr>
              <tr>
                <td>423220 - Home Furnishing Merchant</td>
              </tr>
              <tr>
                <td>
                  423610 - Electrical Apparatus and Equipment, Wiring Supplies,
                  and Related Equipment Merchant Wholesalers
                </td>
              </tr>

              <tr>
                <td>
                  423450 - Medical, Dental, and Hospital Equipment and Supplies
                  Merchant
                </td>
              </tr>
              <tr>
                <td>339113 - Surgical Appliance & Supplies Manufacturing</td>
              </tr>
              <tr>
                <td>
                  488999 - All Other Transit and Ground Passenger Transportation
                </td>
              </tr>
              <tr>
                <td>492210 - Local Messengers and Local Delivery</td>
              </tr>
            </tbody>
          </table>
        </NAICSection>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services_AboutUs;
