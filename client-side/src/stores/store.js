import { createStore } from "redux";
import middlewares from "./middlewares";
import reducer from "./reducers/reducer";

const store = createStore(reducer, middlewares);
export default store;
