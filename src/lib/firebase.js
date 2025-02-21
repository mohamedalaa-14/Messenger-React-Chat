import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-bc8fc.firebaseapp.com",
  projectId: "reactchat-bc8fc",
  storageBucket: "reactchat-bc8fc.firebasestorage.app",
  messagingSenderId: "697429559526",
  appId: "1:697429559526:web:6deab546dfafcc03b5d327",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
