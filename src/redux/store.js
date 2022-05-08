import initialState from "./state";
import reducer from "./reducer";
import { createStore } from "redux";

const store = createStore(reducer, initialState);

store.subscribe(() => console.log("check", store.getState()));

export default store;
