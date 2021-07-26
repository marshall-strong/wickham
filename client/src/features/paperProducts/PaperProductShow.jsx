import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaperProduct } from "./paperProductsSlice";
import PaperProductShowItem from "./PaperProductShowItem";

const PaperProductShow = ({ match }) => {
  const paperProductId = parseInt(match.params.paper_product_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchPaperProduct(paperProductId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchPaperProductStatus = useSelector(
    (state) => state.paperProducts.status.fetchPaperProduct
  );

  let content;
  if (!fetchPaperProductStatus || fetchPaperProductStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchPaperProductStatus === "fulfilled") {
    content = <PaperProductShowItem paperProductId={paperProductId} />;
  } else if (fetchPaperProductStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `PaperProductShow` component:</p>
        <p>the request `fetchPaperProduct` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>
        Something unexpected happened in the PaperProductShow component...
      </div>
    );
  }

  return <div className="PaperProductShow">{content}</div>;
};

export default PaperProductShow;
