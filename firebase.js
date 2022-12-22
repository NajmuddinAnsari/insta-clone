// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp,getApp,getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcobUbt_Ai3ie_2Xict4ObCwjXGsdv_Yw",
    authDomain: "next-firebase-d5f6d.firebaseapp.com",
    databaseURL: "https://next-firebase-d5f6d-default-rtdb.firebaseio.com",
    projectId: "next-firebase-d5f6d",
    storageBucket: "next-firebase-d5f6d.appspot.com",
    messagingSenderId: "339216132571",
    appId: "1:339216132571:web:c2943190b43b206d095ffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const app =getApps().lngth?getApp(): initializeApp(firebaseConfig);
export const db = getFirestore(app);
