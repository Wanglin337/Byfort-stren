// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase config dari kamu
const firebaseConfig = {
  apiKey: "AIzaSyDS-quQhT5EEr1FfG3IUtE_TTr7FnmBdeU",
  authDomain: "byfort-2931e.firebaseapp.com",
  projectId: "byfort-2931e",
  storageBucket: "byfort-2931e.firebasestorage.app",
  messagingSenderId: "98532312185",
  appId: "1:98532312185:web:3cf522f26e95105c5800a8",
  measurementId: "G-PT7SL3Y8KR"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor fitur yang dipakai
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);