import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { App as AntProvider } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AntProvider
      notification={{
        stack: {
          threshold: 2,
        },
      }}
    >
      <App />
    </AntProvider>
  </React.StrictMode>
);
