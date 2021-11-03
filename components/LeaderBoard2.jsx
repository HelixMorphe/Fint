import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

import {
  useCollectionOnce,
  useCollection,
} from "react-firebase-hooks/firestore";

const Container = styled.div`
  border-radius: 1rem;
  background: linear-gradient(to right, #d044ef, #9c35eb);
  padding: 3rem;
  width: 80%;
  margin: auto;
`;
const Title = styled.h1`
  text-align: center;
`;

const Rank = styled.div`
  /* border: 1px solid black; */
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  width: 70%;
  margin: auto;
  margin-bottom: 0.5rem;
  background: white;
`;
const MyRank = styled.div`
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  width: 70%;
  margin: auto;
  margin-bottom: 0.5rem;
  background: lightblue;
  cursor: pointer;
`;
const Index = styled.div`
  flex: 1;
  text-align: center;
`;
const Name = styled.div`
  flex: 1;
  text-align: center;
`;
const Points = styled.div`
  flex: 1;
  text-align: center;
`;

const LeaderBoard2 = ({ mobile }) => {
  const [leaders, setLeaders] = useState([]);
  const [user, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const q = query(
    usersCollectionRef,
    where("mobileNumber", "==", mobile || "00")
  );
  const [value, loading, error] = useCollection(q, {});
  {
    !loading && !error && console.log("OK");
  }

  //Leaders

  const q1 = query(usersCollectionRef, orderBy("referrals", "asc"), limit(10));
  const [leadersValue, leadersLoading, leadersError] = useCollection(q1, {});

  return (
    <Container>
      {leadersLoading && <div>Loading ...</div>}
      {leadersValue &&
        leadersValue.docs.map((doc, index) => (
          <Rank key={doc.id}>
            <Index>{index}</Index>
            <Name>{doc.data().fullName}</Name>
            <Points>10</Points>
          </Rank>
        ))}
    </Container>
  );
};

export default LeaderBoard2;
