import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDW9nq-bTk9nD1ebNgOXbGt-uV3CdjAdB0",
    authDomain: "disneyplus-clone-3b1d4.firebaseapp.com",
    projectId: "disneyplus-clone-3b1d4",
    storageBucket: "disneyplus-clone-3b1d4.appspot.com",
    messagingSenderId: "392701907432",
    appId: "1:392701907432:web:e3cad8dfe3d064dcda145d",
    measurementId: "G-JYQYTLD353"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export {auth, provider};

export default db;
