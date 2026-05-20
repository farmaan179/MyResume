const Navbar = ({ dark, setDark }) => {
  return (
    <nav className="nav">

      <h2 className="logo">DevPortfolio</h2>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={() => setDark(!dark)} className="toggle">
        {dark ? "Light ☀️" : "Dark 🌙"}
      </button>

    </nav>
  );
};

export default Navbar;