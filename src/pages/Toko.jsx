import shoes from "../img/shoes1.png";
import logo from "../img/logo.png";
import Bars3 from "../svg/Bars3";
import Cart from "../svg/Cart";
import { Form } from "react-router-dom";
import Filter from "../svg/Filter";
import Star from "../svg/Star";
import ModalItem from "../components/ModalItem";

export default function Toko() {
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
      <section className='w-full'>
        <Form className='p-5 pt-2 flex-col gap-y-1 flex'>
          <h2 className='font-bold text-2xl -mb-1 font-roboto'>Search</h2>
          <div className='flex items-center gap-x-2'>
            <input
              type='text'
              className='form-input py-1 w-4/5 rounded-md bg-main-1 placeholder-gray-200 shadow-xl focus:border-main-2 placeholder-opacity-70 text-white text-sm'
              placeholder='Type here'
            />
            <Filter className={"w-8 h-8"} />
          </div>
          <button
            type='submit'
            className='px-3 rounded w-fit bg-main-3 text-sm py-0.5 shadow-md'>
            Kirim
          </button>
        </Form>
      </section>
      <main className='grid grid-cols-2 p-5 gap-2'>
        <ModalItem />
        <ModalItem />
        <ModalItem />

      </main>
    </>
  );
}
