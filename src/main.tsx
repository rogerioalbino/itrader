import * as React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "@app";
import { Store } from "@store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
