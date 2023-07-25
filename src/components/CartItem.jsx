import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, editQuantityCart } from "../slice/CartItem";

export default function CartItem({ id, name, qty, image, price, stock }) {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (qty !== stock) {
      setMsg("");
    }
  }, [qty, msg]);

  return (
    <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start sm:items-center'>
      <img
        src={image}
        alt='product-image'
        className='w-full rounded-lg sm:w-28 sm:h-28'
      />
      <div className='sm:ml-7 sm:flex sm:w-full sm:justify-between  sm:items-center'>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-lg font-bold text-gray-900'>{name}</h2>
          <p className='mt-1 text-xs text-gray-700'>Stock : {stock}</p>
          <p className='mt-1 text-xs text-gray-700'>
            Total : Rp {price && numberWithCommas(price * qty)}
          </p>
        </div>
        <div className='mt-4 flex justify-between  sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
          <div className='flex flex-col items-center gap-y-2'>
            {msg && <p className='text-red-600 text-sm'>{msg}</p>}
            <div className='flex items-center border-gray-100'>
              <button
                disabled={qty <= 1}
                className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
                onClick={() => {
                  dispatch(editQuantityCart({ id, edit: false }));
                }}>
                {"-"}
              </button>
              <div className='h-8 w-8 flex items-center justify-center font-medium border bg-white text-center text-xs outline-none'>
                {qty}
              </div>
              <button
                // disabled={qty >= stock}
                className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'
                onClick={() => {
                  if (qty === stock) {
                    setMsg("Out of stock");
                  } else {
                    dispatch(editQuantityCart({ id, edit: true }));
                  }
                }}>
                {"+"}
              </button>
            </div>
            <div className='flex items-center space-x-4'>
              <p className='text-sm'>Rp {numberWithCommas(price)}</p>
              <div onClick={() => dispatch(deleteItem({ id: id }))}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-5 w-5 cursor-pointer duration-150  hover:text-red-500'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
