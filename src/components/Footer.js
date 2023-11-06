import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header className="footer-title">Navigation</header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <nav>
        <header className="footer-title">Projects</header>
        <Link to="/projects">Projects</Link>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">About</header>
        <Link to="/about">About</Link>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
