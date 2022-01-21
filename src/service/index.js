// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBt4tHMCq7d0yfhg_oYpXEvHcBoR7kS6RA",

    authDomain: "ecommerce-28185.firebaseapp.com",

    projectId: "ecommerce-28185",

    storageBucket: "ecommerce-28185.appspot.com",

    messagingSenderId: "503979312960",

    appId: "1:503979312960:web:ff082608c48d285894dca5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

export default db