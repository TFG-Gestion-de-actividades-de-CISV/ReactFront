import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPageView from "./Views/MainPageView";
import LoginView from "./Views/LoginView";
import SignupView from "./Views/SignupView";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPageView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
