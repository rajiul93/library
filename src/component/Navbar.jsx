import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Theme from "./Theme";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const sinOut = () => {
    logOut();
    navigate("/");
  };
  const navLinkClass = ({ isActive }) =>
    [
      "inline-flex items-center px-3 py-2 text-sm font-medium",
      "bg-transparent rounded-none",
      "hover:text-[#ffbe0e] hover:bg-transparent",
      "transition-colors",
      isActive
        ? "text-[#ffbe0e] border-b-2 border-[#ffbe0e]"
        : "text-base-content/80 border-b-2 border-transparent",
    ].join(" ");

  const navItem = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-book" className={navLinkClass}>
          All Book
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-book" className={navLinkClass}>
          Add Book
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-200">
      <div className="navbar max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="text-2xl flex gap-3 font-bold items-center">
            <img src="/logoo.png" className="w-28 rounded" alt="Library logo" />
            
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2 px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <Theme />

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" ">
              <div className="avatar ms-5">
                <div className="w-12 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="User avatar" />
                  ) : (
                    <div className="w-12 h-12 grid place-items-center bg-base-200 text-base-content">
                      <FaUserCircle className="w-9 h-9 opacity-70" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52"
            >
              <h1 className="text-center font-bold mt-5 underline text-warning text-xl">
                {user?.displayName}
              </h1>
              <h1 className="text-center font-bold mb-5 underline text-warning text-sm">
                {user?.email}
              </h1>
              {
                user? "": <>
                
                <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/registration">Registration</NavLink>
              </li>
                </>
              }
              <li>
                <NavLink to="/my-book">My-book</NavLink>
              </li>
              <li>
                <NavLink to="/borrowedBookList">Borrowed Book List</NavLink>
              </li>
             
              
             {user &&  <li>
                <button onClick={sinOut} className="bg-error text-center mt-14">
                  Log Out
                </button>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
