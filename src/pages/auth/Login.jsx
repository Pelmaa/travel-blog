import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const { loggedIn, toggleAuth } = useAuth();
  const [inputUserName, setInputUserName] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

  const handleLogin = () => {
    if (!inputUserName) {
      alert("To view need Username");
      return;
    }
    toggleAuth(inputUserName);
    setInputUserName("");
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
          <>
            <input
              type="text"
              value={inputUserName}
              onChange={(event) => setInputUserName(event.target.value)}
              placeholder="UserName"
            />
            <button onClick={handleLogin}>Click to Login</button>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
