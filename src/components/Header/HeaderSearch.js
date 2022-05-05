import Input from "../shared/Input";

import React from "react";

const HeaderSearch = () => {
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form action="/search.html" method="get">
        <Input type="search" placeholder="Search Article Here ..." />
      </form>
    </div>
  );
};

export default HeaderSearch;
