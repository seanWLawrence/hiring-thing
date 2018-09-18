/**
 * Package imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Basic Input component for creating controlled forms
 */
export const Input = ({ name, type, value, onChange }) => (
  <input name={name} onChange={onChange} type={type} value={value} />
);

/**
 * Basic Text area component
 */
export const TextArea = ({ name, value, onChange }) => (
  <textarea name={name} onChange={onChange} value={value} />
);

/**
 * Standard html input attributes
 */
Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

/**
 * Standard html textarea attributes
 */
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
