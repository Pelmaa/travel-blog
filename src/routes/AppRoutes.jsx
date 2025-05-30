import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/auth/Login";
import Countries from "../pages/countries";
import CountryDetail from "../pages/countries/[id]";
import NotFound from "../pages/NotFound";
import Home from "../pages";
import About from "../pages/about";
import Profile from "../pages/profile";
import { useAuth } from "../context/AuthContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/countries" Component={Countries} />
      <Route path="/login" Component={Login} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/countries/:id"
        element={
          <PrivateRoute>
            <CountryDetail />
          </PrivateRoute>
        }
      />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ afterLoginGoTo: location }} replace />
  );
};

export default AppRoutes;
