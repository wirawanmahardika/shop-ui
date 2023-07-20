import Bars3 from "../svg/Bars3";
import Cart from "../svg/Cart";
import hacker from "../img/hacker-1.jpg";
import shoes1 from "../img/shoes1.png";
import shoes2 from "../img/shoes2.png";
import shoes3 from "../img/shoes3.png";
import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";
import facebook from "../img/facebook.png";
import imageHome from "../img/bg-image-home.png";
import logo from "../img/logo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeNav from "../svg/HomeNav";
import Shop from "../svg/Shop";
import { NavLink } from "react-router-dom";
import User from "../svg/User";
import axios from "axios";
import useGetUser from "../hooks/useGetUser";
import Login from "../svg/Login";
import signup from "../img/signup.png";

export default function Home() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:1000/api/category").then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:1000/api/brands").then((res) => {
      setBrands(res.data.data);
    });
  }, []);

  const user = useGetUser();
  return (
    <>
      <nav className='flex p-5 justify-between w-full md:bg-main-1 md:p-3 xl:p-7 relative z-10'>
        <div
          className='cursor-pointer sm:hidden'
          onClick={() => setNavbarToggle(!navbarToggle)}>
          <Bars3 className={"w-10 h-10"} />
        </div>
        <div className='sm:flex gap-x-3 items-center hidden'>
          <div
            className='cursor-pointer'
            onClick={() => setNavbarToggle(!navbarToggle)}>
            <Bars3 className={"w-10 h-10 lg:hidden"} />
          </div>
          <img src={logo} alt='logo' className='w-8 h-8 ' />
          <h1 className='text-main-1 font-bold text-xl md:text-white xl:text-3xl'>
            Toko<span className='text-main-2 md:text-white'>Sedia</span>
          </h1>
        </div>
        <div className='flex gap-x-4 items-center '>
          <NavLink
            to={"/"}
            className={
              "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
            }>
            Home
          </NavLink>
          <NavLink
            to={"/toko"}
            className={
              "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
            }>
            Toko
          </NavLink>
          {user.isLoggedIn ? (
            <NavLink
              to={"/profile"}
              className={
                "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
              }>
              Profile
            </NavLink>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className={
                  "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
                }>
                Login
              </NavLink>
              <NavLink
                to={"/signup"}
                className={
                  "font-semibold text-md hover:text-white hidden lg:inline xl:text-xl"
                }>
                Signup
              </NavLink>
            </>
          )}

          <NavLink to='/cart'>
            <Cart className={"w-10 h-10"} />
          </NavLink>
          {user.isLoggedIn ? (
            <NavLink to={"/profile"} className={"w-10 h-full flex"}>
              <img
                src={hacker}
                alt='profile'
                className='w-10 rounded-full self-stretch'
              />
            </NavLink>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-10 h-10'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          )}
        </div>
      </nav>

      {/* Mobile navbar */}
      <motion.nav
        animate={{ x: navbarToggle ? 0 : "-100vh" }}
        className='fixed bg-black bottom-0 left-0 top-0 w-1/2 z-40 text-white p-3 -translate-x-[100vh] md:hidden'>
        <p className='font-bold text-xl text-center mb-5'>Navigation</p>
        <ul className='flex flex-col justify-evenly gap-y-4'>
          <div className='flex gap-x-2 items-center'>
            <HomeNav />
            <li className='font-semibold text-xl hover:text-white'>
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </div>

          <div className='flex gap-x-2 items-center'>
            <Shop />
            <li className='font-semibold text-xl hover:text-white'>
              <NavLink to={"/toko"}>Toko</NavLink>
            </li>
          </div>
          {user.isLoggedIn ? (
            <div className='flex gap-x-2 items-center'>
              <User />
              <li className='font-semibold text-xl hover:text-white'>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </div>
          ) : (
            <>
              <div className='flex gap-x-2 items-center'>
                <Login />
                <li className='font-semibold text-xl hover:text-white'>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
              </div>
              <div className='flex gap-x-2 items-center'>
                <img src={signup} alt='signup' className='w-6 h-6' />
                <li className='font-semibold text-xl hover:text-white'>
                  <NavLink to={"/signup"}>Signup</NavLink>
                </li>
              </div>
            </>
          )}
        </ul>
        <button
          onClick={() => setNavbarToggle(!navbarToggle)}
          className='mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg'>
          Close
        </button>
      </motion.nav>
      <motion.nav
        animate={{ marginTop: navbarToggle ? "0px" : "-80px" }}
        className={`w-full p-5 bg-main-2 relative z-0 -mt-20 hidden md:block lg:hidden`}>
        <ul className=' flex justify-evenly'>
          <li className='font-bold text-xl hover:text-white'>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className='font-bold text-xl hover:text-white'>
            <NavLink to={"/toko"}>Toko</NavLink>
          </li>
          {user.isLoggedIn ? (
            <li className='font-bold text-xl hover:text-white'>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          ) : (
            <>
              <li className='font-bold text-xl hover:text-white'>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li className='font-bold text-xl hover:text-white'>
                <NavLink to={"/signup"}>Signup</NavLink>
              </li>
            </>
          )}
        </ul>
      </motion.nav>
      <div className='w-full h-[390px] bg-image-home bg-cover p-7 flex sm:bg-none sm:flex sm:p-0 md:h-[450px]'>
        <div className='w-4/5 text-center sm:w-full sm:flex sm:items-center sm:justify-center sm:flex-col sm:basis-1/2 md:gap-y-1 lg:gap-y-2'>
          <h2 className='text-main-1 font-bold text-3xl  md:-mb-1'>
            SHOP WITH US
          </h2>
          <p className='font-semibold font-quicksand'>
            <span className='text-main-2 xl:text-lg'>Get</span> Your Dream{" "}
            <span className='text-main-1'>Fashion</span> Style
          </p>
          <NavLink
            to={"/toko"}
            className='mx-auto px-3 py-0.5 rounded-2xl bg-main-3 font-semibold hidden md:block shadow-md lg:px-5 lg:py-1'>
            Start Now
          </NavLink>
        </div>
        <div className='hidden justify-end items-center sm:flex sm:basis-1/2 md:pb-4'>
          <img src={imageHome} alt='imageHome' className='w-4/5' />
        </div>
      </div>
      <div className='w-full flex justify-center p-5 pb-9 md:hidden'>
        <NavLink
          to='/toko'
          className='mx-auto px-5 py-1 rounded-xl bg-main-3 font-semibold'>
          Start Now
        </NavLink>
      </div>

      <div className='flex flex-col w-full bg-main-2  p-5 gap-y-2 md:p-8 md:gap-y-6'>
        <h2 className='font-semibold text-xl md:font-bold md:text-2xl lg:text-xl'>
          Working with popular brand
        </h2>
        <div className='w-full grid grid-cols-3 items-center justify-items-center gap-3'>
          {brands &&
            brands.map((d) => {
              return (
                <img
                  key={d.id_brand}
                  src={d.brand_photo}
                  alt={d.name_brand}
                  className='pl-2 w-11/12 sm:w-4/6 md:w-1/2 lg:w-1/3'
                />
              );
            })}
        </div>
      </div>
      <div className='w-full min-h-[300px] grid grid-cols-3 bg-gray-600 gap-5 p-4 gap-x-9'>
        <h2 className='col-span-3 font-bold text-2xl text-center text-stone-100 md:text-4xl'>
          Preview
        </h2>
        <div className='col-span-3 justify-between flex mb-3'>
          <div className='rotate-180 p-4 bg-slate-800 h-fit my-auto'>
            <PlaySvg />
          </div>
          <div className='w-1/2 my-auto flex items-center justify-center'>
            <img
              src={shoes1}
              alt='converse'
              className='w-full drop-shadow-xl md:w-4/5'
            />
          </div>
          <div className='p-4 bg-slate-800 h-fit my-auto'>
            <PlaySvg />
          </div>
        </div>
        <div className=' my-auto flex justify-center '>
          <img
            src={shoes2}
            alt='converse'
            className='w-full drop-shadow-2xl md:w-2/4'
          />
        </div>
        <div className=' my-auto flex justify-center '>
          <img
            src={shoes3}
            alt='converse'
            className='w-full drop-shadow-2xl md:w-2/4'
          />
        </div>
        <div className=' my-auto flex justify-center '>
          <img
            src={shoes1}
            alt='converse'
            className='w-full drop-shadow-2xl md:w-2/4'
          />
        </div>
      </div>

      <div className='w-full min-h-[200px] p-5 flex flex-col items-center gap-y-9 font-quicksand'>
        <button className='border border-black rounded-lg font-semibold font-roboto bg-main-1 text-center w-full py-2 shadow-lg sm:w-3/5'>
          Category
        </button>
        {categories &&
          categories.map((d) => {
            return (
              <div
                key={d.id_category}
                className='w-full flex justify-between items-center px-6 sm:justify-around'>
                <img src={d.category_photo} alt='shoes1' className='w-[80px]' />
                <h3 className='font-semibold capitalize'>{d.category}</h3>
              </div>
            );
          })}
      </div>
      <footer className='w-full bg-black text-gray-50 p-5 gap-x-5 flex flex-col items-center gap-y-4 sm:p-10 sm:flex-row'>
        <div className='w-1/2 flex flex-col items-center gap-y-2 self-start sm:self-auto'>
          <h3 className='font-geologica font-extrabold text-xl '>
            Tentang Kami
          </h3>
          <p className='text-xs lg:w-4/5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            vitae deleniti harum magnam accusantium voluptatem. Repellat
            corporis necessitatibus fugiat itaque architecto numquam officiis
            aliquam et, suscipit voluptates explicabo vitae id. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus
            vitae sequi rem praesentium consequuntur soluta illo consequatur
            moles
          </p>
        </div>
        <div className='w-1/2 flex flex-col items-center font-light self-end sm:self-auto'>
          <h3 className='font-geologica font-extrabold text-xl mb-2'>
            Contact
          </h3>
          <p className='font-extralight'>+628-1234-5678</p>
          <p className='font-extralight'>johndoe@gmail.com</p>
          <div className='w-full flex p-2 gap-x-2 sm:justify-center'>
            <img src={instagram} alt='instagram' className='w-1/5' />
            <img
              src={facebook}
              alt='facebook'
              className='w-[40px] sm:w-[90px]'
            />
            <img src={whatsapp} alt='whatsapp' className='w-1/5' />
          </div>
        </div>
      </footer>
      <div className='border-t border-gray-600 text-center bg-black text-gray-400 text-sm py-1 sm:text-xs'>
        <p>Copyright 2023</p>
      </div>
    </>
  );
}

function PlaySvg() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='white'
      className='w-6 h-6 md:w-9 md:h-9'>
      <path
        fillRule='evenodd'
        d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
        clipRule='evenodd'
      />
    </svg>
  );
}
