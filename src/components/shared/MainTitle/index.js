import "./main-title.css";

import React from "react";
import cls from "classname";

import Button from "../Button";

const MainTitle = ({ children, btnProps = {}, btnLable, type = "" }) => {
  const classes = cls("main-title spacing", {
    "d-flex tcl-jc-between tcl-ais-center": btnLable,
    "main-title__search": type === "search",
  });

  return (
    <div className={classes}>
      <h2>{children}</h2>
      {btnLable && <Button {...btnProps}>{btnLable}</Button>}
    </div>
  );
};

export default MainTitle;
