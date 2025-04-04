import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';


const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer p-10 mt-5 ${isDarkMode ? 'dark' : 'light'}`}>
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
