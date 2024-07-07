import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: "react-chat-app-c86ee.firebaseapp.com",
  projectId: "react-chat-app-c86ee",
  storageBucket: "react-chat-app-c86ee.appspot.com",
  messagingSenderId: "866598324411",
  appId: "1:866598324411:web:8724a8c31a12fcf73d419e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
