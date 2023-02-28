import React from "react";

export const FilterDropdown = ({
  field,
  onInputChange,
  onRemoveField,
  onOperationChange,
}) => (
  <div key={field.id}>
    <label>{field.label}</label>

    <select value={field.operation} onChange={onOperationChange}>
      <option value="equal">Equal</option>
      <option value="startsWith">Starts with</option>
      <option value="endsWith">Ends with</option>
      <option value="contains">Contains</option>
    </select>
    <label>Value: </label>
    <input name={field.id} value={field.value} onChange={onInputChange} />
    <button onClick={onRemoveField}>Remove</button>
  </div>
);
