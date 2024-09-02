import { userLoggedOut } from "@/redux/Feature/authSlice";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";

const Navbar = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    dispatch(userLoggedOut());
  };
  return (
    <nav className="w-full h-[100px] font-montserrat flex flex-col  justify-center">
      <div className="navbar  max-w-[1280px]  mx-auto px-8">
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
              className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#000000]"
            >
              <NavLink to="/">
                <li className="hover:scale-105 hover:bg-[#F26B4E] transition duration-700 ease-in  ">
                  HOME
                </li>
              </NavLink>
              <NavLink to="dashboard/profile">
                <li className="hover:scale-105 hover:bg-[#F26B4E] transition duration-700 ease-in  ">
                  DASHBOARD
                </li>
              </NavLink>
              <NavLink to="/products">
                <li className="hover:scale-105 transition duration-700 ease-in  ">
                  PRODUCTS
                </li>
              </NavLink>

              <NavLink to="/myFoods">
                <li className="hover:scale-105 transition duration-700 ease-in  ">
                  ABOUT
                </li>
              </NavLink>
            </ul>
          </div>
          <img src={logo} alt="" className="w-[200px] " />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4  text-[20px] text-[#000000]">
            <NavLink to="/">
              <li className="font-montserrat text-[16px] ">HOME</li>
            </NavLink>
            <NavLink to="dashboard/profile">
              <li className="font-montserrat text-[16px] ">DASHBOARD</li>
            </NavLink>
            <NavLink to="/products">
              <li className="font-montserrat text-[16px] ">PRODUCT</li>
            </NavLink>

            <NavLink to="/about">
              <li className=" font-montserrat text-[16px]">ABOUT</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user ? (
            <button
              className="bg-customBlue font-montserrat font-bold text-white px-8 py-2 rounded-full"
              onClick={handleLogout}
            >
              Sign out
            </button>
          ) : (
            <Link to="/signIn">
              <button className="bg-customBlue font-montserrat font-bold text-white px-8 py-2 rounded-full">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
