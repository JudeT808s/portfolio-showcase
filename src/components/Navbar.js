import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {

  const baseNavbarClass = 'navbar';
  const baseLinkClass = 'link-no-underline';
  const baseButtonClass = 'btn btn-ghost normal-case text-xl';
  const baseDropdownClass = 'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52';
  const baseMenuClass = 'menu menu-horizontal px-1';
  const baseDropdownLabelClass = 'btn btn-ghost btn-circle';
  const baseDropdownIconClass = 'h-5 w-5';

 

  return (
    <div className={(baseNavbarClass )}>
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
  </svg>
</label>
          <ul tabIndex={0} className={(baseDropdownClass)}>
            <li><Link to="/" className={(baseLinkClass)}>Home</Link></li>
            <li><Link to="/about" className={(baseLinkClass)}>About</Link></li>
            <li><Link to="/activity" className={(baseLinkClass)}>Activity</Link></li>
            <li><Link to="/projects" className={(baseLinkClass)}>Previous Projects</Link></li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className={(baseMenuClass)}>
            <li><Link to="/" className={(baseLinkClass)}>Home</Link></li>
            <li><Link to="/about" className={(baseLinkClass)}>About</Link></li>
            <li><Link to="/activity" className={(baseLinkClass)}>Activity</Link></li>
            {/* <li><Link to="/projects" className={(baseLinkClass)}>Previous Projects</Link></li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {/* <Link to="/" className={(baseButtonClass)}>Judes Portfolio</Link> */}
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;