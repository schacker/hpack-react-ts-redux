import "./styles/common.styl";

import * as React from "react";
import { render } from "react-dom";
import store from "./store/module";
import { Provider } from "react-redux";

import App from "pages/App/app";
import { routes } from "./routes/index";

render(
  <Provider store={store}>
    <App router={routes} />
  </Provider>,
  document.getElementById("app"),
);
