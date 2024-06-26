// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "notekan-2cdf1.firebaseapp.com",
    projectId: "notekan-2cdf1",
    storageBucket: "notekan-2cdf1.appspot.com",
    messagingSenderId: "583710519138",
    appId: "1:583710519138:web:4ada0184610c81c5efc63b",
    measurementId: "G-S404YGB83T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };