/**
 * Package imports
 */
import { connect } from "react-redux";

/**
 * Script imports
 */
import Filter from "../Components/Misc/Filter";
import { boundSetFilter } from "../redux";

/**
 * Passes the filter value to the component as a a prop
 * to display a highlight for the active filter
 */
const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};
/**
 * Pass filter action as a prop
 */
const mapDispatchToProps = state => {
  return {
    setFilter: filter => boundSetFilter(filter)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
