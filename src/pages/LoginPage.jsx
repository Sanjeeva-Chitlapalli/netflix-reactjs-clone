import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "../styles/LoginSignup.css";

function LoginPage({ onLoginComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (email !== "" && password !== "") {
      navigate("/home");
      onLoginComplete();
    } else {
      alert("Email/password cannot be empty");
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="nav_logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="container">
        <div className="box">
          <h1 className="heading">Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account?{" "}
            <button onClick={handleSignupClick}>Sign Up</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
