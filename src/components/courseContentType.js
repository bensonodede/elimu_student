import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import "../styles/Course.css";
import { onceGetCourse, onceGetSlides } from "../firebase/db";

class courseContentType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      courseUid: "",
      clicked: false,
      week: "",
      audioSource: "",
      videoSource: "",
      textSource: ""
    };
  }

  componentWillMount() {
    //this.setState({ week });
    onceGetCourse().then(doc => {
      let course = doc.data();
      console.log(doc.data());

      let week = this.props.location.state.week;
      let courseUid = doc.id;

      let imgs = course[week][2];
      console.log(imgs.id);
      onceGetSlides(imgs.id).then(doc => {
        console.log(doc.data());
      });
      this.setState({ course, courseUid, week });
      this.setState({
        audioSource: course[week][0],
        videoSource: course[week][1],
        textSource: imgs.id
      });
    });
  }

  componentDidMount() {}

  render() {
    let { courseUid, week, audioSource, videoSource, textSource } = this.state;

    return (
      <div>
        <h3>{week}</h3>
        <h2>TEST 101</h2>
        <div className="grid-container">
          <button>
            <NavLink
              to={{
                pathname: routes.UPLOAD_AUDIO,
                state: {
                  courseUid: courseUid,
                  source: audioSource,
                  format: "audio",
                  week: week
                }
              }}
            >
              Audio
            </NavLink>
          </button>
          <button onClick={this._handleText}>
            <NavLink
              to={{
                pathname: routes.UPLOAD_TEXT,
                state: {
                  courseUid: courseUid,
                  source: textSource,
                  format: "text",
                  week: week
                }
              }}
            >
              Text
            </NavLink>
          </button>
          <button>
            <NavLink
              to={{
                pathname: routes.UPLOAD_VIDEO,
                state: {
                  courseUid: courseUid,
                  source: videoSource,
                  format: "video",
                  week: week
                }
              }}
            >
              Video
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(courseContentType);
