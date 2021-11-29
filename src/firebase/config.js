import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJxCQwaD_3jfzLdVbEthJDS_W6XIk_AkE",
  authDomain: "ninja-game-vue.firebaseapp.com",
  projectId: "ninja-game-vue",
  storageBucket: "ninja-game-vue.appspot.com",
  messagingSenderId: "100392694255",
  appId: "1:100392694255:web:a13c8e31f7c4e6995dc61a",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

//init firebase auth
const projectAuth = firebase.auth();

export default { projectFirestore, timestamp, projectAuth };
