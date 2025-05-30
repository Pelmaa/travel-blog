import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { loggedIn, toggleAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

  const handleLogin = () => {
    toggleAuth();
    navigate(afterLoginGoTo, { replace: true });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Login Page</h2>
        {loggedIn ? (
          <p>You are already logged in.</p>
        ) : (
          <button onClick={handleLogin}>Click to Login</button>
        )}
      </div>
    </>
  );
};

export default Login;
