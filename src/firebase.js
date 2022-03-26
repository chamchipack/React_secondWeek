// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBknvaNfLp27mVeV4UvcTWqrz8a10OQnek",
  authDomain: "sparta5-6aa8f.firebaseapp.com",
  projectId: "sparta5-6aa8f",
  storageBucket: "sparta5-6aa8f.appspot.com",
  messagingSenderId: "619527644461",
  appId: "1:619527644461:web:dff3a15dc5528e11a41fa4",
  measurementId: "G-8CN8LM6ZV2"
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

// 2
// const firebaseConfig = {
//   apiKey: "AIzaSyCPZcdiUCD8BUrXOCJinFMr_mPmgk5xFNY",
//   authDomain: "sparta-react2.firebaseapp.com",
//   projectId: "sparta-react2",
//   storageBucket: "sparta-react2.appspot.com",
//   messagingSenderId: "344941962721",
//   appId: "1:344941962721:web:7944ac6381de0ce1929ea0",
//   measurementId: "G-5D0MMZD6VL"
// };

//3
// const firebaseConfig = {
//   apiKey: "AIzaSyCo-gMs3cn70s5zhmVCRiE4bIBXq0G-Mlo",
//   authDomain: "sparta-react3.firebaseapp.com",
//   projectId: "sparta-react3",
//   storageBucket: "sparta-react3.appspot.com",
//   messagingSenderId: "404768523121",
//   appId: "1:404768523121:web:892a852d3827a1f742ecd0",
//   measurementId: "G-CY71QZDXCW"
// };

//4
// const firebaseConfig = {
//   apiKey: "AIzaSyBA2JUNhNLDNbUZyXPqYo6b215YnYrn-vA",
//   authDomain: "sparta-react4-2ab1a.firebaseapp.com",
//   projectId: "sparta-react4-2ab1a",
//   storageBucket: "sparta-react4-2ab1a.appspot.com",
//   messagingSenderId: "177362518734",
//   appId: "1:177362518734:web:3182ba230c66e3b6c1c69f",
//   measurementId: "G-J801BRCYDQ"
// };