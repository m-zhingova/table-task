export const getTransactions = () => {
  return fetch("assets/data.json").then((response) => response.json());
};
