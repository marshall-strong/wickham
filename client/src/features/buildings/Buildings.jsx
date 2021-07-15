import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBuildings,
  selectBuildingById,
  selectBuildingIds,
} from "./buildingsSlice";
import List from "../lists/List";

export const Building = ({ buildingId }) => {
  const building = useSelector((state) =>
    selectBuildingById(state, buildingId)
  );
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={building.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {building.name}
        </h2>
        <dl>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">id</dt>
            {": "}
            <dd className="inline text-black">{building.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">name</dt>
            {": "}
            <dd className="inline text-black">{building.name}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export const Buildings = ({ buildingIds }) => {
  return (
    <List>
      {buildingIds.map((id) => (
        <Building key={id} buildingId={id} />
      ))}
    </List>
  );
};

const BuildingsContainer = () => {
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
    content = <Buildings buildingIds={allBuildingIds} />;
  } else if (fetchBuildingsStatus === "rejected") {
    content = <div>fetchBuildings was rejected!!!</div>;
  } else {
    content = (
      <div>Something unexpected happened in the BuildingsContainer...</div>
    );
  }

  return <div className="Buildings">{content}</div>;
};

export default BuildingsContainer;
