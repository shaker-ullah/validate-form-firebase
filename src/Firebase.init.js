// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlVPd-y0YEnrK4_9K_kpQH0afYzEFh8sM",
  authDomain: "user-email-password-auth-316fa.firebaseapp.com",
  projectId: "user-email-password-auth-316fa",
  storageBucket: "user-email-password-auth-316fa.appspot.com",
  messagingSenderId: "97634400912",
  appId: "1:97634400912:web:f7185d4436038e809cf615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)