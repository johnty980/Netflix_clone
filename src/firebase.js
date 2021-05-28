// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAdGf6aFIEoxWjtBnC4BcoiL_konXqenf8",
    authDomain: "netflix-clone-83b5b.firebaseapp.com",
    projectId: "netflix-clone-83b5b",
    storageBucket: "netflix-clone-83b5b.appspot.com",
    messagingSenderId: "20362839563",
    appId: "1:20362839563:web:f89e429a2a20611137e90e",
    measurementId: "G-6QG7K820ML"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;