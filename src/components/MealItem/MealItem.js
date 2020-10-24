import React, { Fragment } from "react";
import "./MealItem.scss";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
const MealItem = (props) => {
  return (
    <Fragment>
      <div className="meal-container">
        <div className="card">
          <img src={props.meal.strMealThumb} alt="" />
          <div className="description">
            <p>{props.meal.strMeal}</p>
            <p>Recipe:</p>
            <BrowserRouter>
              <Switch>
                <Route
                  path={`/recipes/${props.meal.idMeal}`}
                  exact
                  component={Recipe}
                >
                  <Link to={`/recipes/${props.meal.idMeal}`}>
                    Get the Recipe !
                  </Link>
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MealItem;
