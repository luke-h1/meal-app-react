import React, { Fragment } from "react";
import "./MealItem.scss";
import { Link } from "react-router-dom";
const MealItem = (props) => {
  return (
    <Fragment>
      <div className="meal-container">
        <div className="card">
          <img src={props.meal.strMealThumb} alt="" />
          <div className="description">
            <p>{props.meal.strMeal}</p>
            <p>Recipe:</p>
            <Link to={`/recipes/${props.meal.idMeal}`}>Reipe</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MealItem;
