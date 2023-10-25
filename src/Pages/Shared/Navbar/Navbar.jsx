import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF3811]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF3811]" : ""
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto my-5 px-5 md:px-8 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" className="w-20" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex  gap-4 font-medium">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn  text-[#FF3811] outline outline-1 outline-[#FF3811] hover:text-white hover:bg-[#FF3811] hover:outline-[#FF3811] transition-all duration-300 ">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
