import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import HeroImage from "../../assets/Hero - Mobile.webp";
import "./Hero.scss";
const HeroSection = styled.span`
  font-family: "Bitter", serif;
  color: white;
  font-size: 1.2rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: 200px;
  position: absolute;
  top: 276px;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(16 19 24 / 75%);

  & span {
    text-align: center;
  }

  & button {
    margin-top: 20px;
    padding: 10px 50px;
  }
`;

const ContactUsBtn = styled.button`
  color: white;
  padding: 10px;
  margin: 10px;
  margin: 0 auto;
`;
const Hero: React.FC = () => {
  return (
    <div>
      <img
        src={HeroImage}
        alt="Hero Image Nakia Solutions"
        style={{ width: "100vw" }}
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
        </span>
        <ContactUsBtn>Contact Us</ContactUsBtn>
      </HeroSection>
    </div>
  );
};

export default Hero;
