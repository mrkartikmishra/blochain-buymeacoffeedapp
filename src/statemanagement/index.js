import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  buy: "scale-0",
  currentAccount: "",
  donations: [],
});

export { setGlobalState, useGlobalState, getGlobalState };
