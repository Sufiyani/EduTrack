import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQXK3jE5j6Zc0MQfJzTilkmQgNKKgLLuw",
  authDomain: "first-authentication-f6e31.firebaseapp.com",
  projectId: "first-authentication-f6e31",
  storageBucket: "first-authentication-f6e31.firebasestorage.app",
  messagingSenderId: "18421967335",
  appId: "1:18421967335:web:4af58a9f564b41a02db542"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
