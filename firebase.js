// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQrGgbrwkzRrz7vV4TYdevPGq8hPrefCU",
  authDomain: "fint-9430a.firebaseapp.com",
  databaseURL: "https://fint-9430a-default-rtdb.firebaseio.com",
  projectId: "fint-9430a",
  storageBucket: "fint-9430a.appspot.com",
  messagingSenderId: "280370117918",
  appId: "1:280370117918:web:c2b4fe07e69d1d1ccb1d0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export { app };
