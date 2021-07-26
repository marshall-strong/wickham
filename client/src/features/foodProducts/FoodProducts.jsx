import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFoodProducts,
  selectFoodProductById,
  selectFoodProductIds,
} from "./foodProductsSlice";
import List from "../../app/lists/List";

export const FoodProduct = ({ foodProductId }) => {
  const foodProduct = useSelector((state) =>
    selectFoodProductById(state, foodProductId)
  );
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={foodProduct.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {foodProduct.name}
        </h2>
        <dl>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">id</dt>
            {": "}
            <dd className="inline text-black">{foodProduct.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">name</dt>
            {": "}
            <dd className="inline text-black">{foodProduct.name}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">productId</dt>
            {": "}
            <dd className="inline text-black">{foodProduct.productId}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">recipeId</dt>
            {": "}
            <dd className="inline text-black">{foodProduct.recipeId}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export const FoodProducts = ({ foodProductIds }) => {
  return (
    <List>
      {foodProductIds.map((id) => (
        <FoodProduct key={id} foodProductId={id} />
      ))}
    </List>
  );
};

const FoodProductsContainer = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchFoodProducts());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchFoodProductsStatus = useSelector(
    (state) => state.foodProducts.status.fetchFoodProducts
  );
  const allFoodProductIds = useSelector((state) => selectFoodProductIds(state));
  let content;

  if (!fetchFoodProductsStatus || fetchFoodProductsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchFoodProductsStatus === "fulfilled") {
    content = <FoodProducts foodProductIds={allFoodProductIds} />;
  } else if (fetchFoodProductsStatus === "rejected") {
    content = <div>fetchFoodProducts was rejected!!!</div>;
  } else {
    content = (
      <div>Something unexpected happened in the FoodProductsContainer...</div>
    );
  }

  return <div className="FoodProducts">{content}</div>;
};

export default FoodProductsContainer;
