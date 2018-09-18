/**
 * Package imports
 */
import { connect } from "react-redux";

/**
 * Script imports
 */
import UpdateJobForm from "../Components/Forms/UpdateJobForm";
import {
  boundUpdateJob,
  boundSetJobActive,
  boundSetJobInactive
} from "../redux";

/**
 * Passes the update job, setJob active/inactive actions as props
 */
const mapDispatchToProps = state => {
  return {
    updateJob: (title, description) => boundUpdateJob(title, description),
    setJobActive: id => boundSetJobActive(id),
    setJobInactive: id => boundSetJobInactive(id)
  };
};

export default connect(mapDispatchToProps)(UpdateJobForm);
