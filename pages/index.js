import Header from "../components/Header";
import Section from "../components/Section";
import styled from "styled-components";
import FormSection from "../components/FormSection";
import { InputSection } from "../components/InputSection";
const Container = styled.div``;
export default function Home() {
  return (
    <Container>
      <Header />
      <Section />
      <FormSection />
      <InputSection />
    </Container>
  );
}
