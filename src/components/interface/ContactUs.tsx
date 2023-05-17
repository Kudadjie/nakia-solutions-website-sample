import React from "react";
import {
  ContactUsSection,
  ContactInfo,
  Container,
  NAICSection,
} from "../styled_components/ContactUs_styled";

//react component
const ContactUs: React.FC = () => {
  return (
    <Container>
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
      <ContactUsSection>
        <ContactInfo>
          <h3>
            <a></a>Interested in working with Nakia?
          </h3>
          <p>We will be glad to hear from you!</p>
          <em>
            <p>Nakia Solutions Inc</p>
            <p>706 Hammond Branch Rd</p>
            <p>Odenton, MD 21113</p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+1 301 335 9538">+1 301 335 9538</a>
          </em>

          <br></br>
          <i className="fa-solid fa-envelope-open-text"></i>
          <a href="mailto:nakiasolutions@gmail.com">nakiasolutions@gmail.com</a>
          <div>
            {/* TODO - USE LINKEDIN PROFILE URL */}
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </ContactInfo>
      </ContactUsSection>
    </Container>
  );
};

export default ContactUs;
