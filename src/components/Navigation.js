import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavCSS from './Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileScreen, setMobileScreen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setMobileScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkScreenWidth);
    checkScreenWidth();

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <nav className={NavCSS.nav}>
      <h2>
        <NavLink className={NavCSS.logo} to="/">Math-Magicians</NavLink>
      </h2>
      {isMobileScreen ? (
        <>
          <FaBars className={NavCSS.bars} onClick={handleMenuToggle} />
          {isMenuOpen && (
            <>
              <ul className={NavCSS.ul}>
                <FaTimes className={NavCSS.close} onClick={handleMenuToggle} />
                <li>
                  <NavLink className={NavCSS.navlink} onClick={handleMenuToggle} to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className={NavCSS.navlink} onClick={handleMenuToggle} to="/calculator">Calculate</NavLink>
                </li>
                <li>
                  <NavLink className={NavCSS.navlink} onClick={handleMenuToggle} to="/quote">Quote</NavLink>
                </li>
              </ul>
            </>
          )}
        </>
      ) : (
        // Desktop navigation bar
        <ul className={NavCSS.ul}>
          <li>
            <NavLink className={NavCSS.navlink} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={NavCSS.navlink} to="/calculator">Calculate</NavLink>
          </li>
          <li>
            <NavLink className={NavCSS.navlink} to="/quote">Quote</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
