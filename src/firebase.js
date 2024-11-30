// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDSwVVanSOrZ-pYRi-Ia0eTQlDT7bwZucA",
  authDomain: "superchat-d0dd3.firebaseapp.com",
  projectId: "superchat-d0dd3",
  storageBucket: "superchat-d0dd3.firebasestorage.app",
  messagingSenderId: "15837325171",
  appId: "1:15837325171:web:85bec625db5d7ae65c4706",
  measurementId: "G-Y27C0BVD0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
