import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseProvider } from "./components/Firebase";
import { AuthenticationProvider } from "./components/Authentication";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <FirebaseProvider>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </FirebaseProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
