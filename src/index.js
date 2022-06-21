import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import './index.css';
import "./sass/main.scss";

import NavHeader from "./pages/shared/NavHeader";
import Footer from './pages/shared/Footer';
import App from './App';

import Loader from './components/common/Loader';

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
  <Router>
    <NavHeader />
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
