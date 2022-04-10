import { createStore,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension"

const middleware = applyMiddleware(thunk)

const store = createStore(reducer,composeWithDevTools(middleware));

export default store;