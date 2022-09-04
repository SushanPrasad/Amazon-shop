// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyC2652j2Pmo0OxmoXCX2H5ZugIfAV2U9rc",
  authDomain: "suji-c47cd.firebaseapp.com",
  projectId: "suji-c47cd",
  storageBucket: "suji-c47cd.appspot.com",
  messagingSenderId: "335211856548",
  appId: "1:335211856548:web:641730f3488bec8e419c31",
  measurementId: "G-Z8W1CGSSQ9"
};



const firebaseApp = firebase.initializeApp (firebaseConfig);
console.log('firebase;;;;',firebaseApp)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;