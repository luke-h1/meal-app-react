import React, { Fragment } from "react";
import { GoBeaker } from "react-icons/go";
import "./Search.scss";
const Search = () => {
  return (
    <Fragment>
      <div className="search-container">
        <h2>Search for meals</h2>
        <GoBeaker className="search-icon" />
        <input type="text" className="search-input" />
        <input type="submit" className="button" placeholder="submit" />
      </div>
    </Fragment>
  );
};
export default Search;
