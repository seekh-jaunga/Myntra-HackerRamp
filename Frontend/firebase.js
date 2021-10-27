import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBM-KDLH_fo43Xz8bs2824Ni6iVtZAZAD4",
    authDomain: "sellshop-deeb5.firebaseapp.com",
    databaseURL: "https://sellshop-deeb5-default-rtdb.firebaseio.com",
    projectId: "sellshop-deeb5",
    storageBucket: "sellshop-deeb5.appspot.com",
    messagingSenderId: "1050093663040",
    appId: "1:1050093663040:web:7eada5ed09a690ebfc00a5",
    measurementId: "G-1L6BTPGVRN"
  };

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else
{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export {db,auth};