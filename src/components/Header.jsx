import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <div className="hamburger" onclick="toggleMenu()">
        &#9776;
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
