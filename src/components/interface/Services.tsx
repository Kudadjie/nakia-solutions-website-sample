import React from "react";
import styled from "styled-components";
import GridGallery from "./GridGallery";

//styled components
const LargeInfo = styled.p`
  font-weight: 100;
  background-color: #1b3450;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const ServicesSection = styled.section`
  padding: 10px;
  margin: 10px;

  text-align: center;
  text-align: justify;

  h2 {
    text-align: center;
    color: #1b3450;
    margin: 40px 0;
  }

  p {
    padding: 10px;
    margin: 10px;
  }
`;

const NAICSection = styled.section`
  margin: 10px;
  padding: 10px;

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
`;

interface ServicesProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
//react component
const Services: React.FC<ServicesProps> = ({ contactHandler }) => {
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

      <h2>What we Offer</h2>
      <p>
        At Nakia, we offer a comprehensive range of products and services that
        cater to diverse needs, encompassing Building and Maintenance Supplies,
        Janitorial Supplies, Cleaning Supplies, and Medical Courier Services. We
        are committed to fostering successful customer engagement and delivering
        exceptional experiences by cultivating robust client relationships,
        surpassing lifecycle requirements, and upholding our core values to the
        highest standards.
      </p>
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
                423990 - Other Miscellaneous Durable Goods Merchant Wholesalers
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
    </ServicesSection>
  );
};

export default Services;
