import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import crossBrowserListener from "../../utils/functions/reduxpersist-listener";
///import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

//import reducers
import darkModeReducer from "../reducers/darkModeReducer";
import counterReducer from "../reducers/counterReducer";

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
  darkMode: darkModeReducer,
  count: counterReducer,
  //ADD OTHER REDUCERS HERE
});

// BINDING MIDDLEWARES
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

//client side, create a store which will persist using local storage
const { persistStore, persistReducer } = require("redux-persist");
const storage = require("redux-persist/lib/storage").default;

const persistConfig = {
  key: "root",
  whitelist: ["darkMode", "count"], // add reducers to perisist ex:"user"
  storage, // if needed, use a safer storage
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

export const store = createStore(
  persistedReducer,
  bindMiddleware([thunkMiddleware])
); // Creating the store again

window.addEventListener("storage", crossBrowserListener(store, persistConfig));

export const persistor = persistStore(store); // export persistor
