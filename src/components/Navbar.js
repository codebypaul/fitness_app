import { Button } from "./Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          WorkFit <i className="fab fa-typo3" />
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
          </ul>
          {props.isAuth ? (
            <ul className="navbar-nav ml-auto">
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
            <ul className="navbar-nav ml-auto">
              {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
              <li className="nav-item">
                <Link className="nav-links" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          )}
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div> */
}

{
  /* <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            WorkFit <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-linkss" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/workouts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Workouts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nutrition"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Nutrition
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </div> */
}
