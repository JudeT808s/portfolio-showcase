import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/activity">Activity</Link>
            <Link to="/projects">Previous Projects</Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
      <Link to="/"> <a href className="btn btn-ghost normal-case text-xl">Judes Portfolio</a></Link>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  
  );
};

export default Navbar;
