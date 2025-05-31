import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="nav-container">
        <div className="navbar">
          <img src="/portfolio-image.png" alt="Image is loading" />
          <button onClick={toggleMenu}>
            {menuOpen ? "×" : "≡"}
          </button>
        </div>
        <div className={`navbar-section ${menuOpen ? "open" : ""}`}>
          <span>Home</span>
          <span>Blogs</span>
          <span>Contact</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


