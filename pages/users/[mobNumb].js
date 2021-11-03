import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Header from "../../components/Header";
import LeaderBoard from "../../components/LeaderBoard";
import UserPage from "../../components/UserPage";
const Container = styled.div``;

const UserDetail = () => {
  const router = useRouter();
  const mobile = router.query.mobNumb;

  return (
    <Container>
      <Header />
      <UserPage mobile={mobile} />
    </Container>
  );
};

export default UserDetail;
