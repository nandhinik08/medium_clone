// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs27w7HThp0lhCMMtv1a9zF5qTUmoBdwU",
  authDomain: "medium-clone-ed803.firebaseapp.com",
  projectId: "medium-clone-ed803",
  storageBucket: "medium-clone-ed803.appspot.com",
  messagingSenderId: "303052013185",
  appId: "1:303052013185:web:228bf78642ae8b5a939780",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
