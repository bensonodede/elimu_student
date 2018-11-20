import React from "react";
import { Form } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import { auth } from "../../firebase";
import { Redirect } from "react-router-dom";

export default class SyncValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      userPassword: "",
      error: ""
    };
  }

  renderRedirect = () => {
    //if (!this.state.user) {
    return <Redirect to={{ pathname: "/" }} />;
    //}
  };

  signInUser = event => {
    console.log(this.state);

    const { userEmail, userPassword } = this.state;

    auth
      .doSignInWithEmailAndPassword(userEmail.nextValue, userPassword.nextValue)
      .then(authUser => {
        console.log(authUser);
        this.renderRedirect();
      })
      .catch(error => {
        console.log(error);
        //this.setState(byPropKey('error', error));
      });

    /* Perform async request with the serialized data */
    return new Promise(resolve => resolve());
  };

  render() {
    const error = this.state;
    return (
      <Form action={this.signInUser}>
        <Input
          onChange={text =>
            this.setState({ userEmail: text }, () => {
              console.log(this.state);
            })
          }
          name="userEmail"
          spellCheck={false}
          type="email"
          label="E-mail"
          required
        />
        <Input
          onChange={text => this.setState({ userPassword: text })}
          name="userPassword"
          type="password"
          label="Password"
          required
        />

        <Button primary>Sign In</Button>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}
