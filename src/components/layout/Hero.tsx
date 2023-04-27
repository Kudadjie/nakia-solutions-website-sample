import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import "./Hero.scss";
const HeroSection = styled.span`
  font-family: "Bitter", serif;
  font-size: 1.25rem;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const ContactUsBtn = styled.button`
  color: white;
  padding: 10px;
  margin: 10px;
`;
const Hero: React.FC = () => {
  return (
    <div>
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
