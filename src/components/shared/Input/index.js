import "./input.css";

import React, { useState } from "react";
import cls from "classname";
import IconSearch from "../IconSearch";

const Input = ({
  label,
  type = "text",
  icon = <IconSearch />,
  className,
  ...restProps
}) => {
  const [localType, setLocalType] = useState(type);

  const handleTogglePassword = () => {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  };
  const classesIconPassword = cls("toggle-password", {
    "ion-eye": localType === "password",
    "ion-eye-disabled": localType === "text",
  });
  const classesSearch = cls("input-search__input", className);

  if (type === "search") {
    return (
      <div className="input-search">
        {icon}
        <input className={classesSearch} type={localType} {...restProps} />
      </div>
    );
  }

  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      {type === "password" && (
        <i className={classesIconPassword} onClick={handleTogglePassword}></i>
      )}
      <input type={localType} className={className} {...restProps} />
    </div>
  );
};

export default Input;
