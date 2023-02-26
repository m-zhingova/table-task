import React from "react";
import { getTransactions } from "../api/transactionsApi";
import { TransactionsTable } from "./components/TransactionsTable";
import "./Transactions.css"

export const Transactions = () => {
  const [transactions, setTransactions] = React.useState(null);

  React.useEffect(() => {
    getTransactions()
      .then((response) => response.json())
      .then((data) => setTransactions(data.payment_transactions))
      .catch((error) => console.error(error));
  }, []);

  return transactions ? (
    <TransactionsTable transactions={transactions} />
  ) : (
    <div>Loading ...</div>
  );
};
