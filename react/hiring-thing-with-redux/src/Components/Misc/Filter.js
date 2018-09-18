/**
 * Package imports
 */
import React from "react";

/**
 * Basic filter component for displaying active/inactive/all jobs
 */
export default class Filter extends React.Component {
  render() {
    const { setFilter, filter } = this.props;
    return (
      <div>
        <nav>
          <button
            className={`filter ${filter === "SHOW_ALL" ? "active" : ""}`}
            onClick={() => setFilter("SHOW_ALL")}
          >
            All jobs
          </button>
          <button
            className={`filter ${filter === "SHOW_ACTIVE" ? "active" : ""}`}
            onClick={() => setFilter("SHOW_ACTIVE")}
          >
            Active jobs
          </button>
          <button
            className={`filter ${filter === "SHOW_INACTIVE" ? "active" : ""}`}
            onClick={() => setFilter("SHOW_INACTIVE")}
          >
            Inactive jobs
          </button>
        </nav>
      </div>
    );
  }
}
