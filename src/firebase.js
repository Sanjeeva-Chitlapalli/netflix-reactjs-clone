// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkX_eB8ch4NjSyDW5Xo8f6CmJf0knr2Jw",
  authDomain: "netflix-86f19.firebaseapp.com",
  projectId: "netflix-86f19",
  storageBucket: "netflix-86f19.appspot.com",
  messagingSenderId: "277760476746",
  appId: "1:277760476746:web:96c16f24e038fd0b53c8b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
