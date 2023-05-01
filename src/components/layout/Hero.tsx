import React from "react";
import TypewriterComponent from "typewriter-effect";
import HeroImageMobile from "../../assets/hero-images/hero-image.webp";
import HeroImageTablet from "../../assets/hero-images/Hero-Tablet.webp";

//styled components
import "./Hero.scss";
import { HeroContainer, HeroSection } from "./Hero_styled";

interface HeroProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ contactHandler }) => {
  return (
    <HeroContainer>
      <picture>
        {/* //Desktop? */}
        <source media="(min-width: 426px)" srcSet={HeroImageTablet} />
        <source media="(max-width: 425px)" srcSet={HeroImageMobile} />
        <img
          src={HeroImageMobile}
          alt="Hero Image Nakia Solutions"
          style={{ width: "100vw" }}
        />
      </picture>
      <HeroSection>
        <span>
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
    </HeroContainer>
  );
};

export default Hero;
