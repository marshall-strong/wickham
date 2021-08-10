import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuildings, selectBuildingIds } from "./buildingsSlice";
import List from "../../app/index/List";
import BuildingsIndexItem from "./BuildingsIndexItem";

const BuildingsIndexItems = ({ buildingIds }) => {
  return (
    <div className="Buildings">
      <List>
        {buildingIds.map((id) => (
          <BuildingsIndexItem key={id} buildingId={id} />
        ))}
      </List>
    </div>
  );
};

const BuildingsIndex = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchBuildings());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchBuildingsStatus = useSelector(
    (state) => state.buildings.status.fetchBuildings
  );
  const allBuildingIds = useSelector((state) => selectBuildingIds(state));
  let content;

  if (!fetchBuildingsStatus || fetchBuildingsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchBuildingsStatus === "fulfilled") {
    content = <BuildingsIndexItems buildingIds={allBuildingIds} />;
  } else if (fetchBuildingsStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `BuildingsIndex` component:</p>
        <p>the request `fetchBuildings` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>
        Something unexpected happened in the BuildingsIndex component...
      </div>
    );
  }

  return <div className="BuildingsIndex">{content}</div>;
};

export default BuildingsIndex;
