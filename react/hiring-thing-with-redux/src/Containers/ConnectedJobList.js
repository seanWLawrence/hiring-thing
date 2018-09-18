/**
 * Package imports
 */
import { connect } from "react-redux";

/**
 * Component imports
 */
import JobList from "../Components/Misc/JobList";

/**
 * Returns the jobs based on the visibility filter value
 * @param {Array<Jobs>} jobs
 * @param {('SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_INACTIVE')} filter
 */
const getActiveJobs = state => {
  switch (state.filter) {
    case "SHOW_ACTIVE":
      return state.jobs.filter(job => job.isActive);
    case "SHOW_INACTIVE":
      return state.jobs.filter(job => !job.isActive);
    case "SHOW_ALL":
    default:
      return state.jobs;
  }
};
/**
 * Converts the state object into a prop
 * that allows the component to get the jobs based on the filter
 */
const mapStateToProps = state => {
  return {
    jobs: getActiveJobs(state)
  };
};

export default connect(mapStateToProps)(JobList);
