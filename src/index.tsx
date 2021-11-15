import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactQueryProviders from "hooks/useReactQuery";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryProviders>
      <App />
    </ReactQueryProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
