import { createStore } from "redux";
import middlewares from "./middlewares/index";
import reducer from "./reducers/reducer";
const store = createStore(reducer, middlewares);
export default store;
