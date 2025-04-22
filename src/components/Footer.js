import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="footer p-10 mt-5">
      <nav>
        <header className="footer-title">Navigation</header>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <header className="footer-title">Projects</header>
        <Link to="/projects">Projects</Link>
      </nav>
      <nav>
        <header className="footer-title">About</header>
        <Link to="/about">About</Link>
        <div className="flex gap-1">
        <p className="pt-1">Built with react!</p>
        <img
          src="/favicon.ico"
          alt="React Icon"
          className="w-6 h-6 inline-block align-middle"
        />
        </div>
      </nav>

      <div id="wcb" className="carbonbadge"></div>
    </footer>
  );
};

export default Footer;
