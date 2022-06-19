import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import './index.css';
import "./sass/main.scss";
import NavHeader from "./pages/shared/NavHeader";
import Footer from './pages/shared/Footer';
import Home from "./pages/shared/Home";
import Market from './pages/market/Market';
import BootstrapTest from './pages/BootstrapTest';
import App from './pages/app/App';
import Register from './components/Auth/Register';
import UserPortal from './pages/userPortal/UserPortal';

import PrivateRoute from './components/Auth/PrivateRoute';
import reportWebVitals from './reportWebVitals';
import { Toast, TOAST_THEME, TOAST_PLACEMENT, TOAST_TIMERS } from "bootstrap-toaster";

Amplify.configure(awsExports);
Amplify.configure({
  Auth: {
    userPoolId: "us-west-1_EUNmjZpAg",
    region: "us-west-1",
    userPoolWebClientId: "3dbs15qe2vvtr5uei3tu8v6pre"
  }
});

let toastOptions = {
  maxToasts: 1,
  placement: TOAST_PLACEMENT.BOTTOM_RIGHT,
  theme: TOAST_THEME.DARK,
  enableTimers: TOAST_TIMERS.DISABLED,
  enableQueue: true
}
Toast.configure(toastOptions);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavHeader />
    <Routes>
      <Route index component={Home} />
      <Route component={Market} path="/market" />
      <Route component={App} path="/app" />
      <Route component={BootstrapTest} path="/bootstrap" />
      <Route component={Register} path="/register" />
      <Route component={UserPortal} path="/signin" />
      <PrivateRoute path="/admin">
      </PrivateRoute>
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
