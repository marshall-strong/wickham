import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodProducts, selectFoodProductIds } from "./foodProductsSlice";
import List from "../../app/index/List";
import FoodProductsIndexItem from "./FoodProductsIndexItem";

const FoodProductsIndexItems = ({ foodProductIds }) => {
  return (
    <div className="FoodProducts">
      <List>
        {foodProductIds.map((id) => (
          <FoodProductsIndexItem key={id} foodProductId={id} />
        ))}
      </List>
    </div>
  );
};

const FoodProductsIndex = () => {
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
    content = <FoodProductsIndexItems foodProductIds={allFoodProductIds} />;
  } else if (fetchFoodProductsStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `FoodProductsIndex` component:</p>
        <p>the request `fetchFoodProducts` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>
        Something unexpected happened in the FoodProductsIndex component...
      </div>
    );
  }

  return <div className="FoodProductsIndex">{content}</div>;
};

export default FoodProductsIndex;
