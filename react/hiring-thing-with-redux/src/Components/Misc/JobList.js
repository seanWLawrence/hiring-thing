/**
 * Package imports
 */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

/**
 * Component imports
 */
import Job from "./Job";
import Filter from "../../Containers/ConnectedFilter";

/**
 * Creates a list of Jobs based on the Redux state
 * @param {Array<Job>} jobs
 * @param {('SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_INACTIVE')} filter
 */
const JobList = ({ jobs, filter }) => {
  if (filter) {
    // Apply filter if it exists
    jobs = filter(jobs);
  }
  return (
    <div>
      <Filter />
      <ul>
        {/* If jobs exist, display all jobs, else display error message */}
        {jobs.length > 0 ? (
          jobs.map(job => {
            /**
             * Gets values from job
             */
            const { id, title, description, isActive } = job;
            if (filter) {
              filter(job);
            }

            return (
              <Job
                id={id}
                title={title}
                isActive={isActive}
                description={description}
                key={id}
              />
            );
          })
        ) : (
          <p>No jobs found matching the selected filter.</p>
        )}
      </ul>
      {/* Link to create new job */}
      <Link className="create-job" to="jobs/new">
        Create job
      </Link>
    </div>
  );
};

JobList.propTypes = {
  // array of jobs
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  // filter to display active/inactive/all jobs
  filter: PropTypes.func
};

export default JobList;
