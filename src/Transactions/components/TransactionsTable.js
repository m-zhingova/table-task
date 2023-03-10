import React, { useState } from "react";
import { TransactionsTableRow } from "./TransactionsTableRow";
import { genericSorting, sortingOrder } from "../../Utils/sorting";
import { TransactionFilters } from "./TransactionFilters";
import "./TransactionsTable.css";

export const TransactionsTable = ({ transactions }) => {
  const [sortOrder, setSortOrder] = useState(sortingOrder.asc);
  const [sortField, setSortField] = useState("status");
  const [filterFields, setFilterFields] = React.useState([]);

  const onSort = (field) => {
    if (sortField === field) {
      setSortOrder(
        sortOrder === sortingOrder.asc ? sortingOrder.desc : sortingOrder.asc
      );
    } else {
      setSortField(sortingOrder.asc);
    }

    setSortField(field);
  };

  const sortedTable = React.useMemo(() => {
    return genericSorting(transactions, sortField, sortOrder, filterFields);
  }, [transactions, sortOrder, sortField, filterFields]);

  return (
    <>
      <TransactionFilters
        filterFields={filterFields}
        setFilterFields={setFilterFields}
      />
      <div className="transaction-table">
        <div className="transaction-table-header">
          <div onClick={() => onSort("status")}>Status</div>
          <div onClick={() => onSort("created_at")}>Created at</div>
          <div onClick={() => onSort("merchant_name")}>Merchant Name</div>
          <div onClick={() => onSort("type")}>Type</div>
          <div onClick={() => onSort("error_class")}>Error</div>
          <div onClick={() => onSort("card_holder")}>Card Holder</div>
          <div onClick={() => onSort("card_number")}>Card Number</div>
          <div onClick={() => onSort("amount")}>Amount</div>
        </div>
        {sortedTable.map((transaction) => (
          <TransactionsTableRow
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </>
  );
};
