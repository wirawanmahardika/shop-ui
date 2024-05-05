import { motion } from "framer-motion";
import HomeNav from "../../assets/svg/HomeNav";
import { NavLink } from "react-router-dom";
import Shop from "../../assets/svg/Shop";
import User from "../../assets/svg/User";
import Login from "../../assets/svg/Login";
import Bars3 from "../../assets/svg/Bars3";
import Cart from "../../assets/svg/Cart";
import signup from "../../assets/signup.png";

export function MobileNavbar({ user, navbarToggle, setNavbarToggle }) {
  return (
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
  );
}

export function TabletNavbar({
  user,
  navigate,
  navbarToggle,
  setNavbarToggle,
}) {
  const navigationBasedOnAuth = user.isLoggedIn ? (
    <>
      <NavLink to="/profile">Profile</NavLink>
      {user.role === "admin" && <NavLink to="/admin">Admin</NavLink>}
    </>
  ) : (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </>
  );

  const imgBasedOnAuth =
    user.isLoggedIn && user.photo ? (
      <img
        onClick={() => navigate("/profile")}
        src={user.photo}
        alt="profile"
        className="w-9 h-9 hidden md:block rounded-full cursor-pointer"
      />
    ) : (
      <User className={"w-7 h-7 cursor-pointer"} clickHandler={navigate} />
    );

  return (
    <>
      <nav className="mr-3 font-semibold hidden md:block md:text-xl ">
        <ul className="flex gap-x-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/toko">Toko</NavLink>
          {navigationBasedOnAuth}
        </ul>
      </nav>
      <NavLink to={"/cart"}>
        <Cart className={"w-7 h-7 md:w-8 md:h-8"} />
      </NavLink>
      {imgBasedOnAuth}
      <div className="md:hidden" onClick={() => setNavbarToggle(!navbarToggle)}>
        <Bars3 strokeColor={"black"} className={"w-8 h-8 md:w-10"} />
      </div>
    </>
  );
}
