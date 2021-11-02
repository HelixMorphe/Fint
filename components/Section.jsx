import React from "react";
import styled from "styled-components";
import { HeroImage } from "../data";
const Container = styled.div`
  height: 100vh;
  background: #00b4db;
  background: linear-gradient(to bottom, #ea6753, #fd9464);
  background: -webkit-linear-gradient(to bottom, #ea6753, #fd9464);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 95%;
  max-width: 1250px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Hero = styled.div`
  color: #fadeac;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 3rem;
`;
const SubTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;
const Button = styled.a`
  padding: 1rem 1.75rem;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  outline: none;
  background: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
const HeroPoster = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  /* border: 2px solid white; */
`;

const Img = styled.img`
  width: 400px;
`;

const Section = () => {
  return (
    <Container>
      <Wrapper>
        <HeroPoster>
          <Img src={HeroImage} />
        </HeroPoster>
        <Hero>
          <Title>Your Google Maps for Money.</Title>
          <SubTitle>
            We not only smartly allocate your capital- we co-create seamless
            investing experience. Crush your financial goals with us.
          </SubTitle>
          <Button href="#form-section">Join Us</Button>
        </Hero>
      </Wrapper>
    </Container>
  );
};

export default Section;
