import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import HeroImage1 from "../../assets/hero-images/1.webp";
import HeroImage2 from "../../assets/hero-images/2.webp";
import HeroImage4 from "../../assets/hero-images/4.webp";
import HeroImage5 from "../../assets/hero-images/5.webp";
import HeroImage3 from "../../assets/hero-images/3.webp";

import "./Hero.scss";
const HeroSection = styled.span`
  font-size: 1rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 200px;

  top: 276px;

  & span {
    text-align: center;
  }

  & a {
    color: white;
    width: fit-content;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2984ca;
    border-radius: 10px;
  }

  & a:visited {
    color: white;
  }
`;
const Hero: React.FC = () => {
  return (
    <div>
      <img
        src={HeroImage2}
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
        <a rel="noopener" href="#contact-us">
          Contact Us
        </a>
      </HeroSection>
    </div>
  );
};

export default Hero;
