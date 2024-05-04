import Bars3 from "../../assets/svg/Bars3";
import Cart from "../../assets/svg/Cart";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import HomeNav from "../../assets/svg/HomeNav";
import Shop from "../../assets/svg/Shop";
import Login from "../../assets/svg/Login";
import signup from "../../assets/signup.png";
import User from "../../assets/svg/User";
import { useState } from "react";
import useGetUser from "../../hooks/useGetUser";
import { NavLink } from "react-router-dom";

export default function HomeNavbars() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const user = useGetUser();
  return (
    <>
      <nav className="flex p-5 justify-between w-full md:bg-main-1 md:p-3 xl:p-7 relative z-10">
        <div
          className="cursor-pointer sm:hidden"
          onClick={() => setNavbarToggle(!navbarToggle)}
        >
          <Bars3 className={"w-10 h-10"} />
        </div>
        <div className="sm:flex gap-x-3 items-center hidden">
          <div
            className="cursor-pointer"
            onClick={() => setNavbarToggle(!navbarToggle)}
          >
            <Bars3 className={"w-10 h-10 lg:hidden"} />
          </div>
          <img src={logo} alt="logo" className="w-8 h-8 " />
          <h1 className="text-main-1 font-bold text-xl md:text-white xl:text-3xl font-poetsenOne">
            Toko
            <span className="text-main-2 md:text-white">Sedia</span>
          </h1>
        </div>
        <div className="flex gap-x-4 items-center ">
          <NavLink
            to={"/"}
            className={
              "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/toko"}
            className={
              "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
            }
          >
            Toko
          </NavLink>
          {user.isLoggedIn ? (
            <>
              <NavLink
                to={"/profile"}
                className={
                  "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
                }
              >
                Profile
              </NavLink>
              {user.role === "admin" && (
                <NavLink
                  to={"/admin"}
                  className={
                    "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
                  }
                >
                  Admin
                </NavLink>
              )}
            </>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className={
                  "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
                }
              >
                Login
              </NavLink>
              <NavLink
                to={"/signup"}
                className={
                  "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
                }
              >
                Signup
              </NavLink>
            </>
          )}

          <NavLink to="/cart">
            <Cart className={"w-10 h-10"} />
          </NavLink>
          {user.isLoggedIn && user.photo ? (
            <NavLink to={"/profile"} className={"w-10 h-full flex"}>
              <img
                src={user.photo}
                alt="profile"
                className="w-10 rounded-full self-stretch"
              />
            </NavLink>
          ) : (
            <NavLink to={"/profile"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </NavLink>
          )}
        </div>
      </nav>

      {/* Mobile navbar */}
      <motion.nav
        animate={{ x: navbarToggle ? 0 : "-100vh" }}
        className="fixed bg-black bottom-0 left-0 top-0 w-1/2 z-40 text-white p-3 -translate-x-[100vh] md:hidden"
      >
        <p className="font-bold text-xl text-center mb-5">Navigation</p>
        <ul className="flex flex-col justify-evenly gap-y-4">
          <div className="flex gap-x-2 items-center">
            <HomeNav />
            <li className="font-semibold text-xl hover:text-white">
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </div>

          <div className="flex gap-x-2 items-center">
            <Shop />
            <li className="font-semibold text-xl hover:text-white">
              <NavLink to={"/toko"}>Toko</NavLink>
            </li>
          </div>
          {user.isLoggedIn ? (
            <>
              <div className="flex gap-x-2 items-center">
                <User />
                <li className="font-semibold text-xl hover:text-white">
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
              </div>
              {user.role === "admin" && (
                <div className="flex gap-x-2 items-center">
                  <User />
                  <li className="font-semibold text-xl hover:text-white">
                    <NavLink to={"/admin"}>Admin</NavLink>
                  </li>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex gap-x-2 items-center">
                <Login />
                <li className="font-semibold text-xl hover:text-white">
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
              </div>
              <div className="flex gap-x-2 items-center">
                <img src={signup} alt="signup" className="w-6 h-6" />
                <li className="font-semibold text-xl hover:text-white">
                  <NavLink to={"/signup"}>Signup</NavLink>
                </li>
              </div>
            </>
          )}
        </ul>
        <button
          onClick={() => setNavbarToggle(!navbarToggle)}
          className="mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg"
        >
          Close
        </button>
      </motion.nav>
      <motion.nav
        animate={{ marginTop: navbarToggle ? "0px" : "-80px" }}
        className={`w-full p-5 bg-main-2 relative z-0 -mt-20 hidden md:block lg:hidden`}
      >
        <ul className=" flex justify-evenly">
          <li className="font-bold text-xl hover:text-white">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="font-bold text-xl hover:text-white">
            <NavLink to={"/toko"}>Toko</NavLink>
          </li>
          {user.isLoggedIn ? (
            <>
              <li className="font-bold text-xl hover:text-white">
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
              {user.role === "admin" && (
                <li className="font-bold text-xl hover:text-white">
                  <NavLink to={"/admin"}>Admin</NavLink>
                </li>
              )}
            </>
          ) : (
            <>
              <li className="font-bold text-xl hover:text-white">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li className="font-bold text-xl hover:text-white">
                <NavLink to={"/signup"}>Signup</NavLink>
              </li>
            </>
          )}
        </ul>
      </motion.nav>
    </>
  );
}
