import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import * as routes from "../constants/routes";
import "../styles/App.css";

class Navigation extends Component {
  render() {
    return (
      <div className="Header-Container">
        <h2 className="Menu-Logo">ELIMU</h2>
        <div className=" Menu-Container">
          <ul className=" Menu-List">
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.HOME}
              >
                Home
              </NavLink>
            </p>
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.COURSES}
              >
                Courses
              </NavLink>
            </p>
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.LOGOUT}
              >
                Logout
              </NavLink>
            </p>
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.SIGN_IN}
              >
                Sign In
              </NavLink>
            </p>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
