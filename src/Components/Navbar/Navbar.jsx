import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    });

    const handleOutsideClick = (event) => {
      const isClickInsideMenu =
        event.target.closest(".menu-icon") || event.target.closest("nav ul");

      if (!isClickInsideMenu) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul id="mobile-menu" className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={toggleMenu}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={toggleMenu}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={toggleMenu}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
            onClick={toggleMenu}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="menu icon"
        className="menu-icon"
        onClick={toggleMenu}
        id="mobile-menu"
      />
    </nav>
  );
};

export default Navbar;
