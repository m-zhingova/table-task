import "./App.css";
import { TransactionDetails } from "./TransactionDetails/TransactionDetails";
import { Transactions } from "./Transactions/Transactions";
import { useRoutes } from "react-router-dom";
import { TransactionProvider } from "./TransactionProvider/TransactionProvider";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Transactions />,
    },
    {
      path: "/transactions/:id",
      element: <TransactionDetails />,
    },
  ]);
  return <TransactionProvider>{routes}</TransactionProvider>;
}

export default App;
