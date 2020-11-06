import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

console.log("public url: ", process.env.PUBLIC_URL);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
