import { errorClassMap } from "../Constants/errorClass";

const errorSubstring = "Module::";

export const getErrorClass = (error) => {
  if (error.indexOf(errorSubstring) >= 0) {
    return errorClassMap[error.replace(errorSubstring, "")];
  }

  return errorClassMap.default;
};
