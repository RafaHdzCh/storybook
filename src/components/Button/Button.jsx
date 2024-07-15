import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Button({ primary, backgroundColor, label, size, onClick, onMouseOver, disabled }) 
{
  const baseStyles = "py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline";
  const primaryStyles = disabled ? "" : primary ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700";
  const disabledStyles = "bg-gray-300 cursor-not-allowed";
  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const buttonClass = classNames(baseStyles, sizeStyles[size], primaryStyles, { [disabledStyles]: disabled });

  return (
    <button
      className={buttonClass}
      style={{ backgroundColor: backgroundColor }}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  disabled: false,
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};