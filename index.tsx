import React from "react";
import { render } from "react-dom";
import App from "../pages/_app";
import IndexPage from "../pages/index";

const rootElement = document.getElementById("root");
render(
  <>
    <App />
    <IndexPage />
  </>,
  rootElement
);