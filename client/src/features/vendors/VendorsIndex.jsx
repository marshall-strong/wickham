import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendors, selectVendorIds } from "./vendorsSlice";
import VendorsIndexItems from "./VendorsIndexItems";

const VendorsIndex = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchVendors());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchVendorsStatus = useSelector(
    (state) => state.vendors.status.fetchVendors
  );
  const allVendorIds = useSelector((state) => selectVendorIds(state));
  let content;

  if (!fetchVendorsStatus || fetchVendorsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchVendorsStatus === "fulfilled") {
    content = <VendorsIndexItems vendorIds={allVendorIds} />;
  } else if (fetchVendorsStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `VendorsIndex` component:</p>
        <p>the request `fetchVendors` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the VendorsIndex component...</div>
    );
  }

  return <div className="VendorsIndex">{content}</div>;
};

export default VendorsIndex;
