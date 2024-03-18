import { createStore } from "redux";
import reducer from "./reducers/index";

export default function configureStore(initalState) {
    const store = createStore(reducer, initalState);
    return store;
}