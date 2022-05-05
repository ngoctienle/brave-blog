import "./button.css";

import React from "react";
import cls from "classname";

import IconLoading from "../IconLoading";

const Button = ({
  children,
  className,
  loading,
  loadingPosition,
  type = "default",
  as = "button",
  htmlType,
  size,
  ...restProps
}) => {
  const classes = cls(
    "btn",
    {
      "btn-default": type === "default",
      "btn-category": type === "category",
      "btn-primary": type === "primary",
      "btn-size-large": size === "large",
    },
    className
  );

  const btnContent = (
    <>
      {loading && loadingPosition === "left" && <IconLoading />}
      {children}
      {loading && loadingPosition === "right" && <IconLoading />}
    </>
  );

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...restProps,
  };

  if (as === " a") {
    return (
      <a {...injectedProps} {...restProps}>
        {btnContent}
      </a>
    );
  }

  return (
    <button {...injectedProps} {...restProps}>
      {btnContent}
    </button>
  );
};

export default Button;
