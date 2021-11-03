import React from "react";
import styled from "styled-components";
import LeaderBoard from "./LeaderBoard";
const Container = styled.div`
  background: linear-gradient(to bottom right, #49dd81, #07b0cb);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1``;
const Wrapper = styled.div`
  width: 90%;
  max-width: 1500px;
`;
const UserPage = ({ mobile }) => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Thank you for becoming a part of #FintFamily😀. At Fint, we believe in
          co-creating the investment experience.
          <br />
          Invite your friends to join and earn exclusive FINT coins.
        </Title>
        <LeaderBoard mobile={mobile} />
      </Wrapper>
    </Container>
  );
};

export default UserPage;
