import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const meta = {
  title: "Some Meta Title",
  description: "I am a description, and I can create multiple tags",
  canonical: "http://example.com/path/to/page",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags",
    },
  },
};
root.render(
  <React.StrictMode {...meta}>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
