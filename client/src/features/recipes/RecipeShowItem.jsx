import React from "react";
import { useSelector } from "react-redux";
import { selectRecipeById } from "./recipesSlice";

const RecipeShowItem = ({ recipeId }) => {
  const recipe = useSelector((state) => selectRecipeById(state, recipeId));
  return (
    <article className="Recipe p-4 flex space-x-4">
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
        <dl>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">id</dt>
            {": "}
            <dd className="inline text-black">{recipe.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">name</dt>
            {": "}
            <dd className="inline text-black">{recipe.name}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default RecipeShowItem;
