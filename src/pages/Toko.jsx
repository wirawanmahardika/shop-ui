import shoes from "../img/shoes1.png";
import logo from "../img/logo.png";
import Bars3 from "../svg/Bars3";
import Cart from "../svg/Cart";
import { Form } from "react-router-dom";
import Filter from "../svg/Filter";
import Star from "../svg/Star";
import ModalItem from "../components/ModalItem";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Toko() {
  const [filterToggle, setFilterToggle] = useState(false);

  const [hargaToggle, setHargaToggle] = useState("custom");
  const hargaAutoToggle = hargaToggle === "auto" ? "bg-main-3" : "bg-black";
  const hargaCustomToggle = hargaToggle === "custom" ? "bg-main-3" : "bg-black";

  return (
    <>
      <header className='flex p-5 items-center'>
        <div className='flex gap-x-3 items-center'>
          <img src={logo} alt='tokosediaLogo' className='w-1/12' />
          <h2 className='font-bold text-xl uppercase'>TokoSedia</h2>
        </div>
        <div className='flex gap-x-2 items-center'>
          <Cart className={"w-7 h-7"} />
          <Bars3 strokeColor={"black"} className={"w-8 h-8"} />
        </div>
      </header>

      <section className='w-full overflow-hidden'>
        <Form className='p-5 pt-2 flex-col gap-y-1 flex'>
          <h2 className='font-bold text-2xl -mb-1 font-roboto'>Search</h2>
          <div className='flex items-center gap-x-2'>
            <input
              type='text'
              className='form-input py-1 w-4/5 rounded-md bg-main-1 placeholder-gray-200 shadow-xl focus:border-main-2 placeholder-opacity-70 text-white text-sm'
              placeholder='Type here'
            />
            <div onClick={() => setFilterToggle(!filterToggle)}>
              <Filter className={"w-8 h-8"} />
            </div>
          </div>
          <button
            type='submit'
            className='px-3 rounded w-fit bg-main-3 text-sm py-0.5 shadow-md'>
            Kirim
          </button>
        </Form>
        <motion.div
          animate={{ x: filterToggle ? "0" : "100vw" }}
          className=' fixed right-0 top-0 bottom-0 w-2/3'>
          <Form className='bg-main-1 w-full h-full p-3 text-white overflow-y-auto flex flex-col'>
            <div
              onClick={() => setFilterToggle(!filterToggle)}
              className='absolute left-3 top-3 hover:text-red-500'>
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
                  d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='grid grid-cols-2 gap-y-2 p-3'>
              <p className='text-xl font-bold text-center col-span-2 mb-2'>
                Category
              </p>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Baju</label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Celana</label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Sepatu</label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Kalung</label>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-y-2 p-3'>
              <p className='text-xl font-bold text-center col-span-2 mb-2'>
                Brand
              </p>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Adidas</label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Converse</label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Ventela</label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input type='checkbox' className='form-input' />
                <label htmlFor=''>Gucci</label>
              </div>
            </div>
            <div className='flex flex-col gap-y-2 p-3'>
              <p className='text-xl font-bold text-center col-span-2 mb-2'>
                Harga
              </p>
              <div className='mx-auto text-center mb-2'>
                <button
                  type='button'
                  onClick={() => setHargaToggle("auto")}
                  className={"px-2 rounded-l py-0.5 " + hargaAutoToggle}>
                  Auto
                </button>
                <button
                  type='button'
                  onClick={() => setHargaToggle("custom")}
                  className={`px-2 rounded-r py-0.5 ` + hargaCustomToggle}>
                  Costum
                </button>
              </div>

              {hargaToggle == "custom" ? (
                <>
                  <div className='flex flex-col items-center text-black'>
                    <input
                      type='number'
                      className='form-input py-0.5 w-2/3 font-semibold'
                    />
                    <p className='font-medium text-white'>to</p>
                    <input
                      type='number'
                      className='form-input py-0.5 w-2/3 font-semibold'
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className='flex gap-x-2 items-center '>
                    <input type='checkbox' className='form-input' />
                    <label htmlFor=''>0 - 250.000</label>
                  </div>
                  <div className='flex gap-x-2 items-center '>
                    <input type='checkbox' className='form-input' />
                    <label htmlFor=''>250.000 - 1.000.000</label>
                  </div>
                  <div className='flex gap-x-2 items-center '>
                    <input type='checkbox' className='form-input' />
                    <label htmlFor=''>1.000.000 - 3.000.000</label>
                  </div>
                  <div className='flex gap-x-2 items-center '>
                    <input type='checkbox' className='form-input' />
                    <label htmlFor=''>3.000.000 ++</label>
                  </div>
                </>
              )}
            </div>
            <button
              type='submit'
              className='px-4 py-0.5 rounded bg-main-3  text-black font-semibold mx-auto mt-auto'>
              Apply
            </button>
          </Form>
        </motion.div>
      </section>
      <main className='grid grid-cols-2 p-5 gap-2'>
        <ModalItem />
        <ModalItem />
        <ModalItem />
      </main>
    </>
  );
}
