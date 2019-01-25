import "./styles/common.styl";

import * as React from "react";
import { render } from "react-dom";
import makeStore from "./store/module";
import initStore from "./store/initStore";
import {setStore} from "./store/_store";
import { Provider } from "react-redux";

import App from "pages/App/app";
import { routes } from "./routes/index";

const store = makeStore(initStore);
console.log(store.dispatch);
store.subscribe(() => {
  console.log(store.getState());
});
setStore(store);

render(
  <Provider store={store}>
    <App router={routes} />
  </Provider>,
  document.getElementById("app"),
);
