import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoices, selectInvoiceIds } from "./invoicesSlice";
import List from "../../app/lists/List";
import InvoicesIndexItem from "./InvoicesIndexItem";

const InvoicesIndexItems = ({ invoiceIds }) => {
  return (
    <div className="Invoices">
      <List>
        {invoiceIds.map((id) => (
          <InvoicesIndexItem key={id} invoiceId={id} />
        ))}
      </List>
    </div>
  );
};

const InvoicesIndex = () => {
  const dispatch = useDispatch();
  const [requestSent, setRequestSent] = useState(false);
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchInvoices());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchInvoicesStatus = useSelector(
    (state) => state.invoices.status.fetchInvoices
  );
  const allInvoiceIds = useSelector((state) => selectInvoiceIds(state));
  let content;

  if (!fetchInvoicesStatus || fetchInvoicesStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchInvoicesStatus === "fulfilled") {
    content = <InvoicesIndexItems invoiceIds={allInvoiceIds} />;
  } else if (fetchInvoicesStatus === "rejected") {
    content = (
      <div>
        <p>Error in the `InvoicesIndex` component:</p>
        <p>the request `fetchInvoices` was rejected!</p>
      </div>
    );
  } else {
    content = (
      <div>Something unexpected happened in the InvoicesIndex component...</div>
    );
  }

  return <div className="InvoicesIndex">{content}</div>;
};

export default InvoicesIndex;
