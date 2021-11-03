import { Slider } from "@mui/material";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
const Container = styled.div`
  height: 100vh;
  background: #00b4db;
  background: -webkit-linear-gradient(to bottom right, #418599, #185f73);
  background: linear-gradient(to bottom right, #418599, #185f73);

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
const Wrapper = styled.div`
  height: 80vh;
  margin: auto;
  /* width: 60vw; */
  background-color: white;
  border-radius: 1rem;
`;
const Form = styled.form`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #af460f;

  height: 100%;
`;
const Title = styled.h2`
  font-size: 1.75rem;
`;
const FormContainer = styled.div`
  border: 1px solid #fed39f;
  border-radius: 1rem;
  padding: 2rem;
  width: 60%;
  margin: auto;
`;

const OptionsContainer = styled.div``;
const OptionsTitle = styled.h3``;
const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const Label = styled.label``;
const Line = styled.div`
  /* border-top: 0.5px solid blue; */
  margin: 1.5rem 0;
`;

const Button = styled.button`
  /* border: 2px solid black; */
`;

const FormSection = () => {
  const [inputs, setInputs] = useState({});
  const [sliderInput, setSliderInput] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container id="form-section">
      <Carousel />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Tell us you’re saving without telling us you’re saving</Title>
          <FormContainer>
            <OptionsContainer>
              <Option>
                <Label>How much are you willing to spend?</Label>
                <Slider
                  size="small"
                  defaultValue={200}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  min={100}
                  max={1000}
                />
              </Option>
              <Line />
              <Option>
                <Label>How much are you willing to spend?</Label>
                <Slider
                  size="small"
                  defaultValue={200}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  min={100}
                  max={1000}
                />
              </Option>
            </OptionsContainer>
          </FormContainer>
          <Button>Predict</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default FormSection;
