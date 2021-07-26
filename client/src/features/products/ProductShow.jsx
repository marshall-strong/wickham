import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./productsSlice";
import ProductShowItem from "./ProductShowItem";

const ProductShow = ({ match }) => {
  const productId = parseInt(match.params.product_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchProduct(productId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchProductStatus = useSelector(
    (state) => state.products.status.fetchProduct
  );

  let content;
  if (!fetchProductStatus || fetchProductStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchProductStatus === "fulfilled") {
    content = <ProductShowItem productId={productId} />;
  } else if (fetchProductStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `ProductShow` component:</p>
        <p>the request `fetchProduct` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the ProductShow component...</div>
    );
  }

  return <div className="ProductShow">{content}</div>;
};

export default ProductShow;
