import { useState } from "react";
import shoes from "../img/shoes1.png";

export default function ModalItem({ setToggle }) {
  return (
    <>
      <div
        onClick={setToggle}
        className='fixed z-[100] top-0 right-0 left-0 bottom-0 blur-md backdrop-blur-[2px] block'></div>
      <div className='flex w-4/5 lg:w-3/5 z-[101] rounded-md fixed left-1/2 top-1/2 py-10 p-3 -translate-x-1/2 -translate-y-1/2 bg-black text-white min-h-fit flex-col gap-y-6 '>
        <img src={shoes} alt='shoes' className='w-3/5 mx-auto md:w-2/5' />
        <p className='text-3xl font-bold font-roboto text-center md:text-3xl'>
          Sepatu X12
        </p>
        <div className='sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:items-center flex flex-col gap-y-4'>
          <p className='font-semibold text-xl text-center md:text-2xl'>
            Rp 120.000
          </p>
          <div className='flex flex-col gap-y-1 text-center md:text-xl'>
            <p>Quantity</p>
            <div className='flex justify-center items-center gap-x-3'>
              <button className='px-3  bg-orange-600 rounded-md'>-</button>
              <p>10</p>
              <button className='px-3  bg-orange-600 rounded-md'>+</button>
            </div>
          </div>
          <button className='sm:mt-0 md:text-xl mt-auto px-4 py-1 w-fit rounded-md bg-sky-600 font-medium mx-auto lg:bg-orange-600 md:bg-emerald-600 sm:bg-red-600'>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
