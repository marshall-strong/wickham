import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductById,
  selectProductIds,
} from "./productsSlice";
import List from "../../app/lists/List";

export const Product = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={product.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {product.name}
        </h2>
        <dl>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">id</dt>
            {": "}
            <dd className="inline text-black">{product.id}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">name</dt>
            {": "}
            <dd className="inline text-black">{product.name}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">description</dt>
            {": "}
            <dd className="inline text-black">{product.description}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">partNo</dt>
            {": "}
            <dd className="inline text-black">{product.partNo}</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">vendorId</dt>
            {": "}
            <dd className="inline text-black">{product.vendorId}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export const Products = ({ productIds }) => {
  return (
    <List>
      {productIds.map((id) => (
        <Product key={id} productId={id} />
      ))}
    </List>
  );
};

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchProducts());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchProductsStatus = useSelector(
    (state) => state.products.status.fetchProducts
  );
  const allProductIds = useSelector((state) => selectProductIds(state));
  let content;

  if (!fetchProductsStatus || fetchProductsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchProductsStatus === "fulfilled") {
    content = <Products productIds={allProductIds} />;
  } else if (fetchProductsStatus === "rejected") {
    content = <div>fetchProducts was rejected!!!</div>;
  } else {
    content = (
      <div>Something unexpected happened in the ProductsContainer...</div>
    );
  }

  return <div className="Products">{content}</div>;
};

export default ProductsContainer;
