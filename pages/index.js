import { useRouter } from "next/router";
import Header from "../components/Header";
import Section from "../components/Section";
import styled from "styled-components";
import FormSection from "../components/FormSection";
import { InputSection } from "../components/InputSection";
const Container = styled.div``;
export default function Home() {
  const router = useRouter();
  const referredBy = router.query.referredBy;

  return (
    <Container>
      <Header />
      <Section />
      <FormSection />
      <InputSection />
    </Container>
  );
}
