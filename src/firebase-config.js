import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8OiIRXR1SsIcm_xXsr7KeL69TKQilONo",
  authDomain: "fir-tutorial-bfd20.firebaseapp.com",
  projectId: "fir-tutorial-bfd20",
  storageBucket: "fir-tutorial-bfd20.appspot.com",
  messagingSenderId: "368405225965",
  appId: "1:368405225965:web:42b0ab4699454b1cd507e4",
  measurementId: "G-BKFN04QTVR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
