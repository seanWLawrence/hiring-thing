/**
 * Package imports
 */
import { combineReducers } from "redux";

/**
 * Script imports
 */
import {
  CREATE_JOB,
  UPDATE_JOB,
  SET_JOB_INACTIVE,
  SET_JOB_ACTIVE,
  SET_FILTER,
  filters
} from "./actions";

/**
 * Constructor for generating new job ids
 */
function createID() {
  return Math.floor(Math.random() * 1000);
}

/**
 * Reducers
 * ---------------------------
 */

/**
 * Reducers for job CRUD actions
 * @param {Array<User>} state
 * @param {{type: string, id?: number, title?: string, description?: string}} action
 */
function jobs(state = [], action) {
  switch (action.type) {
    case CREATE_JOB:
      /**
       * Creates appends a new job object to the jobs state
       * and adds a new, randomly generated id number and isActive: true property
       */
      return [
        ...state,
        {
          id: createID(),
          title: action.title,
          description: action.description,
          isActive: true
        }
      ];
    case UPDATE_JOB:
      /**
       * Loops over jobs and find the one with the action's ID
       * Then creates a new object to replace it, with the new title
       * and description values
       * If no values were passed in for either property, it will keep the same default value
       * If no job was found with the action ID, returns previous state
       */
      return state.map(job => {
        if (job.id === action.id) {
          return {
            ...job,
            title: action.title || job.title,
            description: action.description || job.description
          };
        }
        return job;
      });
    case SET_JOB_INACTIVE:
      /**
       * Loops over the jobs array and finds the one with the action's ID
       * Then creates a new object with the same values as the previous one, but with the
       * isActive property set to false
       * If no job with the action ID is found, returns previous state
       */
      return state.map(job => {
        if (job.id === action.id) {
          return {
            ...job,
            isActive: false
          };
        }
        return job;
      });
    case SET_JOB_ACTIVE:
      /**
       * Loops over the jobs array and finds the one with the action's ID
       * Then creates a new object with the same values as the previous one, but with the
       * isActive property set to true
       * If no job with the action ID is found, returns previous state
       */
      return state.map(job => {
        if (job.id === action.id) {
          return {
            ...job,
            isActive: true
          };
        }
        return job;
      });
    default:
      return state;
  }
}

/**
 * Gets visibility filter values
 */
const { SHOW_ALL } = filters;

/**
 * Reducers for the visibility filter
 * @param {('SHOW_ALL' | 'SHOW_ACTIVE' | SHOW_INACTIVE')} state
 * @param {{type: 'SET_FILTER', filter: string}} action
 */
function filter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      /**
       * Returns a new state object with the visibilityFilter property set to the
       * filter specified in the action
       */
      return action.filter;
    default:
      return state;
  }
}

/**
 * Combines all reducers with Redux's built in helper function
 */
const jobCrud = combineReducers({
  filter,
  jobs
});

/**
 * Exports all reducers related to jobs
 * @exports jobCrud
 */
export default jobCrud;
