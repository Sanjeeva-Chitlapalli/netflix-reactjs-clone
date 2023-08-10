import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import PlayerPage from "./pages/PlayerPage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useState } from "react";

function App() {
  const [navbarPresent, setNavbarPresent] = useState(false);

  const handleLoginComplete = () => {
    setNavbarPresent(true);
  };

  return (
    <Router>
      <div className="App">
        {navbarPresent && <Navbar />}
        <Routes>
          <Route path="/" element={<LoginPage onLoginComplete={handleLoginComplete}/>} />
          <Route path="/signup" element={<SignupPage onSignupComplete={handleLoginComplete}/>} />
          {navbarPresent && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/player/:title" element={<PlayerPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
