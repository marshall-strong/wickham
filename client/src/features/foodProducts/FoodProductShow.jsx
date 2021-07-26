import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodProduct } from "./foodProductsSlice";
import FoodProductShowItem from "./FoodProductShowItem";

const FoodProductShow = ({ match }) => {
  const foodProductId = parseInt(match.params.food_product_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchFoodProduct(foodProductId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchFoodProductStatus = useSelector(
    (state) => state.foodProducts.status.fetchFoodProduct
  );

  let content;
  if (!fetchFoodProductStatus || fetchFoodProductStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchFoodProductStatus === "fulfilled") {
    content = <FoodProductShowItem foodProductId={foodProductId} />;
  } else if (fetchFoodProductStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `FoodProductShow` component:</p>
        <p>the request `fetchFoodProduct` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>
        Something unexpected happened in the FoodProductShow component...
      </div>
    );
  }

  return <div className="FoodProductShow">{content}</div>;
};

export default FoodProductShow;
