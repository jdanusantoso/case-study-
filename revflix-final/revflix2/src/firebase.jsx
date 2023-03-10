import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "",
  authDomain: "revflix2.firebaseapp.com",
  projectId: "revflix2",
  storageBucket: "revflix2.appspot.com",
  messagingSenderId: "803348210934",
  appId: "1:803348210934:web:3f308d0fe311c6db17f8d7",
  measurementId: "G-JEQQZ742JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);