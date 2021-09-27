import { createStore } from "redux";
import eventsReducer from "./reducers";

export const store = createStore(
  eventsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
