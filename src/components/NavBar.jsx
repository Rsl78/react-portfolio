import MenuIcon from "../ui/MenuIcon";
import MoonIcon from "../ui/MoonIcon";
import SunIcon from "../ui/SunIcon";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 bg-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MenuIcon />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="font-semibold text-lg  ">contact</a>
            </li>

            <li>
              <a className="font-semibold text-lg  ">skills</a>
            </li>

            <li>
              <a className="font-semibold text-lg  ">about me</a>
            </li>
            <li>
              <a className="font-semibold text-lg  ">projects</a>
            </li>
            <li>
              <a className="font-semibold text-lg  ">home</a>
            </li>
          </ul>
        </div>
        <h1 className="text-5xl font-bold">rsl.</h1>
      </div>

      <div className="navbar-end lg:hidden">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />
          <SunIcon />
          <MoonIcon />
        </label>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <li>
            <a className="font-semibold text-lg  ">contact</a>
          </li>

          <li>
            <a className="font-semibold text-lg  hover:text-gray-900">skills</a>
          </li>
          <li>
            <a className="font-semibold text-lg  ">about me</a>
          </li>
          <li>
            <a className="font-semibold text-lg  " id="projects">
              projects
            </a>
          </li>
          <li>
            <a className="font-semibold text-lg  " href="#home">
              home
            </a>
          </li>
        </ul>
        <label className="pl-10 swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <SunIcon />

          {/* moon icon */}
          <MoonIcon />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
