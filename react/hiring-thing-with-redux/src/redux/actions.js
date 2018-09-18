import { dispatch } from "./index";

/**
 * Actions
 * ----------------------------------
 */
export const CREATE_JOB = "CREATE_JOB";
export const UPDATE_JOB = "UPDATE_JOB";
export const SET_JOB_INACTIVE = "SET_JOB_INACTIVE";
export const SET_JOB_ACTIVE = "SET_JOB_ACTIVE";
export const SET_FILTER = "SET_VISIBILITY_FILTER";

/**
 * Filters
 */
export const filters = {
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_INACTIVE: "SHOW_INACTIVE",
  SHOW_ALL: "SHOW_ALL"
};

/**
 * Action creators
 * -----------------------------------
 */

function createJob(title, description) {
  return {
    type: CREATE_JOB,
    title,
    description
  };
}

function updateJob(id, title, description) {
  return {
    type: UPDATE_JOB,
    id,
    title,
    description
  };
}

function setJobInactive(id) {
  return {
    type: SET_JOB_INACTIVE,
    id
  };
}

function setJobActive(id) {
  return {
    type: SET_JOB_ACTIVE,
    id
  };
}

function setFilter(filter) {
  return { type: SET_FILTER, filter };
}

/**
 * Bound the action creators and export them
 * --------------------------------
 */

export const boundCreateJob = (title, description) =>
  dispatch(createJob(title, description));

export const boundUpdateJob = (id, title, description) =>
  dispatch(updateJob(id, title, description));

export const boundSetJobInactive = id => dispatch(setJobInactive(id));

export const boundSetJobActive = id => dispatch(setJobActive(id));

export const boundSetFilter = filter => dispatch(setFilter(filter));
