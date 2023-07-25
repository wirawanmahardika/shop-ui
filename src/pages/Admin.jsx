import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeNav from "../svg/HomeNav";
import Shop from "../svg/Shop";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import User from "../svg/User";
import useGetUser from "../hooks/useGetUser";

export default function Admin() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const user = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role !== "admin") {
      return navigate("/");
    }
  });

  return (
    <>
      <Navbar navbarToggle={navbarToggle} setNavbarToggle={setNavbarToggle} />
      <Outlet context={{ navbarToggle, setNavbarToggle }} />
    </>
  );
}

function Navbar({ navbarToggle, setNavbarToggle }) {
  return (
    <>
      <motion.nav
        animate={{ x: navbarToggle ? 0 : "-100vh" }}
        className='fixed bg-black bottom-0 left-0 top-0 w-1/2 z-40 text-white p-3 -translate-x-[100vh] lg:w-1/3'>
        <p className='font-bold text-xl text-center mb-5 md:text-4xl'>CMS</p>
        <ul className='flex flex-col justify-evenly gap-y-4'>
          <div className='flex gap-x-2 items-center'>
            <HomeNav />
            <li className='font-semibold text-xl hover:text-white md:text-3xl'>
              <NavLink to={"/admin/items"}>Item</NavLink>
            </li>
          </div>

          <div className='flex gap-x-2 items-center'>
            <User />
            <li className='font-semibold text-xl hover:text-white md:text-3xl'>
              <NavLink to={"/admin/users"}>Users</NavLink>
            </li>
          </div>

          <div className='flex gap-x-2 items-center'>
            <User />
            <li className='font-semibold text-xl hover:text-white md:text-3xl'>
              <NavLink to={"/admin/category"}>Category</NavLink>
            </li>
          </div>

          <div className='flex gap-x-2 items-center'>
            <User />
            <li className='font-semibold text-xl hover:text-white md:text-3xl'>
              <NavLink to={"/admin/brand"}>Brand</NavLink>
            </li>
          </div>
        </ul>

        <p className='font-bold text-xl text-center my-5 mt-8 md:text-4xl'>
          Navigation
        </p>
        <ul className='flex flex-col justify-evenly gap-y-4'>
          <div className='flex gap-x-2 items-center'>
            <HomeNav className={"w-6 h-6 md:w-9 md:h-9"} />
            <li className='font-semibold text-xl hover:text-white md:text-3xl'>
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </div>

          <div className='flex gap-x-2 items-center'>
            <Shop className={"w-6 h-6 md:w-9 md:h-9"} />
            <li className='font-semibold text-xl hover:text-white md:text-3xl'>
              <NavLink to={"/toko"}>Toko</NavLink>
            </li>
          </div>

          <div className='flex gap-x-2 items-center'>
            <User className={"w-6 h-6 md:w-9 md:h-9"} />
            <li className='font-semibold text-xl hover:text-white md:text-3xl'>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </div>
        </ul>
        <button
          onClick={() => setNavbarToggle(!navbarToggle)}
          className='mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg md:text-lg md:px-4 md:py-2'>
          Close
        </button>
      </motion.nav>
    </>
  );
}
