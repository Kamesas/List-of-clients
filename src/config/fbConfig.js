import firebase from "firebase";
import { FirebaseConfig } from "./FirebaseConfig";

firebase.initializeApp(FirebaseConfig);

firebase.auth().languageCode = "ru";

const databaseRef = firebase.database().ref();
export const firebaseClients = databaseRef.child("clients");

export const storage = firebase.storage(); //allow read, write: if request.auth != null;

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
