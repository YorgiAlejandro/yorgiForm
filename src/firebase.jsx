import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCbXUB06PyuyqjOsLe7Aeh23lwiJa7aVM0",
    authDomain: "fir-login-95877.firebaseapp.com",
    projectId: "fir-login-95877",
    storageBucket: "fir-login-95877.appspot.com",
    messagingSenderId: "594107189797",
    appId: "1:594107189797:web:dcd5629bf520f14b994dcc"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
