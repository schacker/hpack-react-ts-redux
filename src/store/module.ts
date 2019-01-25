import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/module";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);

function configureStore(initialState: any) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

export default configureStore;
