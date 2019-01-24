import { combineReducers } from "redux";
import Module1 from "../pages/Module1/reducer";
import Module2 from "../pages/Module2/reducer";

// import { reducer as formReducer } from "redux-form"

export default combineReducers({
  Module1,
  Module2,
});
