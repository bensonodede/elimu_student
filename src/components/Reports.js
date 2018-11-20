import React, { Component } from "react";

export default class ReportsPage extends Component {
  render() {
    return (
      <div>
        <table className="mui-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Content Type</th>
              <th>% Interaction</th>
              <th>Time Spent</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>653586</td>
              <td>Bruce Wayne</td>
              <td>Audio</td>
              <td>20%</td>
              <td>20mins</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eu.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
