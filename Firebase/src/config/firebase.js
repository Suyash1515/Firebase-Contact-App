// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRtxniWUvho69xm2IptOanKBTFzIoINZw",
  authDomain: "vite-contact-f014c.firebaseapp.com",
  projectId: "vite-contact-f014c",
  storageBucket: "vite-contact-f014c.appspot.com",
  messagingSenderId: "864856478699",
  appId: "1:864856478699:web:d3854fc3465ee2e0173fae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);