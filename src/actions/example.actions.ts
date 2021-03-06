import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("EXAMPLE");

export const fetchApiData = actionCreator.async<undefined, {}>(
  "FETCH_API_DATA"
);
export const setLocalData = actionCreator<any>("SET_LOCAL_DATA");
