/**
 * Package imports
 */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

/**
 * Displays Job and link to update it
 */
const Job = ({ id, title, description, isActive }) => (
  <div className="job">
    <h2 className="job-title">
      {title}
      <span className={isActive ? "active" : "inactive"}>
        {isActive ? "Active" : "Inactive"}
      </span>
    </h2>
    <p>{description}</p>
    <Link to={`/jobs/${id}`}>Update</Link>
  </div>
);

Job.propTypes = {
  // job id
  id: PropTypes.number.isRequired,
  // job title
  title: PropTypes.string.isRequired,
  // is job active/inactive
  isActive: PropTypes.bool.isRequired
};

export default Job;
