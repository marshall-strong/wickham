import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchKitchens,
  selectKitchenById,
  selectKitchenIds,
} from "./kitchensSlice";
import List from "../lists/List";

export const Kitchen = ({ kitchenId }) => {
  const kitchen = useSelector((state) => selectKitchenById(state, kitchenId));
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={kitchen.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {kitchen.name}
        </h2>
        <dl>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">id</dt>
            {": "}
            <dd className="inline text-black">{kitchen.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">name</dt>
            {": "}
            <dd className="inline text-black">{kitchen.name}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">buildingId</dt>
            {": "}
            <dd className="inline text-black">{kitchen.buildingId}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export const Kitchens = ({ kitchenIds }) => {
  return (
    <List>
      {kitchenIds.map((id) => (
        <Kitchen key={id} kitchenId={id} />
      ))}
    </List>
  );
};

const KitchensContainer = () => {
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
    content = <Kitchens kitchenIds={allKitchenIds} />;
  } else if (fetchKitchensStatus === "rejected") {
    content = <div>fetchKitchens was rejected!!!</div>;
  } else {
    content = (
      <div>Something unexpected happened in the KitchensContainer...</div>
    );
  }

  return <div className="Kitchens">{content}</div>;
};

export default KitchensContainer;
