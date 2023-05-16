// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlNHF6WqcZAJVykZt4aO4LfChPXqydthE",
  authDomain: "nhjsi-248e5.firebaseapp.com",
  projectId: "nhjsi-248e5",
  storageBucket: "nhjsi-248e5.appspot.com",
  messagingSenderId: "719735440795",
  appId: "1:719735440795:web:223e690531e36938c7cd3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const actionCodeSettings = {
  url: "http://127.0.0.1:5173/",
  handleCodeInApp: true,
};
