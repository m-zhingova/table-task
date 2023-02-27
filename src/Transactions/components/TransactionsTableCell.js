import React from "react";
import "./TransactionsTableCell.css";

export const TransactionsTableCell = ({ children, ...rest }) => {
  return <div className="transaction-table-cell" {...rest}>{children}</div>;
};
