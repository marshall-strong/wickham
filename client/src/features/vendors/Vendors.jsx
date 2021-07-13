import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVendors,
  selectVendorById,
  selectVendorIds,
} from "./vendorsSlice";
import List from "../lists/List";

export const Vendor = ({ vendorId }) => {
  const vendor = useSelector((state) => selectVendorById(state, vendorId));
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={vendor.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {vendor.name}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">id</dt>
            <dd>
              <abbr title={`id: ${vendor.id}`}>id: {vendor.id}</abbr>
            </dd>
          </div>
          <div>
            <dt className="sr-only">id</dt>
            <dd> · {vendor.id}</dd>
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

export const Vendors = ({ vendorIds }) => {
  return (
    <List>
      {vendorIds.map((id) => (
        <Vendor key={id} vendorId={id} />
      ))}
    </List>
  );
};

const VendorsContainer = () => {
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
    content = <Vendors vendorIds={allVendorIds} />;
  } else if (fetchVendorsStatus === "rejected") {
    content = <div>fetchVendors was rejected!!!</div>;
  } else {
    content = (
      <div>Something unexpected happened in the VendorsContainer...</div>
    );
  }

  return <div className="Vendors">{content}</div>;
};

export default VendorsContainer;
