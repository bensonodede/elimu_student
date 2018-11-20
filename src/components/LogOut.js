import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { firebase } from "../firebase";
import { Button } from "react-advanced-form-addons";

class LogOutPage extends Component {
  constructor() {
    super();
    this.state = {
      signin: false
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        return null;
      } else {
        this.props.history.push("/signin");
      }
    });
  }
  render() {
    return (
      <div className="App-container">
        {/* <h3>Sign Out</h3> */}
        <Button
          primary
          onClick={() => {
            firebase.auth.signOut().then(
              function() {
                // Sign-out successful.
                //this.props.history.push("/signin");
              },
              function(error) {
                // An error happened.
              }
            );
          }}
        >
          Sign out
        </Button>
      </div>
    );
  }
}

export default withRouter(LogOutPage);
