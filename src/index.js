import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Auth } from "./context";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Auth>
      <App />
    </Auth>
  </React.StrictMode>,
  document.getElementById("root")
);
