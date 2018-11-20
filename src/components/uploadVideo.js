import React, { Component } from "react";
import { firebase } from "../firebase/";
import "../styles/Home.css";
import "../styles/App.css";
import { doCreateSession } from "../firebase/db";

export default class uploadVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentUid: "",
      courseUid: "",
      Interaction: 0,
      format: "video"
    };
  }
  componentDidMount() {
    let courseUid = this.props.location.state.courseUid;
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log(authUser.uid);
        this.setState({ studentUid: authUser.uid, courseUid });
      }
    });
    let player = window.videojs(this.refs.player, {}).ready(() => {
      let currentTime = 0;
      player.on("timeupdate", event => {
        let nowTime = player.currentTime();
        let totalDuration = player.cache_.duration;
        let videoInteraction = (nowTime / totalDuration) * 100;
        let video = Math.round(videoInteraction);
        this.setState({ Interaction: video });
      });

      player.on("seeking", function(event) {
        if (currentTime < player.currentTime()) {
          player.currentTime(currentTime);
        }
      });

      player.on("seeked", function(event) {
        if (currentTime < player.currentTime()) {
          player.currentTime(currentTime);
        }
      });

      setInterval(function() {
        if (!player.paused()) {
          currentTime = player.currentTime();
        }
      }, 1000);
    });
  }

  componentWillUnmount() {
    let player = window.videojs(this.refs.player, {}).ready(() => {});
    player.dispose();
    console.log(this.state);
    doCreateSession(this.state)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let source = this.props.location.state.source;
    return (
      <div className="App-container">
        <video
          id="vid1"
          src={source}
          type="video/mp4"
          preload="auto"
          className="video-js"
          controls
          ref="player"
        />
      </div>
    );
  }
}
