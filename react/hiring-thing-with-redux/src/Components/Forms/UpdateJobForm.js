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
 * Updates an existing job
 */
export default class UpdateJobForm extends Component {
  /**
   * Initialize state
   */
  state = {
    title: "",
    description: "",
    redirect: false
  };

  static propTypes = {
    // job id
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    // dispatch functions
    setJobActive: PropTypes.func.isRequired,
    setJobInactive: PropTypes.func.isRequired,
    updateJob: PropTypes.func.isRequired
  };

  /**
   * Both handlers for setting state with input and then passing the value to the input as a controlled component
   */
  handleTitle = event => {
    this.setState({ title: event.currentTarget.value });
  };

  handleDescription = event => {
    this.setState({ description: event.currentTarget.value });
  };

  render() {
    const { setJobActive, setJobInactive, updateJob } = this.props;
    const { title, description, redirect } = this.state;
    const id = parseInt(this.props.id, 10);

    if (!redirect) {
      return (
        <section>
          <h2>Update job #{id}</h2>
          <form
            onSubmit={event => {
              event.preventDefault();

              {
                /* Dispatch update job action */
              }
              updateJob(id, title, description);

              {
                /* Update state to redirect page to home, clear state */
              }
              this.setState({ redirect: true }, () => {
                this.setState({ title: "", description: "", redirect: false });
              });
            }}
          >
            <label htmlFor="title">Title</label>
            <Input
              name="title"
              type="text"
              onChange={this.handleTitle}
              value={title}
            />
            <label htmlFor="description">Description</label>
            <TextArea
              name="description"
              onChange={this.handleDescription}
              value={description}
            />
            <div className="buttons">
              <button className="active" onClick={() => setJobActive(id)}>
                Set active
              </button>
              <button className="inactive" onClick={() => setJobInactive(id)}>
                Set inactive
              </button>
            </div>
            <input type="submit" name="submit" />
            {redirect && <Redirect from={`/jobs/${id}`} to="/" />}
          </form>
        </section>
      );
    } else {
      {
        /* redirect when state has redirect: true */
      }
      return <Redirect to="/" noThrow />;
    }
  }
}
