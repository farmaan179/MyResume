import { useState } from "react";

const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2 className="logo">DevPortfolio</h2>

      {/* Burger Icon */}
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={`links ${open ? "show" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>

      <button onClick={() => setDark(!dark)} className="toggle">
        {dark ? "Light ☀️" : "Dark 🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
