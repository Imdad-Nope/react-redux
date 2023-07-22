import { createStore } from "redux";
import productReducer from "../productReducer/productReducer";

const store = createStore(productReducer)

export default store;