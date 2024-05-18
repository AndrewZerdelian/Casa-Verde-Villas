// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCswbg3gefDOv249rNYPdTayiwPfE7s3Ck",
  authDomain: "content-for-casa-verde.firebaseapp.com",
  projectId: "content-for-casa-verde",
  storageBucket: "content-for-casa-verde.appspot.com",
  messagingSenderId: "912206622831",
  appId: "1:912206622831:web:b17f646d9a15cce8ab9d9a",
  measurementId: "G-F0NTYS53T3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const Storage = getStorage(app);
//const analytics = getAnalytics(app);
