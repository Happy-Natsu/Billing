import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnxk6GbrBqM6BQgYZ8pvPh4IWmTGDtIO8",
  authDomain: "bill-be632.firebaseapp.com",
  projectId: "bill-be632",
  storageBucket: "bill-be632.appspot.com",
  messagingSenderId: "355887181433",
  appId: "1:355887181433:web:8c8d2c1445e54ce3f8eea8",
  measurementId: "G-0EY20XXT38",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
