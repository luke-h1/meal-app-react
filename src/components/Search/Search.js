import React, { Fragment, useState, useEffect } from "react";
import { GoBeaker } from "react-icons/go";
import "./Search.scss";
const Search = () => {
  const [meal,setMeal] = useState('');
  const [error, setError] = useState('');
  const [text, setText] = useState('');



const showError = (msg) => { 
  setError(msg);
  setTimeout(() => { 
    setError('');

  }, 2000)
}


  const onChange = (e) => setText(e.target.value);

  const handleClick = () => { 
    if (text === ''){
      showError('enter text')
    }else { 
      // do the function
    }
  }

  return (
    <Fragment>
      <div className="search-container">
        <h2>Search for meals</h2>

        <GoBeaker className="search-icon" />
        <input type="text" className="search-input" onChange={onChange}/>
        <input type="submit" className="button" placeholder="submit" onClick={handleClick}/> 
        {error}
      </div>
    </Fragment>
  );
};
export default Search;


// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

