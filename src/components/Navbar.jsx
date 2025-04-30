import { Menu, Settings, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeClassName = "selected relative";

  /* UseEffect for making the background unscrollable when the mobile navbar is opens */
  useEffect(() => {
    const container = document.getElementById("scrollable-container");
    if (isOpen) {
      container.style.overflow = "hidden";
    } else {
      container.style.overflow = "scroll";
    }

    return () => {
      container.style.overflow = "scroll";
    };
  }, [isOpen]);

  const activeStyleCallback = ({ isActive }) =>
    isActive ? activeClassName : undefined;

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`${
          isOpen ? "h-full" : ""
        } font-montserrat flex md:px-10 py-10 sticky top-0 z-20 bg-white/75 text-base lg:text-lg font-semibold lg:px-20 items-center w-full`}
      >
        {/* Desktop Navigation Bar */}
        <nav className="lg:ml-auto hidden md:flex w-full justify-between items-center">
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

        {/* Mobile Header */}

        {!isOpen && (
          <div className="flex md:hidden w-full justify-between items-center px-5">
            <span>
              <h1>Naruka</h1>
            </span>
            <span onClick={openMenu}>
              <Menu className="w-8 h-8" />
            </span>
          </div>
        )}

        {/* Mobile Nav */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col px-6 py-10 animate-slide-in">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Naruka</h1>
              <X className="w-8 h-8 cursor-pointer" onClick={closeMenu} />
            </div>
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <NavLink
                to="/careers"
                className={activeStyleCallback}
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/features"
                className={activeStyleCallback}
                onClick={closeMenu}
              >
                Features
              </NavLink>
              <NavLink
                to="/develop"
                className={activeStyleCallback}
                onClick={closeMenu}
              >
                Develop
              </NavLink>
              <NavLink
                to="/community"
                className={activeStyleCallback}
                onClick={closeMenu}
              >
                Community
              </NavLink>
              <NavLink
                to="/blog"
                className={activeStyleCallback}
                onClick={closeMenu}
              >
                Blog
              </NavLink>
              <NavLink to="/login" onClick={closeMenu} className="uppercase">
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={closeMenu}
                className="bg-purple-200 text-indigo uppercase py-2 px-6 rounded-full w-fit"
              >
                Register
              </NavLink>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
