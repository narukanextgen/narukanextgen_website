import { Settings } from "lucide-react";
import { NavLink } from "react-router";

function Navbar() {
  const activeClassName = "selected relative";

  const activeStyleCallback = ({ isActive }) =>
    isActive ? activeClassName : undefined;

  return (
    <header className="font-montserrat hidden md:flex md:px-10 py-10 sticky top-0 z-20 bg-white/75 text-base lg:text-lg font-semibold lg:px-20 items-center w-full">
      <nav className="lg:ml-auto flex w-full justify-between items-center">
        <span className="md:space-x-5 lg:space-x-10 flex items-center">
          <NavLink to={"/careers"} className={activeStyleCallback}>
            About
          </NavLink>
          <NavLink to={"/features"} className={activeStyleCallback}>
            Features
          </NavLink>
          <NavLink to={"/develop"} className={activeStyleCallback}>
            Develop
          </NavLink>
          <NavLink to={"/community"} className={activeStyleCallback}>
            Community
          </NavLink>
          <NavLink to={"/blog"} className={activeStyleCallback}>
            Blog
          </NavLink>
        </span>
        <span className="text-base flex items-center">
          <span className="md:space-x-5 lg:space-x-10">
            <NavLink to={"/login"} className="uppercase">
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="text-indigo bg-purple-200 py-2 px-5 rounded-full uppercase"
            >
              Register
            </NavLink>
          </span>
          <hr className="h-8 w-[2px] bg-black md:mx-2 lg:mx-3" />
          <Settings className="w-8 h-8" />
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
