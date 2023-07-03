import shoes from "../img/shoes1.png";
import logo from "../img/logo.png";
import Bars3 from "../svg/Bars3";
import Cart from "../svg/Cart";
import { Form, NavLink } from "react-router-dom";
import Filter from "../svg/Filter";
import ModalItem from "../components/ModalItem";
import { useState } from "react";
import { checkTargetForNewValues, motion } from "framer-motion";
import HomeNav from "../svg/HomeNav";
import Shop from "../svg/Shop";
import hacker from "../img/hacker-1.jpg";
import User from "../svg/User";

export default function CartPage() {
  const [filterToggle, setFilterToggle] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [hargaToggle, setHargaToggle] = useState("auto");
  const hargaAutoToggle = hargaToggle === "auto" ? "bg-main-3" : "bg-black";
  const hargaCustomToggle = hargaToggle === "custom" ? "bg-main-3" : "bg-black";
  return (
    <>
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
            <User />
            <li className='font-semibold text-xl hover:text-white'>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </div>
          <div className='flex gap-x-2 items-center'>
            <Shop />
            <li className='font-semibold text-xl hover:text-white'>
              <NavLink to={"/toko"}>Toko</NavLink>
            </li>
          </div>
          <div className='flex gap-x-2 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
              />
            </svg>
            <li className='font-semibold text-xl hover:text-white'>About</li>
          </div>
        </ul>
        <button
          onClick={() => setNavbarToggle(!navbarToggle)}
          className='mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg'>
          Close
        </button>
      </motion.nav>

      <header className='flex p-5 items-center justify-between md:p-9'>
        <div className='flex gap-x-3 items-center'>
          <img
            src={logo}
            alt='tokosediaLogo'
            className='w-1/12 sm:w-[5%] md:w-[8%] lg:w-[4%]'
          />
          <h2 className='font-bold text-xl uppercase md:text-4xl lg:text-3xl'>
            TokoSedia
          </h2>
        </div>
        <div className='flex gap-x-2 items-center md:justify-end'>
          <div className='mr-3 font-semibold hidden md:block md:text-2xl lg:text-xl'>
            <ul className='flex gap-x-3'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to={"/cart"} className={"md:hidden"}>
                Cart
              </NavLink>
              <NavLink to={"/profile"}>Profile</NavLink>
              <NavLink to={"/toko"}>Toko</NavLink>
              <NavLink to={"/about"}>About</NavLink>
            </ul>
          </div>
          <NavLink to='/cart'>
            <Cart className={"w-7 h-7 md:w-8 md:h-8"} />
          </NavLink>
          <img
            src={hacker}
            alt='profile'
            className='w-9 h-9 hidden md:block rounded-full'
          />
          <div
            className='md:hidden'
            onClick={() => setNavbarToggle(!navbarToggle)}>
            <Bars3 strokeColor={"black"} className={"w-8 h-8 md:w-10"} />
          </div>
        </div>
      </header>
      <div class='h-screen bg-gray-100 pt-20'>
        <h1 class='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
        <div class='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
          <div class='rounded-lg md:w-2/3'>
            <div class='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
              <img
                src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='product-image'
                class='w-full rounded-lg sm:w-40'
              />
              <div class='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div class='mt-5 sm:mt-0'>
                  <h2 class='text-lg font-bold text-gray-900'>
                    Nike Air Max 2019
                  </h2>
                  <p class='mt-1 text-xs text-gray-700'>36EU - 4US</p>
                </div>
                <div class='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                  <div class='flex items-center border-gray-100'>
                    <span class='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                      {" "}
                      -{" "}
                    </span>
                    <input
                      class='h-8 w-8 border bg-white text-center text-xs outline-none'
                      type='number'
                      value='2'
                      min='1'
                    />
                    <span class='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div class='flex items-center space-x-4'>
                    <p class='text-sm'>259.000 ₭</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
              <img
                src='https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80'
                alt='product-image'
                class='w-full rounded-lg sm:w-40'
              />
              <div class='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div class='mt-5 sm:mt-0'>
                  <h2 class='text-lg font-bold text-gray-900'>
                    Nike Air Max 2019
                  </h2>
                  <p class='mt-1 text-xs text-gray-700'>36EU - 4US</p>
                </div>
                <div class='mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                  <div class='flex items-center border-gray-100'>
                    <span class='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                      {" "}
                      -{" "}
                    </span>
                    <input
                      class='h-8 w-8 border bg-white text-center text-xs outline-none'
                      type='number'
                      value='2'
                      min='1'
                    />
                    <span class='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div class='flex items-center space-x-4'>
                    <p class='text-sm'>259.000 ₭</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
            <div class='mb-2 flex justify-between'>
              <p class='text-gray-700'>Subtotal</p>
              <p class='text-gray-700'>$129.99</p>
            </div>
            <div class='flex justify-between'>
              <p class='text-gray-700'>Shipping</p>
              <p class='text-gray-700'>$4.99</p>
            </div>
            <hr class='my-4' />
            <div class='flex justify-between'>
              <p class='text-lg font-bold'>Total</p>
              <div class=''>
                <p class='mb-1 text-lg font-bold'>$134.98 USD</p>
                <p class='text-sm text-gray-700'>including VAT</p>
              </div>
            </div>
            <button class='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
