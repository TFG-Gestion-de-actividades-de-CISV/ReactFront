import React, { useState, useEffect } from "react";
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
import UserActivityView from "./Views/UserActivityView";

import "./index.css";
import AdminActivityView from "./Views/AdminActivityView";
import NinosInscriptionView from "./Views/NinosInscriptionView";
import MayoresInscriptionView from "./Views/MayoresInscriptionView";
import MonitorInscriptionView from "./Views/MonitorInscriptionView";
import LiderInscriptionView from "./Views/LiderInscriptionView";
import EditProfileView from "./Views/EditProfileView";
import InscriptionDetailView from "./Views/InscriptionDetailView";
import EditActivityView from "./Views/EditActivityView";

const ProtectedRouteAdmin = ({ children }) => {
  const isLogged = localStorage.getItem("isLogged") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isLogged || !isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

const ProtectedRouteUser = ({ children }) => {
  const isLogged = localStorage.getItem("isLogged") === "true";

  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return children;
};

const App = () => {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
    localStorage.setItem("isLogged", "true");
    localStorage.setItem("isAdmin", isAdmin ? "true" : "false");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("isAdmin");
  };

  useEffect(() => {
    const logged = localStorage.getItem("isLogged");
    const admin = localStorage.getItem("isAdmin");

    if (logged === "true") {
      setIsLoggedIn(true);
      setIsAdmin(admin === "true");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageView />} />
        <Route path="/login" element={<LoginView onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/change_password" element={<ChangePasswordView />} />

        <Route
          path="/admin/main"
          element={
            <ProtectedRouteAdmin>
              <AdminMainView onLogout={handleLogout} />
            </ProtectedRouteAdmin>
          }
        />

        <Route
          path="/admin/new_actividad"
          element={
            <ProtectedRouteAdmin>
              <CreateActividadView />
            </ProtectedRouteAdmin>
          }
        />

        <Route
          path="/admin/activity/:id"
          element={
            <ProtectedRouteAdmin>
              <AdminActivityView />
            </ProtectedRouteAdmin>
          }
        />

        <Route
          path="/user/main"
          element={
            <ProtectedRouteUser>
              <UserMainView onLogout={handleLogout} />
            </ProtectedRouteUser>
          }
        />

        <Route
          path="/user/activity/:id"
          element={
            <ProtectedRouteUser>
              <UserActivityView />
            </ProtectedRouteUser>
          }
        />

        <Route
          path="/user/activity/:id/ninos"
          element={
            <ProtectedRouteUser>
              <NinosInscriptionView />
            </ProtectedRouteUser>
          }
        />

        <Route
          path="/user/activity/:id/mayores"
          element={
            <ProtectedRouteUser>
              <MayoresInscriptionView />
            </ProtectedRouteUser>
          }
        />

        <Route
          path="/user/activity/:id/monitor"
          element={
            <ProtectedRouteUser>
              <MonitorInscriptionView />
            </ProtectedRouteUser>
          }
        />

        <Route
          path="/user/activity/:id/lider"
          element={
            <ProtectedRouteUser>
              <LiderInscriptionView />
            </ProtectedRouteUser>
          }
        />

        <Route
          path="/user/profile"
          element={
            <ProtectedRouteUser>
              <EditProfileView />
            </ProtectedRouteUser>
          }
        />

        <Route
          path="/admin/get_inscription"
          element={
            <ProtectedRouteAdmin>
              <InscriptionDetailView />
            </ProtectedRouteAdmin>
          }
        />

        <Route
          path="/admin/edit_activity/:activityId"
          element={
            <ProtectedRouteAdmin>
              <EditActivityView />
            </ProtectedRouteAdmin>
          }
        />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);
