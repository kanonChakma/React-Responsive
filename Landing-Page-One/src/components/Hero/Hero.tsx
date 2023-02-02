import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  ButtonWrapper,
  HeroButton,
  HeroSection,
  HeroText,
  HeroVedio,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVedio src="../../../public/assets/hero.mp4" />
      <Container>
        <MainHeading>Your data is sure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Stared</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
