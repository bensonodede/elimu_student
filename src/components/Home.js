import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//import convertapiPackage from "convertapi";
//import request from "superagent";
import { firebase } from "../firebase";
import { onceGetInstructor, onceGetStudent } from "../firebase/db";
import "../styles/Home.css";
import "../styles/App.css";

import * as routes from "../constants/routes";
import { forEach } from "@firebase/util";

//const CLOUDINARY_UPLOAD_PRESET = "kmw1p7ca";
// const CLOUDINARY_UPLOAD_URL =
//   "https://api.cloudinary.com/v1_1/dsn5fhldk/upload/";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      files: [],
      images: [],
      imageArr: []
    };
  }
  componentWillMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log(authUser);
        onceGetStudent(authUser.uid)
          .then(doc => {
            if (doc) {
              console.log(doc.data());
            } else {
              onceGetInstructor(authUser.uid)
                .then(doc => {
                  console.log(doc.data());
                })
                .catch(error => {
                  console.log("Error getting instructor");
                });
            }
          })
          .catch(error => {
            console.log("Error getting students");
          });
      }
    });
  }

  // _handleConversion = () => {
  //   let url = "https://v2.convertapi.com/pdf/to/";
  //   let file =
  //     "https://res.cloudinary.com/dsn5fhldk/image/upload/v1542617019/ELIMU/TEXT/LessonFour.pdf";
  //   let secret = "FjIEGn31cgherlyK";

  //   const jsonPromise = fetch(
  //     url + "png?storefile=true&secret=" + secret + "&file=" + file
  //   ).then(res => res.json());
  //   jsonPromise.then(data => {
  //     let imageArr = [];
  //     let imgResponse = data.Files;
  //     console.log(imgResponse);

  //     imgResponse.forEach((img, index) => {
  //       this.handleImageUpload(img.Url);
  //       //imageArr.push(img.Url);
  //     });
  //     console.log(imageArr);
  //     // this._setImages(imageArr);
  //   });
  // };

  // // This function does the uploading to cloudinary
  // handleImageUpload(file) {
  //   request
  //     .post(CLOUDINARY_UPLOAD_URL)
  //     .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
  //     .field("file", file)
  //     .end((err, response) => {
  //       console.log(response);
  //     });
  // }

  renderRedirect = () => {
    //if (!this.state.user) {
    return <Redirect to={{ pathname: routes.SIGN_IN }} />;
    //}
  };

  render() {
    return (
      <div className="App-container">
        <h1 className="Home-header">Welcome </h1>
        {/* <button onClick={this._handleConversion(this.state.images)}>
          Upload
        </button> */}
      </div>
    );
  }
}
