import React, { useEffect } from 'react';
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const nav = document.querySelector(".nav"),
      searchIcon = document.querySelector("#searchIcon"),
      navOpenBtn = document.querySelector(".navOpenBtn"),
      navCloseBtn = document.querySelector(".navCloseBtn");

    const handleSearchClick = () => {
      nav.classList.toggle("openSearch");
      nav.classList.remove("openNav");
      if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
      }
      searchIcon.classList.replace("uil-times", "uil-search");
    };

    const handleNavOpenClick = () => {
      nav.classList.add("openNav");
      nav.classList.remove("openSearch");
      searchIcon.classList.replace("uil-times", "uil-search");
    };

    const handleNavCloseClick = () => {
      nav.classList.remove("openNav");
    };

    searchIcon.addEventListener("click", handleSearchClick);
    navOpenBtn.addEventListener("click", handleNavOpenClick);
    navCloseBtn.addEventListener("click", handleNavCloseClick);

    return () => {
      // Clean up event listeners when component unmounts
      searchIcon.removeEventListener("click", handleSearchClick);
      navOpenBtn.removeEventListener("click", handleNavOpenClick);
      navCloseBtn.removeEventListener("click", handleNavCloseClick);
    };
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <nav className="nav">
      <i className="uil uil-bars navOpenBtn"></i>
      <a href="#" className="logo">Trave<span>LIT</span></a>

      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn"></i>
        <li><a href="#">Home</a></li>
        <li><a href="#background-wrapper">Services</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#contact-wrapper">Contact Us</a></li>
      </ul>

      <i className="uil uil-search search-icon" id="searchIcon"></i>
      <div className="search-box">
        <i className="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
      </div>

    </nav>
  );
}

export default Navbar;
