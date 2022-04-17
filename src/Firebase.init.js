// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3_MNwvf91FPhQmNeSkxsFEmxKZFet3j4",
    authDomain: "elite-physiotherapy-center.firebaseapp.com",
    projectId: "elite-physiotherapy-center",
    storageBucket: "elite-physiotherapy-center.appspot.com",
    messagingSenderId: "698770282837",
    appId: "1:698770282837:web:232033261eb02e9dbb37dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
