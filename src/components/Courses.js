import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";
import { firebase } from "../firebase";
import { onceGetInstructor } from "../firebase/db";
export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }
  componentDidMount() {}
  render() {
    const { courses } = this.state;
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
                  state: { id: "ECO 1020" }
                }}
              >
                <h4>
                  <td>ECO 1020</td>
                </h4>
              </NavLink>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
