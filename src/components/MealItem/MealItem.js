import React, { Fragment } from 'react';
import './MealItem.scss';
const MealItem = (props) => {
  return (
    <Fragment>
      <div className="meal-container">
        <div className="card">
          <div className="img-container">
            <img
              src={props.meal.strMealThumb}
              alt=""
              className="img"
              loading="lazy"
            />
          </div>
          <div className="description">
            <p>{props.meal.strMeal}</p>
            <div className="instructions">
              <a
                href={props.meal.strYoutube}
                className="recipe"
                target="_blank"
                rel="noreferrer"
              >
                Get the recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MealItem;
