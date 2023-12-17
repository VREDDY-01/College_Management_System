import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import errorReducer from "./errorReducer";
import facultyReducer from "./facultyReducer";

export default combineReducers({
  admin: adminReducer,
  errors: errorReducer,
  faculty: facultyReducer,
});
