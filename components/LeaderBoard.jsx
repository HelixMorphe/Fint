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
import { async } from "@firebase/util";

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

const LeaderBoard = ({ mobile }) => {
  const [leaders, setLeaders] = useState([]);
  const [user, setUser] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUser = async () => {
      const q = query(
        usersCollectionRef,
        where("mobileNumber", "==", mobile || "25")
      );
      const querySnapshot = await getDocs(q);
      setUser(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUser();
  }, []);

  useEffect(() => {
    const getLeaders = async () => {
      const q = query(usersCollectionRef, orderBy("fullName", "asc"), limit(3));

      const querySnapshot = await getDocs(q);

      setLeaders(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getLeaders();
  }, []);
  var findUser = leaders.findIndex(function (leader) {
    if (leader.mobileNumber == mobile) return true;
  });

  return (
    <Container>
      <Title>LeaderBoard</Title>
      {leaders.map((leader, index) => {
        if (index === findUser) {
          return (
            <MyRank>
              <Index>{index}</Index>
              <Name>{leader.fullName}</Name>
              <Points>10</Points>
            </MyRank>
          );
        } else {
          return (
            <Rank>
              <Index>{index}</Index>
              <Name>{leader.fullName}</Name>
              <Points>10</Points>
            </Rank>
          );
        }
      })}

      {findUser == -1 &&
        user.map((user) => {
          return (
            <MyRank>
              <Index>1</Index>
              <Name>{user.fullName}</Name>
              <Points>10</Points>
            </MyRank>
          );
        })}
    </Container>
  );
};

export default LeaderBoard;
