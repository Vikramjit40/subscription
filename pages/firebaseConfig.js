import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB2bEWSiQ_T34o0bezBn_cd840mN0Om1YQ",
  authDomain: "subly-subscriptions.firebaseapp.com",
  projectId: "subly-subscriptions",
  storageBucket: "subly-subscriptions.appspot.com",
  messagingSenderId: "181213767240",
  appId: "1:181213767240:web:bdc3668ba798ca3fe7da7d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);