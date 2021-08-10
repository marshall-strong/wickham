import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKitchens, selectKitchenIds } from "./kitchensSlice";
import List from "../../app/index/List";
import KitchensIndexItem from "./KitchensIndexItem";

const KitchensIndexItems = ({ kitchenIds }) => {
  return (
    <div className="Kitchens">
      <List>
        {kitchenIds.map((id) => (
          <KitchensIndexItem key={id} kitchenId={id} />
        ))}
      </List>
    </div>
  );
};

const KitchensIndex = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchKitchens());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchKitchensStatus = useSelector(
    (state) => state.kitchens.status.fetchKitchens
  );
  const allKitchenIds = useSelector((state) => selectKitchenIds(state));
  let content;

  if (!fetchKitchensStatus || fetchKitchensStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchKitchensStatus === "fulfilled") {
    content = <KitchensIndexItems kitchenIds={allKitchenIds} />;
  } else if (fetchKitchensStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `KitchensIndex` component:</p>
        <p>the request `fetchKitchens` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the KitchensIndex component...</div>
    );
  }

  return <div className="KitchensIndex">{content}</div>;
};

export default KitchensIndex;
