import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGIf0dOqkBfi9Hgi1NF6zIDLw2mHW0Jaw",
  authDomain: "ai-flashcard-cc1e1.firebaseapp.com",
  projectId: "ai-flashcard-cc1e1",
  storageBucket: "ai-flashcard-cc1e1.appspot.com",
  messagingSenderId: "765788346344",
  appId: "1:765788346344:web:20baae54478e4e7c00765d",
  measurementId: "G-2BCEXRB7TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
