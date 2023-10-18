// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZALiGkz5DNS4F8S27FIM445sJvn0IS4",
  authDomain: "websolidariteapp-550c9.firebaseapp.com",
  projectId: "websolidariteapp-550c9",
  storageBucket: "websolidariteapp-550c9.appspot.com",
  messagingSenderId: "254412882996",
  appId: "1:254412882996:web:581ec7971ff0026faf3661",
  measurementId: "G-FQDY4QCRB5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const usersDb = collection(db, 'users')

export default app;