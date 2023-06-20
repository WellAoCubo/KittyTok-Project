import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCxqSYw_XiB6zgtyNdPsyvpl4P8rAJg-6Q",
  authDomain: "kittytok-fa221.firebaseapp.com",
  projectId: "kittytok-fa221",
  storageBucket: "kittytok-fa221.appspot.com",
  messagingSenderId: "826140440758",
  appId: "1:826140440758:web:b9ce81ff492df566d78e17"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;