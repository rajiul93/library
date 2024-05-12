import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Theme from "./Theme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const sinOut = () => {
    logOut();
    navigate("/");
  };
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-book">All Book</NavLink>
      </li>
      <li>
        <NavLink to="/add-book">Add Book</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-warning">
      <div className="navbar max-w-6xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="  text-2xl text-base-100 font-bold">Book Travel</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <Theme />

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" ">
              <div className="avatar ms-5">
                <div className="w-12 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? `${user.photoURL}`
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
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
                <NavLink to="/category">Category</NavLink>
              </li>
              
              <li>
                <button onClick={sinOut} className="bg-error text-center mt-14">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
