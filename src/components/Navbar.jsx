import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    navigate("/login");
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsLoginDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav_logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="menu">
        <NavLink to="/movies" className="nav__item">
          Movies
        </NavLink>
        <div
          className="nav__item dropdown"
          onMouseEnter={() => setIsCategoryDropdownOpen(true)}
          onMouseLeave={() => setIsCategoryDropdownOpen(false)}
        >
          <span>Categories</span>
          <div
            className={`dropdown-content ${
              isCategoryDropdownOpen ? "open" : ""
            }`}
          >
            <span onClick={() => handleCategoryClick("action")}>Action</span>
            <span onClick={() => handleCategoryClick("comedy")}>Comedy</span>
            <span onClick={() => handleCategoryClick("horror")}>Horror</span>
          </div>
        </div>
      </div>
      <div className="avatar" ref={dropdownRef}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          onMouseEnter={() => setIsLoginDropdownOpen(true)}
          onMouseLeave={() => setIsLoginDropdownOpen(false)}
        />
        {isLoginDropdownOpen && (
          <div className="dropdown-content login">
            <span onClick={handleLogout}>Logout</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
