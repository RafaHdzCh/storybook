import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { action } from '@storybook/addon-actions';

interface ButtonProps 
{
  type?: "primary" | "secondary" | "danger" | "success";
  label: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  onMouseOver?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  label = "Button",
  size = "medium",
  onClick = () => {},
  onMouseOver = () => {},
  disabled = false,
}) => {
  const baseStyles = "py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline";
  const disabledStyles = "bg-gray-300 cursor-not-allowed";
  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };
  const typeStyles = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-purple-500 hover:bg-purple-700",
    danger: "bg-red-500 hover:bg-red-700",
    success: "bg-green-500 hover:bg-green-700",
  };

  const buttonClass = classNames(
    baseStyles,
    sizeStyles[size],
    disabled ? disabledStyles : typeStyles[type]
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={() => {
        action('Button clicked')(type);
        onClick();
      }}
      onMouseOver={onMouseOver}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
};

export default Button;