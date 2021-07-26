import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKitchen } from "./kitchensSlice";
import KitchenShowItem from "./KitchenShowItem";

const KitchenShow = ({ match }) => {
  const kitchenId = parseInt(match.params.kitchen_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchKitchen(kitchenId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchKitchenStatus = useSelector(
    (state) => state.kitchens.status.fetchKitchen
  );

  let content;
  if (!fetchKitchenStatus || fetchKitchenStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchKitchenStatus === "fulfilled") {
    content = <KitchenShowItem kitchenId={kitchenId} />;
  } else if (fetchKitchenStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `KitchenShow` component:</p>
        <p>the request `fetchKitchen` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the KitchenShow component...</div>
    );
  }

  return <div className="KitchenShow">{content}</div>;
};

export default KitchenShow;
