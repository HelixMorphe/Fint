import React, { useState } from "react";
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
  updateDoc,
  arrayUnion,
  query,
  where,
} from "firebase/firestore";

const Container = styled.div`
  width: 60%;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label``;
const Input = styled.input`
  padding: 0.625rem;
  outline: none;
`;

const FormInput = () => {
  // console.log(referredBy);
  const router = useRouter();
  const referredBy = router.query.referredBy;
  console.log(referredBy);
  const initialFieldValues = {
    fullName: "",
    email: "",
    mobileNumber: "",
    referredBy: referredBy | "",
    referrals: [""],
  };
  var [values, setValues] = useState(initialFieldValues);

  const usersCollectionRef = collection(db, "users");

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const pushDb = async () => {
    await setDoc(doc(usersCollectionRef, values.mobileNumber), values);
  };

  const updateRef = async (id) => {
    const refDoc = doc(db, "users", id);
    const newFields = {
      referredBy: id,
    };
    await updateDoc(refDoc, newFields);
  };
  const check = async () => {
    const docRef = doc(db, "users", values.mobileNumber);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    } else {
      pushDb(values);
      updateRef(router.query.referredBy);
    }

    //Redirecting User
    router.push(`/users/${values.mobileNumber}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    check();
  };
  return (
    <Container>
      <Form autoComplete={0} onSubmit={handleFormSubmit}>
        <Input
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
          autoComplete={0}
        />
        <Input
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          autoComplete={0}
        />
        <Input
          placeholder="Mobile Number"
          name="mobileNumber"
          value={values.mobileNumber}
          onChange={handleInputChange}
          autoComplete={0}
        />
        <Input type="submit" value="Save" />
      </Form>
    </Container>
  );
};

export default FormInput;
