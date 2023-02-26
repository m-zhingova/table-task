import React from "react";
import { getTransactions } from "../api/transactionsApi";

export const Transactions = () => {
  const [transactions, setTransactions] = React.useState(null);

  React.useEffect(() => {
    getTransactions()
      .then((response) => response.json())
      .then((data) => setTransactions(data.payment_transactions))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {transactions && transactions.length > 0 ? (
        transactions.map((transaction) => <div>{transaction.card_holder} </div>)
      ) : (
        <div>Loading ..</div>
      )}
    </>
  );
};
