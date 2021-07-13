import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipes,
  selectRecipeById,
  selectRecipeIds,
} from "./recipesSlice";
import List from "../lists/List";

export const Recipe = ({ recipeId }) => {
  const recipe = useSelector((state) => selectRecipeById(state, recipeId));
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={recipe.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {recipe.name}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">id</dt>
            <dd>
              <abbr title={`id: ${recipe.id}`}>id: {recipe.id}</abbr>
            </dd>
          </div>
          <div>
            <dt className="sr-only">id</dt>
            <dd> · {recipe.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">Part of </dt>{" "}
            <dd className="inline text-black">{"Wickham Farms"}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export const Recipes = ({ recipeIds }) => {
  return (
    <List>
      {recipeIds.map((id) => (
        <Recipe key={id} recipeId={id} />
      ))}
    </List>
  );
};

const RecipesContainer = () => {
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
    content = <Recipes recipeIds={allRecipeIds} />;
  } else if (fetchRecipesStatus === "rejected") {
    content = <div>fetchRecipes was rejected!!!</div>;
  } else {
    content = (
      <div>Something unexpected happened in the RecipesContainer...</div>
    );
  }

  return <div className="Recipes">{content}</div>;
};

export default RecipesContainer;
