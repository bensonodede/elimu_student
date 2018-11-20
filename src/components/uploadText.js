import React, { Component } from "react";
import SlideShow from "react-slideshow-ui";
import { firebase } from "../firebase";
import { doCreateSession, onceGetSlides } from "../firebase/db";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      courseUid: "",
      week: "",
      viewed: [0],
      images: null,
      format: "text"
    };
  }

  componentDidMount() {
    let { week, courseUid } = this.props.location.state;
    firebase.auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      this.setState({
        studentId: authUser.uid,
        week: week,
        courseUid: courseUid
      });
    });
    console.log(this.props.location.state);

    let id = this.props.location.state.source;
    onceGetSlides(id).then(doc => {
      console.log(doc.data());
      this.setState({ images: doc.data()[week] });
    });
  }

  componentWillUnmount() {
    console.log(this.state);
    let { studentId, courseUid, week, format, viewed } = this.state;
    let slidesViewed = [...new Set(this.state.viewed)];
    console.log(viewed);
    let session = { studentId, courseUid, week, format, slidesViewed };
    console.log(session);
    doCreateSession(session)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let { images } = this.state;
    console.log(images);

    if (images) {
      return (
        <div className="App-container">
          <SlideShow
            className="slider"
            style={{ width: 700 }}
            images={images}
            withTimestamp={true}
            pageWillUpdate={(index, image) => {
              const { viewed } = this.state;
              viewed.push(index);
              this.setState({ viewed }, () => {
                console.log(this.state);
              });
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
