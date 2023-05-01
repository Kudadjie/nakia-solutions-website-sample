import React from "react";
import TypewriterComponent from "typewriter-effect";

//styled components
import "./Hero.scss";
import { HeroContainer, HeroSection, HeroBackdrop } from "./Hero_styled";
import TrustedBy from "../interface/TrustedBy";

interface HeroProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ contactHandler }) => {
  return (
    <HeroContainer>
      <HeroBackdrop>
        <HeroSection>
          <span>
            <h2 style={{ marginBottom: "10px" }}>What We Do</h2>
            At Nakia, we offer a comprehensive range of products and services
            that cater to diverse needs, encompassing Building and Maintenance
            Supplies, Janitorial Supplies, Cleaning Supplies, and Medical
            Courier Services.
            <br></br>
            <br></br>
            We are committed to fostering successful customer engagement and
            delivering exceptional experiences by cultivating robust client
            relationships, surpassing lifecycle requirements, and upholding our
            core values to the highest standards.
            <br></br>
            <br></br>
            <br></br>
            We exceed expectations every time in delivering top-notch
            <TypewriterComponent
              options={{ loop: true }}
              onInit={(writer) => {
                writer
                  .typeString("Building and Maintenance Supply Services.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Janitorial Supply Services.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Cleaning Supply Services.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Medical Courier Services.")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
          <a rel="noopener" onClick={() => contactHandler(true)}>
            Request
          </a>
        </HeroSection>
      </HeroBackdrop>

      <TrustedBy />
    </HeroContainer>
  );
};

export default Hero;
