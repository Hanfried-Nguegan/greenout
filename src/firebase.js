import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPkOS-NxILzp2vlDiqlp3tIP5uDJI802g",
  authDomain: "greenout-641e7.firebaseapp.com",
  projectId: "greenout-641e7",
  storageBucket: "greenout-641e7.appspot.com",
  messagingSenderId: "806930526732",
  appId: "1:806930526732:web:9d0ff915eb4d58ea65f429",
  measurementId: "G-5BZ0RV0D1K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
