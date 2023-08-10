import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginSignup.css";

function SignupPage({ onSignupComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (email !== "" && password !== "") {
      navigate("/home");
      onSignupComplete();
    } else {
      alert("Email/password cannot be empty");
    }
  };

  const handleLoginClick = () => {
    navigate("/");
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
          <h1 className="heading">Register</h1>
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
            <button type="submit">SignUp</button>
          </form>
          <p>
            Already have an account?{" "}
            <button onClick={handleLoginClick}>Login</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
