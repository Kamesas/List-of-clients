import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCDF7P12-_oQkeAk71Sm_ro9nddyohU8QQ",
  authDomain: "listofclients-a081f.firebaseapp.com",
  databaseURL: "https://listofclients-a081f.firebaseio.com",
  projectId: "listofclients-a081f",
  storageBucket: "listofclients-a081f.appspot.com",
  messagingSenderId: "1053310062783"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
