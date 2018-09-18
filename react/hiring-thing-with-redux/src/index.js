/**
 * Package imports
 */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

/**
 * Script imports
 */
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

/**
 * Render React app in browser on '#root' element
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/**
 * Initialize service worker
 */
registerServiceWorker();
