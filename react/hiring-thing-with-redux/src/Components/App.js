/**
 * Package imports
 */
import React, { Component } from "react";
import { Router } from "@reach/router";

/**
 * Component and style imports
 */
import ConnectedJobList from "../Containers/ConnectedJobList";
import ConnectedCreateJob from "../Containers/ConnectedCreateJob";
import ConnectedUpdateJob from "../Containers/ConnectedUpdateJob";
import Navigation from "./Misc/Header";
import "./App.css";

/**
 * Main app with router
 */
export default class App extends Component {
  render() {
    return (
      <main>
        <Navigation />
        <Router>
          <ConnectedJobList path="/" />
          <ConnectedCreateJob path="jobs/new" />
          <ConnectedUpdateJob path="jobs/:id" />
        </Router>
      </main>
    );
  }
}
