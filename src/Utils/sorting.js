export const sortingOrder = {
  asc: "asc",
  desc: "desc",
};

export const genericSorting = (data, field, order) => {
  return data.sort(
    (a, b) =>
      a[field].localeCompare(b[field], "en", { numeric: "true" }) *
      (order === sortingOrder.asc ? 1 : -1)
  );
};
