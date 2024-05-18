// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYqyGTRyFabFziCdbhUlCcRq4bsPeuWA",
  authDomain: "travessia-c6d55.firebaseapp.com",
  projectId: "travessia-c6d55",
  storageBucket: "travessia-c6d55.appspot.com",
  messagingSenderId: "839559770534",
  appId: "1:839559770534:web:f61208e40575aa52cd9f67",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
