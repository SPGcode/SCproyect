import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAX79C1KtzsM3yx_DRXaPGsY_4U99TxBw8",
    authDomain: "social-media-cd253.firebaseapp.com",
    projectId: "social-media-cd253",
    storageBucket: "social-media-cd253.appspot.com",
    messagingSenderId: "727949786843",
    appId: "1:727949786843:web:1a1cbb5970b317b36ed6fe"
  };


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}