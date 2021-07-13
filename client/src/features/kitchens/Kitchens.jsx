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
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">id</dt>
            <dd>
              <abbr title={`id: ${kitchen.id}`}>id: {kitchen.id}</abbr>
            </dd>
          </div>
          <div>
            <dt className="sr-only">id</dt>
            <dd> · {kitchen.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">Part of </dt>{" "}
            <dd className="inline text-black">{"Wickham Farms"}</dd>
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
