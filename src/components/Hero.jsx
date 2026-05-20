import { useEffect, useState } from "react";

const Hero = () => {
  const text = "MERN Full Stack Developer";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">

      <img
        src="/images/myPhoto.jpeg"
        className="profile"
        alt="profile"
      />

      <h1 className="hero-title">
        Hi, I'm <span>Farmaan 👋</span>
      </h1>

      <h2 className="hero-subtitle">
        {displayedText}
        <span className="cursor">|</span>
      </h2>

      <p className="hero-text">
        I build scalable, fast and responsive web applications using modern MERN stack technologies.
      </p>

      <a href="/resume/resume.pdf" download className="btn">
        ⬇ Download Resume
      </a>



    </section>
  );
};

export default Hero;