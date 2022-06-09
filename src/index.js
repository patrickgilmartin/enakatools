import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import './index.css';
import "./sass/main.scss"
import NavHeader from "./pages/NavHeader";
import Footer from './pages/Footer';
import Home from "./pages/Home";
import Market from './pages/Market';
import BootstrapTest from './pages/BootstrapTest';
import App from './pages/App';

import reportWebVitals from './reportWebVitals';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavHeader />
    <Routes>
      <Route index element={<Home />} />
      <Route path="market" element={<Market />} />
      <Route path="app" element={<App />} />
      <Route path="bootstrap" element={<BootstrapTest />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
