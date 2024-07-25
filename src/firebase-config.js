// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhn7pDRdLMlii2cyxvCqqFXpAQLFvk5Qw",
  authDomain: "chatapp-ecb83.firebaseapp.com",
  projectId: "chatapp-ecb83",
  storageBucket: "chatapp-ecb83.appspot.com",
  messagingSenderId: "720661073611",
  appId: "1:720661073611:web:14f9d58c10adf99dab154e",
  measurementId: "G-PRH0Q9091D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
