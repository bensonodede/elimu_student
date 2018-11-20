import React, { Component } from "react";
import { firebase } from "../firebase/";
import "../styles/Home.css";
import "../styles/App.css";
import { doCreateSession } from "../firebase/db";

export default class uploadAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentUid: "",
      week: "",
      courseUid: "",
      Interaction: 0,
      format: "audio"
    };
  }
  componentDidMount() {
    let { week, courseUid } = this.props.location.state;
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.setState({ studentUid: authUser.uid, courseUid, week });
      } else {
        console.log("NONE");
      }
    });
    let player = window.videojs(this.refs.player, {}).ready(() => {
      let currentTime = 0;
      player.on("timeupdate", event => {
        let nowTime = player.currentTime();
        let totalDuration = player.cache_.duration;
        let audioInteraction = (nowTime / totalDuration) * 100;
        console.log(Math.round(audioInteraction));
        let audio = Math.round(audioInteraction);
        this.setState({ Interaction: audio });
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
          poster="https://image.freepik.com/free-icon/music-note-sound_318-10790.jpg"
          id="vid1"
          src={source}
          preload="auto"
          className="video-js"
          controls
          ref="player"
        />
      </div>
    );
  }
}
