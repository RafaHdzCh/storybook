import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ primary, backgroundColor, label, size, onClick, onMouseOver }) => 
{
  const baseStyles = "py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline";

  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const primaryStyles = primary ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700";

  const buttonClass = classNames(baseStyles, sizeStyles[size], primaryStyles);

  return (
    <button
      className={buttonClass}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};

export default Button;