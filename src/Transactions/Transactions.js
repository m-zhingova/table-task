import React from "react";
import { getTransactions } from "../api/transactionsApi";
import { TransactionsTable } from "./components/TransactionsTable";
import "./Transactions.css";
import { TransactionContext } from "../TransactionProvider/TransactionContext";

export const Transactions = () => {
  const {transactions, setTransactions} = React.useContext(TransactionContext);

  React.useEffect(() => {
    getTransactions()
      .then((data) => setTransactions(data.payment_transactions))
      .catch((error) => console.error(error));
  }, []);

  return transactions ? (
    <TransactionsTable transactions={transactions} />
  ) : (
    <div>Loading ...</div>
  );
};
