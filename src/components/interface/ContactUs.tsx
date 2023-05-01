import React from "react";
import { ContactUsSection, ContactInfo } from "./ContactUs_styled";

//react component
const ContactUs: React.FC = () => {
  return (
    <ContactUsSection>
      <ContactInfo>
        <h3>
          <a id="contact-us"></a>Interested in working with Nakia?
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
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
      </ContactInfo>
    </ContactUsSection>
  );
};

export default ContactUs;
