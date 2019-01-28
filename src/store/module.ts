import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/module";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);

function configureStore() {
  return createStoreWithMiddleware(rootReducer, undefined);
}

export default configureStore;
