import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendor } from "./vendorsSlice";
import VendorShowItem from "./VendorShowItem";

const VendorShow = ({ match }) => {
  const vendorId = parseInt(match.params.vendor_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchVendor(vendorId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchVendorStatus = useSelector(
    (state) => state.vendors.status.fetchVendor
  );

  let content;
  if (!fetchVendorStatus || fetchVendorStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchVendorStatus === "fulfilled") {
    content = <VendorShowItem vendorId={vendorId} />;
  } else if (fetchVendorStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `VendorShow` component:</p>
        <p>the request `fetchVendor` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the VendorShow component...</div>
    );
  }

  return <div className="VendorShow">{content}</div>;
};

export default VendorShow;
