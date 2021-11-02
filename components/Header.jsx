import styled from "styled-components";
import { Logo } from "../data";
import Link from "next/link";
const Container = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  padding: 0px 1rem;
`;

const Img = styled.img`
  width: 100px;
`;

const Header = () => {
  return (
    <Container>
      <Img src={Logo} alt="logo" />
    </Container>
  );
};

export default Header;
