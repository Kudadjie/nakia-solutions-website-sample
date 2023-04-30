import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import HeroImage from "../../assets/hero-images/hero-image.webp";

//styled components
import "./Hero.scss";
const HeroSection = styled.span`
  position: absolute;
  top: 126px;
  font-size: 1rem;
  padding: 28px 15px 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 30px;
  text-align: center;
  color: white;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(16 19 24 / 75%);
  z-index: 5;

  :first-child {
    padding: 0px 20px;
  }

  a {
    color: white;
    width: fit-content;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2984ca;
    border-radius: 10px;
  }

  a:visited {
    color: white;
  }
`;
interface HeroProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
//react component
const Hero: React.FC<HeroProps> = ({ contactHandler }) => {
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
    </div>
  );
};

export default Hero;
