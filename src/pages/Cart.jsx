import logo from "../img/logo.png";
import Bars3 from "../svg/Bars3";
import Cart from "../svg/Cart";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeNav from "../svg/HomeNav";
import Shop from "../svg/Shop";
import hacker from "../img/hacker-1.jpg";
import User from "../svg/User";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../reduxSlice/CartItem";

export default function CartPage() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const data = useSelector((state) => state.cartItem);
  const shippingCost = 15000;

  useEffect(() => {
    let count = 0;
    data.forEach((e) => {
      count += e.price * e.qty;
    });
    setSubTotal(count);
  }, [data]);

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
      <div className='h-screen bg-gray-100 pt-20'>
        <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
          <div className='rounded-lg md:w-2/3'>
            {data.map((d, i) => {
              return (
                <CartItem
                  key={i}
                  id={d.id}
                  name={d.name}
                  price={d.price}
                  qty={d.qty}
                  image={d.image}
                  stock={d.stock}
                />
              );
            })}
          </div>
          <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
            <div className='mb-2 flex justify-between'>
              <p className='text-gray-700'>Subtotal</p>
              <p className='text-gray-700'>Rp {numberWithCommas(subTotal)}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-gray-700'>Shipping</p>
              <p className='text-gray-700'>
                Rp {numberWithCommas(shippingCost)}
              </p>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'>
                  Rp {numberWithCommas(subTotal + shippingCost)}
                </p>
                <p className='text-sm text-gray-700'>including VAT</p>
              </div>
            </div>
            <button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
