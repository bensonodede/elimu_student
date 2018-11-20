import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./Home";
import Courses from "./Courses";
import ReportsPage from "./Reports";
import createUsers from "./createUsers";
import MyProfilePage from "./MyProfile";
import LogOutPage from "./LogOut";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import courseContent from "./courseContent";
import courseContentType from "./courseContentType";
import uploadAudio from "./uploadAudio";
import uploadText from "./uploadText";
import uploadVideo from "./uploadVideo";

import * as routes from "../constants/routes";


export default class App extends Component {  
  render() {
    return (
      <Router>
        <div>
       
          <Navigation />
          <hr />

          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.COURSES} component={Courses} />
          <Route exact path={routes.COURSE_CONTENT} component={courseContent} />
          <Route
            exact
            path={routes.COURSE_CONTENT_TYPE}
            component={courseContentType}
          />
          <Route exact path={routes.UPLOAD_AUDIO} component={uploadAudio} />
          <Route exact path={routes.UPLOAD_TEXT} component={uploadText} />
          <Route exact path={routes.UPLOAD_VIDEO} component={uploadVideo} />
          <Route exact path={routes.REPORTS} component={ReportsPage} />
          <Route exact path={routes.CREATE_USERS} component={createUsers} />
          <Route exact path={routes.MY_PROFILE} component={MyProfilePage} />
          <Route exact path={routes.LOGOUT} component={LogOutPage} />
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
        </div>
      </Router>
    );
  }
}
