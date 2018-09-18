/**
 * Package imports
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "@reach/router";

/**
 * Component imports
 */
import { Input, TextArea } from "./Inputs";

/**
 * Creates jobs
 * @param {Array<Job>} Jobs
 */
export default class NewJobForm extends Component {
  /**
   * Initialize state
   */
  state = {
    title: "",
    description: "",
    redirect: false
  };

  /**
   * Bound action creator dispactch function
   */
  static propTypes = {
    createJob: PropTypes.func.isRequired
  };

  /**
   * Both handlers update the state and then set the the value as a controlled component
   */
  handleTitle = event => {
    this.setState({ title: event.currentTarget.value });
  };

  handleDescription = event => {
    this.setState({ description: event.currentTarget.value });
  };

  render() {
    const { createJob } = this.props;
    const { title, description, redirect } = this.state;

    return (
      <section>
        <h2>Create job</h2>
        <form
          onSubmit={event => {
            event.preventDefault();

            {
              /* If empty, do nothing on form submit */
            }
            if (!this.state.title.trim() || !this.state.description.trim()) {
              return;
            }

            {
              /* Dispatch create job action */
            }
            createJob(this.state.title, this.state.description);

            {
              /* Set state to redirect the page and clear the state before leaving */
            }
            this.setState({ redirect: true }, () => {
              this.setState({ title: "", description: "", redirect: false });
            });
          }}
        >
          <label htmlFor="title">Title</label>
          <Input
            name="title"
            onChange={this.handleTitle}
            type="text"
            value={title}
          />
          <label htmlFor="description">Description</label>
          <TextArea
            name="description"
            onChange={this.handleDescription}
            value={description}
          />
          <input type="submit" name="submit" />
          {/* When state has redirect: true, redirect page to home */}
          {redirect && <Redirect from="/jobs/new" to="/" noThrow />}
        </form>
      </section>
    );
  }
}
