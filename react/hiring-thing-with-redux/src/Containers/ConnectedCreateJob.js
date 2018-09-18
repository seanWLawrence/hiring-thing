/**
 * Package imports
 */
import { connect } from "react-redux";

/**
 * Script imports
 */
import NewJobForm from "../Components/Forms/CreateJobForm";
import { boundCreateJob } from "../redux";

/**
 * Passes the create user action to the form
 */
const mapDispatchToProps = state => {
  return {
    createJob: (title, description) => boundCreateJob(title, description)
  };
};

export default connect(mapDispatchToProps)(NewJobForm);
