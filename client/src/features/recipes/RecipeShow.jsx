import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe } from "./recipesSlice";
import RecipeShowItem from "./RecipeShowItem";

const RecipeShow = ({ match }) => {
  const recipeId = parseInt(match.params.recipe_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchRecipe(recipeId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchRecipeStatus = useSelector(
    (state) => state.recipes.status.fetchRecipe
  );

  let content;
  if (!fetchRecipeStatus || fetchRecipeStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchRecipeStatus === "fulfilled") {
    content = <RecipeShowItem recipeId={recipeId} />;
  } else if (fetchRecipeStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `RecipeShow` component:</p>
        <p>the request `fetchRecipe` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the RecipeShow component...</div>
    );
  }

  return <div className="RecipeShow">{content}</div>;
};

export default RecipeShow;
