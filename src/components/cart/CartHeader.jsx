import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Bars3 from "../../assets/svg/Bars3";
import Cart from "../../assets/svg/Cart";
import User from "../../assets/svg/User";

export default function CartHeader({ user, navbarToggle, setNavbarToggle }) {
  const navigate = useNavigate();

  return (
    <header className="flex p-5 items-center justify-between md:p-9">
      <div className="flex gap-x-3 items-center">
        <img
          src={logo}
          alt="tokosediaLogo"
          className="w-1/12 sm:w-[5%] md:w-[8%] lg:w-[4%]"
        />
        <h2 className="font-bold text-xl uppercase md:text-4xl lg:text-3xl font-poetsenOne">
          TokoSedia
        </h2>
      </div>
      <div className="flex gap-x-2 items-center md:justify-end">
        <div className="mr-3 font-semibold hidden md:block md:text-2xl lg:text-xl">
          <ul className="flex gap-x-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to={"/cart"} className={"md:hidden"}>
              Cart
            </NavLink>
            <NavLink to={"/toko"}>Toko</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
            {user.role === "admin" && <NavLink to={"/admin"}>Admin</NavLink>}
          </ul>
        </div>
        <NavLink to="/cart">
          <Cart className={"w-7 h-7 md:w-8 md:h-8"} />
        </NavLink>
        {user.isLoggedIn && user.photo ? (
          <img
            onClick={() => navigate("/profile")}
            src={user.photo}
            alt="profile"
            className="w-9 h-9 hidden md:block rounded-full cursor-pointer"
          />
        ) : (
          <User className={"w-7 h-7 cursor-pointer"} clickHandler={navigate} />
        )}
        <div
          className="md:hidden"
          onClick={() => setNavbarToggle(!navbarToggle)}
        >
          <Bars3 strokeColor={"black"} className={"w-8 h-8 md:w-10"} />
        </div>
      </div>
    </header>
  );
}
