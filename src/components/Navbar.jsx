import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const { loggedIn, toggleAuth, userName } = useAuth();
  const [inputUsername, setInputUsername] = useState("");

  // const handleAuth = () => {
  //   if (loggedIn) {
  //     toggleAuth();
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }

  // };
  const handleAuth = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      toggleAuth(); // for logout
      navigate("/");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "gray",
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Link
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          textDecoration: "none",
        }}
        to={"/"}
      >
        Home
      </Link>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/about">About</Link>
        <Link to="/countries">Countries</Link>
        {loggedIn && <Link to="/profile">Profile</Link>}
        {!loggedIn ? (
          <>
            <button onClick={handleAuth}>Login</button>
          </>
        ) : (
          <>
            Hi, {userName}
            <button onClick={handleAuth}>Logout</button>
          </>
        )}

        {/* <button onClick={handleAuth}>{loggedIn ? "Logout" : "Login"}</button> */}
      </div>
    </div>
  );
};

export default Navbar;
