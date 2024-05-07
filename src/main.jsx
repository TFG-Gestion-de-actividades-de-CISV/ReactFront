import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPageView from "./Views/MainPageView";
import LoginView from "./Views/LoginView";
import SignupView from "./Views/SignupView";
import AdminMainView from "./Views/AdminMainView";
import ChangePasswordView from "./Views/ChangePasswordView";
import UserMainView from "./Views/UserMainView";
import CreateActividadView from "./Views/CreateActividadView";

import "./index.css";

const App = () => {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageView />} />
        <Route path="/login" element={<LoginView onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/change_password" element={<ChangePasswordView />} />

        {/*        <Route
          path="/admin/main"
          element={
            isLogged && isAdmin ? (
              <AdminMainView onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/admin/new_actividad"
          element={
            isLogged && isAdmin ? <CreateActividadView /> : <Navigate to="/" />
          }
        /> */}

        <Route path="/admin/new_actividad" element={<CreateActividadView />} />
        <Route path="/admin/main" element={<AdminMainView />} />

        <Route
          path="/user/main"
          element={
            isLogged && !isAdmin ? (
              <UserMainView onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);

//ReactDOM.render(<App />, document.getElementById("root"));
