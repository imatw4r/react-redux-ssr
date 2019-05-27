// THIS IS THE ENTRYPOINT FOR ** CLIENT ** SIDE APP
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // handle async action creators
import { Provider } from "react-redux"; // ties store to components
import { renderRoutes } from "react-router-config";
import reducers from "./reducers";
// You want to render the real app into the same tag (div in this case)
// that you've rendered your app in before

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api"
});
const clientStore = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={clientStore}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
