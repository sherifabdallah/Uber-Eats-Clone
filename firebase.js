import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_x0lGraTUmK5OSg8gbq6dDJ55x53AS7Y",
  authDomain: "rn-uber-eats-clone-e44ce.firebaseapp.com",
  projectId: "rn-uber-eats-clone-e44ce",
  storageBucket: "rn-uber-eats-clone-e44ce.appspot.com",
  messagingSenderId: "1044977166089",
  appId: "1:1044977166089:web:918376c7d9d9b742a455d8",
  measurementId: "G-B6JK9647TF"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;