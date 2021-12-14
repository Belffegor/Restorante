import Rebase from "re-base";
import firebase from "firebase";

// import { initializeApp} from 'firebase/app';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCODCgjiNpSrlBOS5O6LNnpX_94EAFgMKE",
//     authDomain: "burgers-176c6.firebaseapp.com",
//     databaseURL: "https://burgers-176c6-default-rtdb.europe-west1.firebasedatabase.app"
   
// });

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCODCgjiNpSrlBOS5O6LNnpX_94EAFgMKE",
    authDomain: "burgers-176c6.firebaseapp.com",
    databaseURL: "https://burgers-176c6-default-rtdb.europe-west1.firebasedatabase.app"
   
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;

