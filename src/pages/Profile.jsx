import hacker from "../img/hacker-1.jpg";
import { motion } from "framer-motion";
import HomeNav from "../svg/HomeNav";
import Shop from "../svg/Shop";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Bars3 from "../svg/Bars3";
import User from "../svg/User";
import Cart from "../svg/Cart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../reduxSlice/Auth";
import useCheckLogin from "../hooks/useCheckLogin";
import useGetUser from "../hooks/useGetUser";

export default function Profile() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleLogout = () => {
    axios.delete('http://localhost:1000/api/users/logout', {withCredentials: true})
      .then(() => {
        navigate('/login', { state: 'Berhasil logout' , })
        dispatch(logout())
      })
  }
  const user = useGetUser()
  useCheckLogin()
  return (
    <>
      <motion.nav
        animate={{ x: navbarToggle ? 0 : "-100vh" }}
        className='fixed bg-black bottom-0 left-0 top-0 w-1/2 z-40 md:w-1/3 text-white p-3 -translate-x-[100vh]'>
        <p className='font-bold text-xl text-center mb-5 md:text-3xl'>
          Navigation
        </p>
        <ul className='flex flex-col justify-evenly gap-y-4'>
          <div className='flex gap-x-2 items-center'>
            <HomeNav />
            <li className='font-semibold text-xl hover:text-white md:text-2xl'>
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </div>
          <div className='flex gap-x-2 items-center'>
            <User />
            <li className='font-semibold text-xl hover:text-white md:text-2xl'>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </div>
          <div className='flex gap-x-2 items-center'>
            <Shop />
            <li className='font-semibold text-xl hover:text-white md:text-2xl'>
              <NavLink to={"/toko"}>Toko</NavLink>
            </li>
          </div>
          <div className='flex gap-x-2 items-center'>
            <Cart className={"w-6 h-6"} />
            <li className='font-semibold text-xl hover:text-white md:text-2xl'>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
          </div>
     
        </ul>
        <button
          onClick={() => setNavbarToggle(!navbarToggle)}
          className='mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg md:px-4 md:py-2 md:text-lg md:mb-6'>
          Close
        </button>
      </motion.nav>
      <div className='flex p-5 items-center w-full justify-between'>
        <div onClick={() => setNavbarToggle(!navbarToggle)}>
          <Bars3 className={"w-9 h-9"} />
        </div>
        <p className='text-xl font-bold'>Profile {user.username}</p>
      </div>
      <div className='flex flex-col p-3 items-center justify-center w-full gap-3'>
        <div className='w-1/2 rounded-full overflow-hidden'>
          {user.photo ? (
            <img src={user.photo} alt='user' className='drop-shadow-2xl' />
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-full h-full'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          )}
        </div>
        <div className='text-center'>
          <p className='font-bold text-2xl font-geologica md:text-4xl'>
            {user.fullname}
          </p>
          <p className='md:text-xl font-medium'>{user.email}</p>
        </div>
        <button onClick={toggleLogout} className='px-4 py-1 font-medium rounded-2xl bg-red-600 mt-3 md:px-6 md:py-2 md:text-lg md:font-semibold'>
          Logout
        </button>
      </div>
      <div className='w-full grid p-4 grid-cols-2 justify-items-center'>
        <div className='text-center w-fit px-5 py-2 bg-slate-100 shadow-xl md:px-9 md:py-4 md:text-xl'>
          <strong>Bought Item</strong>
          <p>5</p>
        </div>
        <div className='text-center w-fit px-5 py-2 bg-slate-100 shadow-xl md:px-9 md:py-4 md:text-xl'>
          <strong>Balance</strong>
          <p>Rp 1.000.000.000</p>
        </div>
      </div>
      <div className='flex flex-col mt-4'>
        <p className='font-bold text-2xl font-geologica px-3 text-center mb-3 sm:text-sky-600 md:text-3xl'>
          Buy History
        </p>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-center text-sm '>
                <thead className='border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900'>
                  <tr>
                    <th scope='col' className=' px-6 py-4'>
                      Date
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Spend
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap  px-6 py-4 font-medium'>
                      Date
                    </td>
                    <td className='whitespace-nowrap  px-6 py-4'>Spend</td>
                    <td className='whitespace-nowrap  px-6 py-4'>Handle</td>
                  </tr>
                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap  px-6 py-4 font-medium'>
                      2
                    </td>
                    <td className='whitespace-nowrap  px-6 py-4'>Thornton</td>
                    <td className='whitespace-nowrap  px-6 py-4'>Thornton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



/**
 * pembelian history
 * balance dari wallet
 * jumlah barang yang sudah dibeli
 */