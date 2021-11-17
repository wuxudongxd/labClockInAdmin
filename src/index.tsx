import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "src/utils/AppProvider";
import "antd/dist/antd.css";
import { config as AmapReactConfig } from "@amap/amap-react";

AmapReactConfig.key = "ae67de08c990eadfd6d1a366f6ff4221";
(AmapReactConfig.plugins as any) = [
  "AMap.ToolBar",
  "AMap.MoveAnimation",
  // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
];

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
