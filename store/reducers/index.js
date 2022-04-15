import { combineReducers } from "redux";
import searchReducer from "./search";
import userReducer from "./user";

const reducer = combineReducers({
  user: userReducer,
  search: searchReducer,
});

export default reducer;
