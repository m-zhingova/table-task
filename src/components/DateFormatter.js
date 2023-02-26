import React from "react";

export const DateFormatter = ({ date }) => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  const hours = dateObject.getHours();
  const mins = String(dateObject.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${mins}`;
};
