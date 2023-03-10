import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
// const { DOMAIN_AUTH0, CLIENTID_AUT0 } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider domain={DOMAIN_AUTH0} clientId={CLIENTID_AUT0} redirectUri={window.location.origin}> */}
    <Auth0Provider
      domain="dev-n6m8240cr0tcfcw3.us.auth0.com"
      clientId="vsjz3RInwj1sjt1bj6Sl2ue2ckDDbgyK"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
