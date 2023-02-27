const baseUrl = `http://localhost:3000/`;
export const getTransactions = () => {
  return fetch(`${baseUrl}assets/data.json`).then((response) => response.json());
};

export const getTransactionsById = (id) => {
  return fetch(`${baseUrl}assets/data.json`)
    .then((response) => response.json())
    .then((data) => data.payment_transactions.find((d) => d.id === id));
};
