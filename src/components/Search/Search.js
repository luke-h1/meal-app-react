import React, { Fragment, useState } from 'react';
import { GoBeaker } from 'react-icons/go';
import './Search.scss';
import MealItem from '../MealItem/MealItem';
const Search = () => {
  const [meal, setMeal] = useState('');
  const [error, setError] = useState('');
  const [text, setText] = useState('');

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  const searchMeals = async () => {
    try {
      const BASE_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
      const res = await fetch(`${BASE_URL}${text}`);
      const data = await res.json();
      console.log(data);
      const results = data.meals.map((meal) => {
        return <MealItem meal={meal} key={meal.idMeal} />;
      });
      setMeal(results);
    } catch (e) {
      console.log(e);
      showError(
        <h2 className="error">
          No meals found from the API. Try another recipe{' '}
        </h2>
      );
    }
  };

  const onChange = (e) => setText(e.target.value);

  const handleClick = () => {
    if (text === '') {
      showError(<h2 className="error">Enter a correct query</h2>);
    } else if (text.trim()) {
      searchMeals(text);
    }
  };

  const clear = () => {
    window.location.reload();
  };

  return (
    <Fragment>
      <div className="search-container">
        <h2>Search for meals</h2>
        <GoBeaker className="search-icon" />
        <label for="search">Search</label>
        <input
          type="text"
          className="search-input"
          onChange={onChange}
          name="search"
        />
        <input
          type="submit"
          className="button"
          placeholder="submit"
          onClick={handleClick}
        />
        <button type="submit" className="button-clear" onClick={clear}>
          Clear Results
        </button>
        {error}
      </div>
      <div className="grid-container">{meal}</div>
    </Fragment>
  );
};
export default Search;
