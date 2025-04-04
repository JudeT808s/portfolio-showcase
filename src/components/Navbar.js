import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../components/ThemeContext';

const Navbar = () => {
  const { isDarkMode } = useTheme();
  const navbarClass = isDarkMode ? 'navbar bg-neutral text-neutral-content' : 'navbar bg-base-100';
  const linkClass = isDarkMode ? 'link-no-underline text-white' : 'link-no-underline text-black';
  const buttonClass = isDarkMode ? 'btn btn-ghost normal-case text-xl text-white' : 'btn btn-ghost normal-case text-xl text-black';
  const dropdownClass = isDarkMode ? 'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52' : 'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52';
  const menuClass = isDarkMode ? 'menu menu-horizontal px-1 text-white' : 'menu menu-horizontal px-1 text-black';
  const dropdownLabelClass = isDarkMode ? 'btn btn-ghost btn-circle text-white' : 'btn btn-ghost btn-circle text-black';
  const dropdownIconClass = isDarkMode ? 'h-5 w-5 text-white' : 'h-5 w-5 text-black';
  const dropdownLabel = isDarkMode ? 'text-white' : 'text-black';
  const dropdownMenuClass = isDarkMode ? 'text-white' : 'text-black';
  const dropdownMenuItemClass = isDarkMode ? 'link-no-underline text-white' : 'link-no-underline text-black';

  return (
    <div className={navbarClass}>
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className={dropdownLabelClass}>
            <svg xmlns="http://www.w3.org/2000/svg" className={dropdownIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className={dropdownClass}>
            <li><Link to="/" className={dropdownMenuItemClass}>Home</Link></li>
            <li><Link to="/about" className={dropdownMenuItemClass}>About</Link></li>
            <li><Link to="/activity" className={dropdownMenuItemClass}>Activity</Link></li>
            <li><Link to="/projects" className={dropdownMenuItemClass}>Previous Projects</Link></li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className={menuClass}>
            <li><Link to="/" className={linkClass}>Home</Link></li>
            <li><Link to="/about" className={linkClass}>About</Link></li>
            <li><Link to="/activity" className={linkClass}>Activity</Link></li>
            <li><Link to="/projects" className={linkClass}>Previous Projects</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className={buttonClass}>Judes Portfolio</Link>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;