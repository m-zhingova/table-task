import React from "react";
import { TransactionsTableRow } from "./TransactionsTableRow";
import "./TransactionsTable.css";

export const TransactionsTable = ({ transactions }) => {
  return (
    <div className="transaction-table">
      <div className="transaction-table-header">
        <div>Status</div>
        <div>Created at</div>
        <div>Merchant Name</div>
        <div>Type</div>
        <div>Error</div>
        <div>Card Holder</div>
        <div>Card Number</div>
        <div>Amount</div>
      </div>
      {transactions.map((transaction) => (
        <TransactionsTableRow key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};
