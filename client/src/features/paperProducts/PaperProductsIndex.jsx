import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPaperProducts,
  selectPaperProductIds,
} from "./paperProductsSlice";
import List from "../../app/index/List";
import PaperProductsIndexItem from "./PaperProductsIndexItem";

const PaperProductsIndexItems = ({ paperProductIds }) => {
  return (
    <div className="PaperProducts">
      <List>
        {paperProductIds.map((id) => (
          <PaperProductsIndexItem key={id} paperProductId={id} />
        ))}
      </List>
    </div>
  );
};

const PaperProductsIndex = () => {
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
    content = <PaperProductsIndexItems paperProductIds={allPaperProductIds} />;
  } else if (fetchPaperProductsStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `PaperProductsIndex` component:</p>
        <p>the request `fetchPaperProducts` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>
        Something unexpected happened in the PaperProductsIndex component...
      </div>
    );
  }

  return <div className="PaperProductsIndex">{content}</div>;
};

export default PaperProductsIndex;
