import React from "react";
import firebase from "firebase/app";

const LogOutPage = () => (
  <div>
    <h1>Sign Out Page</h1>
    <button
      onClick={() => {
        firebase
          .auth()
          .signOut()
          .then(
            function() {
              // Sign-out successful.
              console.log("SIGNED OUT");
            },
            function(error) {
              // An error happened.
            }
          );
      }}
    >
      Sign out
    </button>
  </div>
);

export default LogOutPage;
