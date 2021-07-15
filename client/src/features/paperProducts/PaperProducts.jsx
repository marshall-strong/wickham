import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPaperProducts,
  selectPaperProductById,
  selectPaperProductIds,
} from "./paperProductsSlice";
import List from "../lists/List";

export const PaperProduct = ({ paperProductId }) => {
  const paperProduct = useSelector((state) =>
    selectPaperProductById(state, paperProductId)
  );
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={paperProduct.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {paperProduct.name}
        </h2>
        <dl>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">id</dt>
            {": "}
            <dd className="inline text-black">{paperProduct.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">name</dt>
            {": "}
            <dd className="inline text-black">{paperProduct.name}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">productId</dt>
            {": "}
            <dd className="inline text-black">{paperProduct.productId}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">recipeId</dt>
            {": "}
            <dd className="inline text-black">{paperProduct.recipeId}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export const PaperProducts = ({ paperProductIds }) => {
  return (
    <List>
      {paperProductIds.map((id) => (
        <PaperProduct key={id} paperProductId={id} />
      ))}
    </List>
  );
};

const PaperProductsContainer = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchPaperProducts());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchPaperProductsStatus = useSelector(
    (state) => state.paperProducts.status.fetchPaperProducts
  );
  const allPaperProductIds = useSelector((state) =>
    selectPaperProductIds(state)
  );
  let content;

  if (!fetchPaperProductsStatus || fetchPaperProductsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchPaperProductsStatus === "fulfilled") {
    content = <PaperProducts paperProductIds={allPaperProductIds} />;
  } else if (fetchPaperProductsStatus === "rejected") {
    content = <div>fetchPaperProducts was rejected!!!</div>;
  } else {
    content = (
      <div>Something unexpected happened in the PaperProductsContainer...</div>
    );
  }

  return <div className="PaperProducts">{content}</div>;
};

export default PaperProductsContainer;
