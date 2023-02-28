import React from "react";
import { FilterDropdown } from "./FilterField";
import {
  filterOptions,
  filterOperationTypes,
} from "../../Constants/transactionTypes";

export const TransactionFilters = ({ filterFields, setFilterFields }) => {
  const handleFieldChange = (event, index) => {
    let data = [...filterFields];
    data[index].value = event.target.value;
    setFilterFields(data);
  };

  const handleOperationChange = (event, index) => {
    let data = [...filterFields];
    data[index].operation = event.target.value;
    setFilterFields(data);
  };

  const handleAddFilter = (field) => {
    if (field && !filterFields.find((f) => f.id === field)) {
      setFilterFields([
        ...filterFields,
        {
          label: filterOptions[field],
          value: "",
          id: field,
          operation: filterOperationTypes.equal,
        },
      ]);
    }
  };

  const removeFields = (index) => {
    const data = [...filterFields];
    data.splice(index, 1);
    setFilterFields(data);
  };

  return (
    <div>
      <div>
        <label>Select filters</label>
        <select
          onChange={(e) => {
            handleAddFilter(e.target.value);
          }}
        >
          <option value=""></option>
          <option value="status">Status</option>
          <option value="merchant_name">Merchant name</option>
          <option value="error_class">Error class</option>
          <option value="card_holder">Card Holder</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <div>
        {filterFields.map((field, index) => (
          <FilterDropdown
            key={field.id}
            field={field}
            onOperationChange={(e) => {
              handleOperationChange(e, index);
            }}
            onInputChange={(e) => {
              handleFieldChange(e, index);
            }}
            onRemoveField={() => {
              removeFields(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
