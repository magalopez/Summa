// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaiWmsln0ZBNVUWsMmduVDkCtCRskPS_s",
  authDomain: "summa-a.firebaseapp.com",
  databaseURL: "https://summa-a.firebaseio.com",
  projectId: "summa-a",
  storageBucket: "summa-a.appspot.com",
  messagingSenderId: "80196942459",
  appId: "1:80196942459:web:09d0f592d7b485cff7c0de"
};

// Initialize Firebase
export const firebaseInit = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const authentication = firebase.auth();

export const PRODUCTSDATA = firestore.collection("products");

export const ORDERSDATA = firestore.collection("pedidos");

