import React from "react";

export const Monetary = ({ amount, currency }) => {
  const formattedAmount =  (amount/100).toFixed(2);

  return `${formattedAmount} ${currency}`;
};
