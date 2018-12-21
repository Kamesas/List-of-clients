import * as firebase from "firebase";

const FirebaseConfig = {
 
};

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const firebaseClients = databaseRef.child("clients");
