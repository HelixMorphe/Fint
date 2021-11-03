import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import LeaderBoard from "./LeaderBoard";
import LeaderBoard2 from "./LeaderBoard2";
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
const UserPage = () => {
  const router = useRouter();
  const mobile = router.query.mobNumb;
  return (
    <Container>
      <Wrapper>
        <Title>
          Thank you for becoming a part of #FintFamily😀. At Fint, we believe in
          co-creating the investment experience.
          <br />
          Invite your friends to join and earn exclusive FINT coins.
        </Title>
        <LeaderBoard2 mobile={mobile} />
      </Wrapper>
    </Container>
  );
};

export default UserPage;
