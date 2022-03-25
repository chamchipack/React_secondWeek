// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZcdiUCD8BUrXOCJinFMr_mPmgk5xFNY",
  authDomain: "sparta-react2.firebaseapp.com",
  projectId: "sparta-react2",
  storageBucket: "sparta-react2.appspot.com",
  messagingSenderId: "344941962721",
  appId: "1:344941962721:web:7944ac6381de0ce1929ea0",
  measurementId: "G-5D0MMZD6VL"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore();




// sparta-react
// const firebaseConfig = {
//   apiKey: "AIzaSyAfN7S084deZRlDgV5caJymHp52js5TtLc",
//   authDomain: "sparta-react-4e8e5.firebaseapp.com",
//   projectId: "sparta-react-4e8e5",
//   storageBucket: "sparta-react-4e8e5.appspot.com",
//   messagingSenderId: "923369430698",
//   appId: "1:923369430698:web:b220b4fa15be8cf45f3ad3",
//   measurementId: "G-504E55XBVY"
// };