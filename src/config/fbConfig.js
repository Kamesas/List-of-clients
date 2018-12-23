import firebase from "firebase";

const FirebaseConfig = {
  apiKey: "AIzaSyCDF7P12-_oQkeAk71Sm_ro9nddyohU8QQ",
  authDomain: "listofclients-a081f.firebaseapp.com",
  databaseURL: "https://listofclients-a081f.firebaseio.com",
  projectId: "listofclients-a081f",
  storageBucket: "listofclients-a081f.appspot.com",
  messagingSenderId: "1053310062783"
};

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const firebaseClients = databaseRef.child("clients");
export const storage = firebase.storage(); //allow read, write: if request.auth != null;
