export const sortingOrder = {
  asc: "asc",
  desc: "desc",
};

export const filterOperations = {
  equal: (filedValue, filterValue) => filedValue === filterValue,
  startsWith: (filedValue, filterValue) => filedValue.startsWith(filterValue),
  endsWith: (filedValue, filterValue) => filedValue.endsWith(filterValue),
  contains: (filedValue, filterValue) => filedValue.includes(filterValue),
};

export const genericSorting = (data, field, order, filterFields = []) => {
  const sortedData = data.sort(
    (a, b) =>
      a[field].localeCompare(b[field], "en", { numeric: "true" }) *
      (order === sortingOrder.asc ? 1 : -1)
  );

  if (filterFields.length > 0) {
    return sortedData.filter((d) => {
      return filterFields.every((filter) => {
        return filter.value
          ? filterOperations[filter.operation](d[filter.id], filter.value)
          : true;
      });
    });
  }

  return sortedData;
};
