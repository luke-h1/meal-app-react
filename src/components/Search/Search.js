import React, { Fragment } from "react";
import { GoBeaker } from "react-icons/go";

const Search = () => {
  return (
    <Fragment>
      <div className="search-container">
        <h2>Search for meals</h2>
        <GoBeaker />
        <input type="text" className="search-input" />
      </div>
    </Fragment>
  );
};
export default Search;
