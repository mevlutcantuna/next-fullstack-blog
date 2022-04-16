import { combineReducers } from "redux";
import searchReducer from "./post";
import userReducer from "./user";

const reducer = combineReducers({
  user: userReducer,
  search: searchReducer,
});

export default reducer;
