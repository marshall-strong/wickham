import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProductIds } from "./productsSlice";
import List from "../../app/lists/List";
import ProductsIndexItem from "./ProductsIndexItem";

const ProductsIndexItems = ({ productIds }) => {
  return (
    <div className="Products">
      <List>
        {productIds.map((id) => (
          <ProductsIndexItem key={id} productId={id} />
        ))}
      </List>
    </div>
  );
};

const ProductsIndex = () => {
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
    content = <ProductsIndexItems productIds={allProductIds} />;
  } else if (fetchProductsStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `ProductsIndex` component:</p>
        <p>the request `fetchProducts` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the ProductsIndex component...</div>
    );
  }

  return <div className="ProductsIndex">{content}</div>;
};

export default ProductsIndex;
