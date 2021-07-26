import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPaperProductById } from "./paperProductsSlice";

const PaperProductsIndexItem = ({ paperProductId }) => {
  const paperProduct = useSelector((state) =>
    selectPaperProductById(state, paperProductId)
  );
  return (
    <article className="p-4 flex space-x-4">
      <Link to={`/paper_products/${paperProductId}`}>
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
          </dl>
        </div>
      </Link>
    </article>
  );
};

export default PaperProductsIndexItem;
