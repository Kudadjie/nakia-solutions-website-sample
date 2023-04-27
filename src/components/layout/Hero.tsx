import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import HeroImage from "../../assets/Hero - Mobile.webp";
import "./Hero.scss";
const HeroSection = styled.span`
  position: fixed;
  font-family: "Bitter", serif;
  font-size: 1.25rem;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  z-index: 10;
`;

const ContactUsBtn = styled.button`
  color: white;
  padding: 10px;
  margin: 10px;
`;
const Hero: React.FC = () => {
  return (
    <div>
      <img
        src={HeroImage}
        alt="Hero Image Nakia Solutions"
        style={{ position: "absolute" }}
      />
      <HeroSection>
        <span>
          We exceed expectations every time in delivering top-notch
          <TypewriterComponent
            options={{ loop: true }}
            onInit={(writer) => {
              writer
                .typeString("Building and Maintenance Supply Services")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Janitorial Supply Services")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Cleaning Supply Services")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Medical Courier Services")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
          to keep your facilities running smoothly
        </span>
      </HeroSection>
      <ContactUsBtn>Contact Us</ContactUsBtn>
    </div>
  );
};

export default Hero;
