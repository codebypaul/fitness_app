import { Button } from "./Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';


function Nav() {
  const [click, setClick ] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  };

  window.addEventListener('resize', showButton)

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            WorkFit <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                    Profile
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/workouts' className='nav-links' onClick={closeMobileMenu}>
                    Workouts
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/nutrition' className='nav-links' onClick={closeMobileMenu}>
                    Nutrition
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                    Sign Up
                </Link>
            </li>
          </ul>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </div>
  );
}
export default Nav;
