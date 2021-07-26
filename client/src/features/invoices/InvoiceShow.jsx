import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoice } from "./invoicesSlice";
import InvoiceShowItem from "./InvoiceShowItem";

const InvoiceShow = ({ match }) => {
  const invoiceId = parseInt(match.params.invoice_id);
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchInvoice(invoiceId));
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchInvoiceStatus = useSelector(
    (state) => state.invoices.status.fetchInvoice
  );

  let content;
  if (!fetchInvoiceStatus || fetchInvoiceStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchInvoiceStatus === "fulfilled") {
    content = <InvoiceShowItem invoiceId={invoiceId} />;
  } else if (fetchInvoiceStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `InvoiceShow` component:</p>
        <p>the request `fetchInvoice` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the InvoiceShow component...</div>
    );
  }

  return <div className="InvoiceShow">{content}</div>;
};

export default InvoiceShow;
