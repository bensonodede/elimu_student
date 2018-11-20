import React, { Component } from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import { firebase } from "../firebase";

class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      signIn: false
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        return null;
      } else {
        this.setState({ signIn: true });
      }
    });
  }
  render() {
    if (this.state.signIn) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <table className="mui-table">
          <thead>
            <tr>
              <th>Course code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <NavLink
                to={{
                  pathname: routes.COURSE_CONTENT,
                  state: { id: "TEST 101" }
                }}
              >
                <h4>
                  <td>TEST 101</td>
                </h4>
              </NavLink>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Courses);
