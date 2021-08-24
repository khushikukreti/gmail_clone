import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyALWntwN7nHAYSjty3A2AkB1_yEqK1G1_0",
  authDomain: "clone-45af5.firebaseapp.com",
  projectId: "clone-45af5",
  storageBucket: "clone-45af5.appspot.com",
  messagingSenderId: "46997159925",
  appId: "1:46997159925:web:0bbf0cd4e45aea3ba16abc"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };