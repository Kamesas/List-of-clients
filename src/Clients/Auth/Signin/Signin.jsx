import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/actions";

class Signin extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/app");
    }
  }

  render() {
    return (
      <div className="row social-signin-container">
        <div className="col s10 offset-s1 center-align">
          <img alt="Sign in" id="sign-in" src="/img/user.png" />
          <h4 id="sign-in-header">Sign In to start</h4>

          <div className="social-signin" onClick={this.props.signIn}>
            <i className="fa fa-google social-signin-icon" />
            Sign In With Google
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { signIn }
)(Signin);
