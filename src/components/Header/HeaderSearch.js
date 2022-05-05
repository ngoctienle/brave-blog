import Input from "../shared/Input";

import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
  const [queryStr, setQueryStr] = useState("");
  const navigate = useNavigate();

  const handdleOnChange = (evt) => {
    setQueryStr(evt.target.value);
  };
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    if (!queryStr) {
      return;
    }
    const queryStrURI = encodeURIComponent(queryStr);
    navigate("/search?q=" + queryStrURI);
  };
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleOnSubmit}>
        <Input
          type="search"
          placeholder="Search Article Here ..."
          value={queryStr}
          onChange={handdleOnChange}
        />
      </form>
    </div>
  );
};

export default HeaderSearch;
