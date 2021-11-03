import React from "react";
import { db } from "../firebase";
import {
  useCollection,
  useCollectionOnce,
} from "react-firebase-hooks/firestore";
import { collection, query, where } from "@firebase/firestore";
const Test = () => {
  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef, where("fullName", "==", "Santhosh"));
  const [value, loading, error] = useCollectionOnce(q, {});

  console.log(value.docs);

  return <div>Hello</div>;
};

export default Test;
