import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom right, #d846ef, #9233e6);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  max-width: 1250px;
  margin: auto;
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 2rem;
  color: #ffe8cd;
  flex: 1;
`;
const Span = styled.span`
  font-size: 2.5rem;
  /* color: #e59866; */
`;
const FormContainer = styled.div`
  flex: 1;
`;

export const InputSection = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          We will send you a personalized portfolio insights to make you achieve
          your goal efficiently for <Span>Free!</Span>
        </Title>
        <FormContainer>
          <FormInput />
        </FormContainer>
      </Wrapper>
    </Container>
  );
};
