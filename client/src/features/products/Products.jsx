import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductById,
  selectProductIds,
} from "./productsSlice";
import List from "../lists/List";

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
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">id</dt>
            <dd>
              <abbr title={`id: ${product.id}`}>id: {product.id}</abbr>
            </dd>
          </div>
          <div>
            <dt className="sr-only">id</dt>
            <dd> · {product.id}</dd>
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
