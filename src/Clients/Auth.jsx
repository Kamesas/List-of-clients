import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import App from "./App";
import stl from "./auth.module.sass";

class Auth extends Component {
  state = { isSignedIn: false };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      //console.log("user", user);
    });
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div className={stl["parent-auth"]}>
            <span className={stl["auth"]}>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out!
              </button>
              <div>Signed In!</div>
              <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
              <img
                alt="profile avatar"
                src={firebase.auth().currentUser.photoURL}
              />
            </span>

            {firebase.auth().currentUser ? <App /> : null}
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Auth;
