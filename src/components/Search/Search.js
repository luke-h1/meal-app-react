import React, { Fragment, useState } from "react";
import { GoBeaker } from "react-icons/go";
import "./Search.scss";
const Search = () => {
  const [meal,setMeal] = useState('');
  const [error, setError] = useState(false);



const showError = () => { 
  setError(true);
}


  const onChange = (e) => setText(e.target.value);

  const handleClick = () => { 
    if (text === ''){
      showError('Enter a value')
    }else { 
      // do the function
    }
  }

  return (
    <Fragment>
      <div className="search-container">
        <h2>Search for meals</h2>
        {error ? <h2>testing 123</h2>}
        
        <GoBeaker className="search-icon" />
        <input type="text" className="search-input" onChange={onChange}/>
        <input type="submit" className="button" placeholder="submit" onClick={handleClick}/> 
      </div>
    </Fragment>
  );
};
export default Search;


https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
