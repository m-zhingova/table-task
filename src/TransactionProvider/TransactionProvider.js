import React  from "react";
import { TransactionContext } from "./TransactionContext";

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = React.useState(null);

  return (
    <TransactionContext.Provider value={{transactions, setTransactions}}>
      {children}
    </TransactionContext.Provider>
  );
};
