/**
 * Package imports
 */
import { createStore, applyMiddleware } from "redux";

/**
 * Import the actions and export them for easy access from this index file
 */
import {
  boundCreateJob,
  boundUpdateJob,
  boundSetJobInactive,
  boundSetJobActive,
  boundSetFilter
} from "./actions";

/**
 * Import the reducers
 */
import jobCrud from "./reducers";

/**
 * Basic logging middleware to console.log() each action
 */
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

/**
 * Create our Redux store and export it
 */
export const store = createStore(
  jobCrud,
  {
    jobs: [
      {
        id: 1,
        title: "Frontend developer",
        description: "A cool job!",
        isActive: true
      }
    ],
    filter: "SHOW_ALL"
  },
  applyMiddleware(logger)
);

/**
 * Gets dispatch function from store and exports it
 */
export const { dispatch } = store;

/**
 * Exports bound actions
 */
export {
  boundCreateJob,
  boundUpdateJob,
  boundSetJobInactive,
  boundSetJobActive,
  boundSetFilter
};
