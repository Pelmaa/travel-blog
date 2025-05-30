import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { loggedIn, toggleAuth, userName } = useAuth();
  const [inputUserName, setInputUserName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!loggedIn) {
      toggleAuth(inputUserName);
      setInputUserName("");
      navigate("/");
    }
  };

  return (
    <div
      style={{
        justifyContent: "center",
        padding: "5rem",
        textAlign: "center",
      }}
    >
      <Navbar />
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to the Travel Blog Home
        </h1>

        {!loggedIn ? (
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={inputUserName}
              onChange={(event) => setInputUserName(event.target.value)}
              style={{ marginRight: "1rem", padding: "0.5rem" }}
            />
            <button onClick={handleLogin}>Login to Explore More</button>
          </div>
        ) : (
          <div>
            <h2 style={{ marginBottom: "2rem" }}>Welcome back, {userName}!</h2>
            <div>
              <h3>Featured Destinations</h3>
              <p>Discover our top travel recommendations</p>
            </div>
            <div>
              <h3>Recent Stories</h3>
              <p>Read our latest travel adventures</p>
            </div>
            <div>
              <h3>Travel Tips</h3>
              <p>Essential advice for your next trip</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
