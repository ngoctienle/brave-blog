import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="tcl-col-2">
      {/* Logo */}
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/images/logo-black.png" alt="Go to homepage" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogo;
