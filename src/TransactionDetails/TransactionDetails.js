import React from "react";
import { useParams } from "react-router-dom";
import { TransactionContext } from "../TransactionProvider/TransactionContext";
import { getTransactionsById } from "../api/transactionsApi";

export const TransactionDetails = () => {
  let { id } = useParams();
  const { transactions } = React.useContext(TransactionContext);
  const [currentTransaction, setCurrentTransaction] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      if (transactions) {
        setCurrentTransaction(
          transactions.find((transaction) => transaction.id === Number(id))
        );
      }
      {
        getTransactionsById(Number(id)).then((data) => {
          setCurrentTransaction(data);
        });
      }
    }
  }, [id]);

  return (
    <div>
      <h4>Transaction details</h4>
      {currentTransaction && (
        <div>
          <div>Error Class: {currentTransaction.error_class}</div>
          <div>Error Message: {currentTransaction.error_message}</div>
        </div>
      )}
    </div>
  );
};
