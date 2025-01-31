import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <header>
        <div className="logo">41-MAKTAB</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">Biz haqimizda</a>
          <a href="/">Rahbarlar</a>
          <a href="/">Manzil</a>
          <a href="/">Bog'lanish</a>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
