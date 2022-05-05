import "./button.css";

import React from "react";
import IconLoading from "../IconLoading";

const Button = () => {
  return (
    <div className="text-center">
      <button className="btn btn-primary btn-size-large">
        <IconLoading />
        Load more
      </button>
    </div>
  );
};

export default Button;
