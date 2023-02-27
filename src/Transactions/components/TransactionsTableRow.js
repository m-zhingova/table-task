import React from "react";
import { TransactionsTableCell } from "./TransactionsTableCell";
import { DateFormatter } from "../../components/DateFormatter";
import { Monetary } from "../../components/Monetary";
import { transactionTypesMap } from "../../Constants/transactionTypes";
import { getErrorClass } from "../../Utils/getErrorClass";
import { useNavigate } from "react-router-dom";
import "./TransactionsTableRow.css";


export const TransactionsTableRow = ({ transaction }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/transactions/${transaction.id}`)
  }

  return (
    <div className="transaction-table-row">
      <TransactionsTableCell>{transaction.status}</TransactionsTableCell>
      <TransactionsTableCell onClick={handleClick}>
        <DateFormatter date={transaction.created_at} />
      </TransactionsTableCell>
      <TransactionsTableCell>{transaction.merchant_name}</TransactionsTableCell>
      <TransactionsTableCell>
        {transactionTypesMap[transaction.type]}
      </TransactionsTableCell>
      <TransactionsTableCell>
        {getErrorClass(transaction.error_class)}
      </TransactionsTableCell>
      <TransactionsTableCell>{transaction.card_holder}</TransactionsTableCell>
      <TransactionsTableCell>{transaction.card_number}</TransactionsTableCell>
      <TransactionsTableCell>
        <Monetary amount={transaction.amount} currency={transaction.currency} />
      </TransactionsTableCell>
    </div>
  );
}; 
