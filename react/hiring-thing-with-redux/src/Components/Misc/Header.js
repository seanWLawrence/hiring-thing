/**
 * Package imports
 */
import React from "react";
import { Link } from "@reach/router";

/**
 * Basic site title with link to home page
 */
export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <h1 className="site-title">
          <Link to="/">Hiring Thing</Link>
        </h1>
      </div>
    );
  }
}
