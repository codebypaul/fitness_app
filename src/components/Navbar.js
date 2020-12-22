import { Button } from "./Button";
import { LogInButton } from "./LogInButton";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          GeneralFit <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" exact to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/workouts" onClick={closeMobileMenu}>
                Workouts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/nutrition" onClick={closeMobileMenu}>
                Nutrition
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links-mobile" to="/sign-up" onClick={closeMobileMenu}>
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links-mobile" to="/login" onClick={closeMobileMenu}>
                Log In
              </NavLink>
            </li>
          </ul>
          {props.isAuth ? (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link className="nav-links" to="/profile" onClick={closeMobileMenu}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <span
                  onClick={props.handleLogout}
                  className="nav-links logout-link"
                  onClick={closeMobileMenu}
                >
                  Logout
                </span>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto buttons">
              {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
              
            </ul>
          )}
      </div>
    </nav>
  );
};

export default Navbar;



