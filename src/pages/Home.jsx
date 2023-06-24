import Bars3 from "../components/Bars3";
import Cart from "../components/Cart";
import hacker from "../img/hacker-1.jpg";
import gucci from "../img/gucci.png";
import nike from "../img/nike.png";
import puma from "../img/puma.png";
import converse from "../img/converse.png";
import adidas from "../img/adidas.png";
import shoes1 from "../img/shoes1.png";
import shoes2 from "../img/shoes2.png";
import shoes3 from "../img/shoes3.png";
import kalung from "../img/kalung.png";
import celana from "../img/celana.png";
import baju from "../img/baju.png";
import gelang from "../img/gelang.png";
import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";
import facebook from "../img/facebook.png";

export default function Home() {
  return (
    <>
      <nav className='flex p-5 justify-between w-full'>
        <Bars3 width={"w-10 h-10"} />
        <div className='flex gap-x-4'>
          <Cart width={"w-10 h-10"} />
          <img src={hacker} alt='profile' className='w-10 rounded-full' />
        </div>
      </nav>
      <div className='w-full h-[390px] bg-image-home bg-cover p-7 flex '>
        <div className='w-4/5 text-center'>
          <h2 className='text-main-1 font-bold text-3xl'>SHOP WITH US</h2>
          <p className='font-semibold font-quicksand'>
            <span className='text-main-2'>Get</span> Your Dream{" "}
            <span className='text-main-1'>Fashion</span> Style
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center p-5 pb-9'>
        <button className='mx-auto px-5 py-1 rounded-xl bg-main-3 font-semibold'>
          Start Now
        </button>
      </div>
      <div className='flex flex-col w-full bg-main-2  p-5 gap-y-2'>
        <h2 className='font-semibold text-xl '>Working with popular brand</h2>
        <div className='w-full grid grid-cols-3 items-center justify-center gap-3'>
          <img src={converse} alt='converse' className='pl-2 w-11/12' />
          <img src={nike} alt='nike' className='pl-2 w-11/12' />
          <img src={adidas} alt='adidas' className='pl-2 w-11/12' />
          <img src={gucci} alt='gucci' className='pl-2 w-11/12' />
          <img src={puma} alt='puma' className='pl-2 w-11/12' />
        </div>
      </div>
      <div className='w-full min-h-[300px] grid grid-cols-3 bg-gray-600 gap-5 p-4 gap-x-9'>
        <h2 className='col-span-3 font-bold text-2xl text-center text-stone-100'>
          Preview
        </h2>
        <div className='col-span-3 justify-between flex mb-3'>
          <div className='rotate-180 p-4 bg-slate-800 h-fit my-auto'>
            <PlaySvg />
          </div>
          <div className='w-1/2 my-auto'>
            <img
              src={shoes1}
              alt='converse'
              className='w-full drop-shadow-xl'
            />
          </div>
          <div className='p-4 bg-slate-800 h-fit my-auto'>
            <PlaySvg />
          </div>
        </div>
        <div className=' my-auto flex justify-center '>
          <img src={shoes2} alt='converse' className='w-full drop-shadow-2xl' />
        </div>
        <div className=' my-auto flex justify-center '>
          <img src={shoes3} alt='converse' className='w-full drop-shadow-2xl' />
        </div>
        <div className=' my-auto flex justify-center '>
          <img src={shoes1} alt='converse' className='w-full drop-shadow-2xl' />
        </div>
      </div>
      <div className='w-full min-h-[200px] p-5 flex flex-col items-center gap-y-9 font-quicksand'>
        <button className='border border-black rounded-lg font-semibold font-roboto bg-main-1 text-center w-full py-2 shadow-lg '>
          Category
        </button>
        <div className='w-full flex justify-between items-center px-6'>
          <img src={baju} alt='shoes1' className='w-[80px]' />
          <h3 className='font-semibold'>Baju</h3>
        </div>
        <div className='w-full flex justify-between items-center px-6'>
          <img src={celana} alt='shoes1' className='w-[80px]' />
          <h3 className='font-semibold'>Celana</h3>
        </div>
        <div className='w-full flex justify-between items-center px-6'>
          <img src={shoes1} alt='shoes1' className='w-[80px]' />
          <h3 className='font-semibold'>Sepatu</h3>
        </div>
        <div className='w-full flex justify-between items-center px-6'>
          <img src={gelang} alt='shoes1' className='w-[80px]' />
          <h3 className='font-semibold'>Gelang</h3>
        </div>
        <div className='w-full flex justify-between items-center px-6'>
          <img src={kalung} alt='shoes1' className='w-[80px]' />
          <h3 className='font-semibold'>Kalung</h3>
        </div>
      </div>
      <footer className='w-full bg-black text-gray-50 flex p-5 gap-x-5'>
        <div className='w-1/2 flex flex-col items-center gap-y-2'>
          <h3 className='font-geologica font-extrabold text-xl '>
            Tentang Kami
          </h3>
          <p className='text-xs'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            vitae deleniti harum magnam accusantium voluptatem. Repellat
            corporis necessitatibus fugiat itaque architecto numquam officiis
            aliquam et, suscipit voluptates explicabo vitae id.
          </p>
        </div>
        <div className='w-1/2 flex flex-col items-center font-light'>
          <h3 className='font-geologica font-extrabold text-xl mb-2'>
            Contact
          </h3>
          <p className='font-extralight'>+628-1234-5678</p>
          <p className='font-extralight'>johndoe@gmail.com</p>
          <div className='w-full flex p-2 gap-x-2'>
            <img src={instagram} alt='instagram' className='w-1/5' />
            <img src={facebook} alt='facebook' className='w-[40px]' />
            <img src={whatsapp} alt='whatsapp' className='w-1/5' />
          </div>
        </div>
      </footer>
      <div className='border-t border-white text-sm text-center bg-black text-white py-1'>
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
      className='w-6 h-6'>
      <path
        fillRule='evenodd'
        d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
        clipRule='evenodd'
      />
    </svg>
  );
}
