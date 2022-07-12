import React from "react";

const Button = ({ className, onClick, children, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: null,
  type: "button",
};

export default Button;
