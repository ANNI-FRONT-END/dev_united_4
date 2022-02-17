import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "../firebase";
import App from "./componentes/App";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
