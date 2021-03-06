import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/Global.css";
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
let db = firebase.firestore();

createApp(App).use(router).mount("#app");
