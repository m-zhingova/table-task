import React from "react";
import { TransactionsTableCell } from "./TransactionsTableCell";
import { DateFormatter } from "../../components/DateFormatter";
import "./TransactionsTableRow.css";

export const TransactionsTableRow = ({ transaction }) => {
  return (
    <div className="transaction-table-row">
      <TransactionsTableCell>{transaction.status}</TransactionsTableCell>
      <TransactionsTableCell>
        <DateFormatter date={transaction.created_at} />
      </TransactionsTableCell>
      <TransactionsTableCell>{transaction.merchant_name}</TransactionsTableCell>
      <TransactionsTableCell>{transaction.type}</TransactionsTableCell>
      <TransactionsTableCell>{transaction.error_class}</TransactionsTableCell>
      <TransactionsTableCell>{transaction.card_holder}</TransactionsTableCell>
      <TransactionsTableCell>{transaction.card_number}</TransactionsTableCell>
      <TransactionsTableCell>{transaction.amount}</TransactionsTableCell>
    </div>
  );
};
