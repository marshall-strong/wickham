import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, selectRecipeIds } from "./recipesSlice";
import List from "../../app/index/List";
import RecipesIndexItem from "./RecipesIndexItem";

const RecipesIndexItems = ({ recipeIds }) => {
  return (
    <div className="Recipes">
      <List>
        {recipeIds.map((id) => (
          <RecipesIndexItem key={id} recipeId={id} />
        ))}
      </List>
    </div>
  );
};

const RecipesIndex = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchRecipes());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchRecipesStatus = useSelector(
    (state) => state.recipes.status.fetchRecipes
  );
  const allRecipeIds = useSelector((state) => selectRecipeIds(state));
  let content;

  if (!fetchRecipesStatus || fetchRecipesStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchRecipesStatus === "fulfilled") {
    content = <RecipesIndexItems recipeIds={allRecipeIds} />;
  } else if (fetchRecipesStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `RecipesIndex` component:</p>
        <p>the request `fetchRecipes` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the RecipesIndex component...</div>
    );
  }

  return <div className="RecipesIndex">{content}</div>;
};

export default RecipesIndex;
