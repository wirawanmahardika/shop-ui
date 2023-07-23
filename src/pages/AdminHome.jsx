import { useOutletContext } from "react-router-dom";
import Bars3 from "../svg/Bars3";
import User from "../img/user.png";
import Category from "../img/category.png";
import Brand from "../img/brand.png";

export default function AdminHome() {
  const { navbarToggle, setNavbarToggle } = useOutletContext();

  return (
    <>
      <div className='flex p-4 justify-between items-center'>
        <div onClick={() => setNavbarToggle(!navbarToggle)}>
          <Bars3 className={"w-9 h-9 sm:w-12 sm:h-12 cursor-pointer"} />
        </div>
        <p className='font-bold text-lg uppercase sm:text-xl md:text-2xl lg:text-3xl'>
          Admin Control
        </p>
      </div>
      <p className='font-bold text-2xl text-center mt-9 sm:text-3xl md:text-4xl'>
        WHAT WOULD YOU LIKE TO SETUP
      </p>
      <div className='w-full grid grid-cols-2 justify-self-center p-5 mt-5 gap-x-5 gap-y-8'>
        <div className='flex flex-col gap-y-2 items-center '>
          <img
            src={Category}
            alt='category'
            className='w-1/2 sm:w-1/3 h-auto lg:w-1/4'
          />
          <h3 className='uppercase font-bold font-roboto text-xl sm:text-2xl'>
            category
          </h3>
        </div>
        <div className='flex flex-col gap-y-2 items-center'>
          <img
            src={Brand}
            alt='category'
            className='w-1/2 sm:w-1/3 h-auto lg:w-1/4'
          />
          <h3 className='uppercase font-bold font-roboto text-xl sm:text-2xl'>
            brand
          </h3>
        </div>
        <div className='flex flex-col gap-y-2 items-center col-span-2'>
          <img
            src={User}
            alt='category'
            className='w-1/4 sm:w-[12.5%] h-auto'
          />
          <h3 className='uppercase font-bold font-roboto text-xl sm:text-2xl'>
            user
          </h3>
        </div>
      </div>
    </>
  );
}
