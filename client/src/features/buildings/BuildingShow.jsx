import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuilding } from "./buildingsSlice";
import BuildingShowItem from "./BuildingShowItem";

const BuildingShow = ({ match }) => {
  const buildingId = parseInt(match.params.building_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchBuilding(buildingId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchBuildingStatus = useSelector(
    (state) => state.buildings.status.fetchBuilding
  );

  let content;
  if (!fetchBuildingStatus || fetchBuildingStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchBuildingStatus === "fulfilled") {
    content = <BuildingShowItem buildingId={buildingId} />;
  } else if (fetchBuildingStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `BuildingShow` component:</p>
        <p>the request `fetchBuilding` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the BuildingShow component...</div>
    );
  }

  return <div className="BuildingShow">{content}</div>;
};

export default BuildingShow;
