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

export default function Toko() {
  const [filterToggle, setFilterToggle] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [hargaToggle, setHargaToggle] = useState("auto");
  const hargaAutoToggle = hargaToggle === "auto" ? "bg-main-3" : "bg-black";
  const hargaCustomToggle = hargaToggle === "custom" ? "bg-main-3" : "bg-black";

  const [limitHarga, setLimitHarga] = useState({
    harga_lte: undefined,
    harga_gte: undefined,
  });

  const [brands, setBrands] = useState([]);
  const brandHandle = (brandName) => {
    if (brands.includes(brandName)) {
      const brandFiltered = brands.filter((e) => e !== brandName);
      setBrands(brandFiltered);
    } else {
      setBrands([...brands, brandName]);
    }
  };
  const [categories, setCategories] = useState([]);
  const categoryHandle = (categoryName) => {
    if (categories.includes(categoryName)) {
      const brandFiltered = categories.filter((e) => e !== categoryName);
      setCategories(brandFiltered);
    } else {
      setCategories([...categories, categoryName]);
    }
  };
  console.log(brands);
  console.log(limitHarga);
  console.log(categories);

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
              <NavLink to={"/toko"}>Toko</NavLink>
              <NavLink to={"/about"}>About</NavLink>
            </ul>
          </div>
          <div>
            <Cart className={"w-7 h-7 md:w-8 md:h-8"} />
          </div>
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

      <section className='w-full overflow-hidden'>
        <Form className='p-5 pt-2 flex-col gap-y-1 flex'>
          <h2 className='font-bold  text-2xl -mb-1 font-roboto sm:text-3xl sm:text-red-600 md:text-4xl md:text-main-1 lg:text-yellow-600 lg:text-3xl'>
            Search Item
          </h2>
          <div className='flex md:h-14 items-stretch lg:h-10'>
            <input
              type='text'
              className='form-input md:text-xl sm:py-2 py-1 w-4/5 md:py-3 rounded-l-md bg-main-1 placeholder-gray-200 shadow-xl focus:border-main-2 placeholder-opacity-70 text-white text-sm lg:w-3/5'
              placeholder='Type here'
            />
            <div className='form-input py-1 md:text-xl md:py-2 rounded-r-md bg-black placeholder-gray-200 shadow-xl focus:border-main-2 placeholder-opacity-70 text-white text-sm sm:py-2 flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='white'
                className='w-5 h-5 self-stretch md:w-8 md:h-8 my-auto lg:w-6 lg:h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </div>
            <div
              className='ml-1 flex md:ml-3 lg:hidden'
              onClick={() => setFilterToggle(!filterToggle)}>
              <Filter className={"w-8 h-8 md:w-12 md:h-12 my-auto"} />
            </div>
          </div>
          <motion.div
            animate={{ x: filterToggle ? "0" : "100vw" }}
            className=' fixed right-0 top-0 bottom-0 w-2/3 lg:hidden'>
            <div className='bg-main-1 w-full h-full p-3 text-white overflow-y-auto flex flex-col md:gap-y-9 lg:hidden'>
              <div
                onClick={() => setFilterToggle(!filterToggle)}
                className='absolute left-3 top-3 hover:text-red-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 md:w-12 md:h-12'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div className='grid grid-cols-2 gap-y-2 p-3 md:gap-y-5'>
                <p className='text-xl font-bold text-center col-span-2 mb-2 md:text-3xl'>
                  Category
                </p>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='baju'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => categoryHandle("baju")}
                    checked={categories.includes("baju")}
                  />
                  <label className='md:text-xl' htmlFor='baju'>
                    Baju
                  </label>
                </div>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='celana'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => categoryHandle("celana")}
                    checked={categories.includes("celana")}
                  />
                  <label className='md:text-xl' htmlFor='celana'>
                    Celana
                  </label>
                </div>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='sepatu'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => categoryHandle("sepatu")}
                    checked={categories.includes("sepatu")}
                  />
                  <label className='md:text-xl' htmlFor='sepatu'>
                    Sepatu
                  </label>
                </div>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='kalung'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => categoryHandle("kalung")}
                    checked={categories.includes("kalung")}
                  />
                  <label className='md:text-xl' htmlFor='kalung'>
                    Kalung
                  </label>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-y-2 p-3 md:gap-y-5'>
                <p className='text-xl font-bold text-center col-span-2 mb-2 md:text-3xl'>
                  Brand
                </p>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='adidas'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => brandHandle("adidas")}
                    checked={brands.includes("adidas")}
                  />
                  <label className='md:text-xl' htmlFor='adidas'>
                    Adidas
                  </label>
                </div>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='converse'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => brandHandle("converse")}
                    checked={brands.includes("converse")}
                  />
                  <label className='md:text-xl' htmlFor='converse'>
                    Converse
                  </label>
                </div>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='ventela'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => brandHandle("ventela")}
                    checked={brands.includes("ventela")}
                  />
                  <label className='md:text-xl' htmlFor='ventela'>
                    Ventela
                  </label>
                </div>
                <div className='flex gap-x-2 items-center '>
                  <input
                    type='checkbox'
                    id='gucci'
                    className='form-input md:w-9 md:h-9'
                    onChange={() => brandHandle("gucci")}
                    checked={brands.includes("gucci")}
                  />
                  <label className='md:text-xl' htmlFor='gucci'>
                    Gucci
                  </label>
                </div>
              </div>
              <div className='flex flex-col gap-y-2 p-3'>
                <p className='text-xl font-bold text-center col-span-2 mb-2 md:text-3xl'>
                  Harga
                </p>
                <div className='mx-auto text-center mb-2'>
                  <button
                    type='button'
                    onClick={() => {
                      setLimitHarga({
                        harga_lte: undefined,
                        harga_gte: undefined,
                      });
                      setHargaToggle("auto");
                    }}
                    className={
                      "px-2 rounded-l py-0.5 md:px-5 md:py-2 " + hargaAutoToggle
                    }>
                    Auto
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      setLimitHarga({
                        harga_lte: undefined,
                        harga_gte: undefined,
                      });
                      setHargaToggle("custom");
                    }}
                    className={
                      `px-2 rounded-r py-0.5 md:px-5 md:py-2 ` +
                      hargaCustomToggle
                    }>
                    Costum
                  </button>
                </div>

                {hargaToggle == "custom" ? (
                  <>
                    <div className='flex flex-col items-center text-black md:gap-y-2'>
                      <p className='font-medium text-white md:text-xl'>From</p>
                      <input
                        type='number'
                        className='form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2'
                        value={limitHarga.harga_gte || undefined}
                        onChange={(e) =>
                          setLimitHarga({
                            ...limitHarga,
                            harga_gte: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                      <p className='font-medium text-white md:text-xl'>to</p>
                      <input
                        type='number'
                        className='form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2'
                        value={limitHarga.harga_lte || undefined}
                        onChange={(e) =>
                          setLimitHarga({
                            ...limitHarga,
                            harga_lte: parseInt(e.target.value) || undefined,
                          })
                        }
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className='flex gap-x-2 items-center '>
                      <input
                        type='radio'
                        className='form-input  md:w-9 md:h-9'
                        checked={
                          limitHarga.harga_gte === 0 &&
                          limitHarga.harga_lte === 250000
                        }
                        onChange={() =>
                          setLimitHarga({
                            harga_gte: 0,
                            harga_lte: 250000,
                          })
                        }
                      />
                      <label className='md:text-xl' htmlFor=''>
                        0 - 250.000
                      </label>
                    </div>
                    <div className='flex gap-x-2 items-center '>
                      <input
                        type='radio'
                        className='form-input  md:w-9 md:h-9'
                        checked={
                          limitHarga.harga_gte === 250000 &&
                          limitHarga.harga_lte === 1000000
                        }
                        onChange={() =>
                          setLimitHarga({
                            harga_gte: 250000,
                            harga_lte: 1000000,
                          })
                        }
                      />
                      <label className='md:text-xl' htmlFor=''>
                        250.000 - 1.000.000
                      </label>
                    </div>
                    <div className='flex gap-x-2 items-center '>
                      <input
                        type='radio'
                        className='form-input  md:w-9 md:h-9'
                        checked={
                          limitHarga.harga_gte === 1000000 &&
                          limitHarga.harga_lte === 3000000
                        }
                        onChange={() =>
                          setLimitHarga({
                            harga_gte: 1000000,
                            harga_lte: 3000000,
                          })
                        }
                      />
                      <label className='md:text-xl' htmlFor=''>
                        1.000.000 - 3.000.000
                      </label>
                    </div>
                    <div className='flex gap-x-2 items-center '>
                      <input
                        type='radio'
                        className='form-input  md:w-9 md:h-9'
                        checked={
                          limitHarga.harga_gte === 3000000 &&
                          limitHarga.harga_lte === undefined
                        }
                        onChange={() =>
                          setLimitHarga({
                            harga_gte: 3000000,
                            harga_lte: undefined,
                          })
                        }
                      />
                      <label className='md:text-xl' htmlFor=''>
                        3.000.000 ++
                      </label>
                    </div>
                  </>
                )}
              </div>
              <button
                type='button'
                onClick={() => setFilterToggle(!filterToggle)}
                className='px-4 py-0.5 rounded bg-main-3  text-black font-semibold mx-auto mt-auto md:px-8 md:py-2 md:mb-5 md:text-2xl md:border border-black'>
                Apply
              </button>
            </div>
          </motion.div>
        </Form>
      </section>
      <main className='grid grid-cols-2 p-5 gap-5 gap-y-9 md:grid-cols-3'>
        <div className='row-span-3 hidden lg:block '>
          <div className='bg-main-1 w-full h-full p-3 rounded-lg text-white overflow-y-auto hidden flex-col md:gap-y-9 lg:flex'>
            <div
              onClick={() => setFilterToggle(!filterToggle)}
              className='absolute left-3 top-3 hover:text-red-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 md:w-12 md:h-12'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='grid grid-cols-2 gap-y-2 p-3 md:gap-y-5'>
              <p className='text-xl font-bold text-center col-span-2 mb-2 md:text-3xl'>
                Category
              </p>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => categoryHandle("baju")}
                  checked={categories.includes("baju")}
                />
                <label className='md:text-xl' htmlFor=''>
                  Baju
                </label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => categoryHandle("celana")}
                  checked={categories.includes("celana")}
                />
                <label className='md:text-xl' htmlFor=''>
                  Celana
                </label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => categoryHandle("sepatu")}
                  checked={categories.includes("sepatu")}
                />
                <label className='md:text-xl' htmlFor=''>
                  Sepatu
                </label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => categoryHandle("kalung")}
                  checked={categories.includes("kalung")}
                />
                <label className='md:text-xl' htmlFor=''>
                  Kalung
                </label>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-y-2 p-3 md:gap-y-5'>
              <p className='text-xl font-bold text-center col-span-2 mb-2 md:text-3xl'>
                Brand
              </p>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  id='adidas'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => brandHandle("adidas")}
                  checked={brands.includes("adidas")}
                />
                <label className='md:text-xl' htmlFor='adidas'>
                  Adidas
                </label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  id='converse'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => brandHandle("converse")}
                  checked={brands.includes("converse")}
                />
                <label className='md:text-xl' htmlFor='converse'>
                  Converse
                </label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  id='ventela'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => brandHandle("ventela")}
                  checked={brands.includes("ventela")}
                />
                <label className='md:text-xl' htmlFor='ventela'>
                  Ventela
                </label>
              </div>
              <div className='flex gap-x-2 items-center '>
                <input
                  type='checkbox'
                  id='gucci'
                  className='form-input md:w-9 md:h-9'
                  onChange={() => brandHandle("gucci")}
                  checked={brands.includes("gucci")}
                />
                <label className='md:text-xl' htmlFor='gucci'>
                  Gucci
                </label>
              </div>
            </div>
            <div className='flex flex-col gap-y-2 p-3'>
              <p className='text-xl font-bold text-center col-span-2 mb-2 md:text-3xl'>
                Harga
              </p>
              <div className='mx-auto text-center mb-2'>
                <button
                  type='button'
                  onClick={() => {
                    setLimitHarga({
                      harga_lte: undefined,
                      harga_gte: undefined,
                    });
                    setHargaToggle("auto");
                  }}
                  className={
                    "px-2 rounded-l py-0.5 md:px-5 md:py-2 " + hargaAutoToggle
                  }>
                  Auto
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setLimitHarga({
                      harga_lte: undefined,
                      harga_gte: undefined,
                    });
                    setHargaToggle("custom");
                  }}
                  className={
                    `px-2 rounded-r py-0.5 md:px-5 md:py-2 ` + hargaCustomToggle
                  }>
                  Costum
                </button>
              </div>

              {hargaToggle == "custom" ? (
                <>
                  <div className='flex flex-col items-center text-black md:gap-y-2'>
                    <p className='font-medium text-white md:text-xl'>From</p>
                    <input
                      type='number'
                      className='form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2'
                      value={limitHarga.harga_gte || undefined}
                      onChange={(e) =>
                        setLimitHarga({
                          ...limitHarga,
                          harga_gte: parseInt(e.target.value) || 0,
                        })
                      }
                    />
                    <p className='font-medium text-white md:text-xl'>to</p>
                    <input
                      type='number'
                      className='form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2'
                      value={limitHarga.harga_lte || undefined}
                      onChange={(e) =>
                        setLimitHarga({
                          ...limitHarga,
                          harga_lte: parseInt(e.target.value) || undefined,
                        })
                      }
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className='flex gap-x-2 items-center '>
                    <input
                      id='lt2.5'
                      type='radio'
                      className='form-input  md:w-9 md:h-9'
                      checked={
                        limitHarga.harga_gte === 0 &&
                        limitHarga.harga_lte === 250000
                      }
                      onChange={() =>
                        setLimitHarga({ harga_gte: 0, harga_lte: 250000 })
                      }
                    />
                    <label className='md:text-xl' htmlFor='lt2.5'>
                      0 - 250.000
                    </label>
                  </div>
                  <div className='flex gap-x-2 items-center '>
                    <input
                      id='bt2.5a1'
                      type='radio'
                      className='form-input  md:w-9 md:h-9'
                      checked={
                        limitHarga.harga_gte === 250000 &&
                        limitHarga.harga_lte === 1000000
                      }
                      onChange={() =>
                        setLimitHarga({ harga_gte: 250000, harga_lte: 1000000 })
                      }
                    />
                    <label className='md:text-xl' htmlFor='bt2.5a1'>
                      250.000 - 1.000.000
                    </label>
                  </div>
                  <div className='flex gap-x-2 items-center '>
                    <input
                      id='bt1a3'
                      type='radio'
                      className='form-input  md:w-9 md:h-9'
                      checked={
                        limitHarga.harga_gte === 1000000 &&
                        limitHarga.harga_lte === 3000000
                      }
                      onChange={() =>
                        setLimitHarga({
                          harga_gte: 1000000,
                          harga_lte: 3000000,
                        })
                      }
                    />
                    <label className='md:text-xl' htmlFor='bt1a3'>
                      1.000.000 - 3.000.000
                    </label>
                  </div>
                  <div className='flex gap-x-2 items-center '>
                    <input
                      type='radio'
                      id='gt3'
                      className='form-input  md:w-9 md:h-9'
                      checked={
                        limitHarga.harga_gte === 3000000 &&
                        limitHarga.harga_lte === undefined
                      }
                      onChange={() =>
                        setLimitHarga({
                          harga_gte: 3000000,
                          harga_lte: undefined,
                        })
                      }
                    />
                    <label className='md:text-xl' htmlFor='gt3'>
                      3.000.000 ++
                    </label>
                  </div>
                </>
              )}
            </div>
            <button
              type='button'
              onClick={() => setFilterToggle(!filterToggle)}
              className='px-4 py-0.5 rounded bg-main-3  text-black font-semibold mx-auto mt-auto md:px-8 md:py-2 md:mb-5 md:text-2xl md:border border-black'>
              Apply
            </button>
          </div>
        </div>
        <ModalItem />
        <ModalItem />
        <ModalItem />
        <ModalItem />
        <ModalItem />
        <ModalItem />
        <ModalItem />
      </main>
    </>
  );
}
