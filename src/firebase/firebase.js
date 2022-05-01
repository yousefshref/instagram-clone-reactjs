import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0ikBNLq6IPvmFrP3GzDh5sLqL4CF5QAM",
  authDomain: "instagram-clone-yousef.firebaseapp.com",
  projectId: "instagram-clone-yousef",
  storageBucket: "instagram-clone-yousef.appspot.com",
  messagingSenderId: "270291648543",
  appId: "1:270291648543:web:46bfe682880e609153552a"
};

export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);