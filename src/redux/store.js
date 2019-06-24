// TODO: Create the Redux store
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// Enable redux dev tool
const middleware = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Create redux store
const store = createStore(
  reducer,
  middleware,
);

export default store;
