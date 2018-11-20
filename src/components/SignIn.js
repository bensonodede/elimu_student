import React from "react";
import SignInForm from "./SignInForm";
import { withRouter } from "react-router";

const SignInPage = () => (
  <div>
    <h2 className="App-container">Student Login</h2>
    <SignInForm />
  </div>
);

export default withRouter(SignInPage);
