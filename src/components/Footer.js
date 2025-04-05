import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <footer className={`footer p-10 mt-5 `}>
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
      </nav>
    </footer>
  );
};

export default Footer;
