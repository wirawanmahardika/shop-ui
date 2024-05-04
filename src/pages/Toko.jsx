import logo from "../assets/logo.png";
import Bars3 from "../assets/svg/Bars3";
import Cart from "../assets/svg/Cart";
import { Form, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Filter from "../assets/svg/Filter";
import BoxItem from "../components/toko/BoxItem";
import { useState } from "react";
import { motion } from "framer-motion";
import HomeNav from "../assets/svg/HomeNav";
import Shop from "../assets/svg/Shop";
import User from "../assets/svg/User";
import { useFetchGet } from "../hooks/useFetch";
import useGetUser from "../hooks/useGetUser";
import Login from "../assets/svg/Login";
import signup from "../assets/signup.png";
import { myAxios } from "../utils/axios";
import ModalItem from "../components/Toko/ModalItem";

export default function Toko() {
  const navigate = useNavigate();
  const [brandForFilter] = useFetchGet("/api/brands");
  const [data, setData] = useFetchGet("/api/items/get-all");
  const [categoriesForFilter] = useFetchGet("/api/category");
  const [filterToggle, setFilterToggle] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [hargaToggle, setHargaToggle] = useState("auto");
  const hargaAutoToggle = hargaToggle === "auto" ? "bg-main-3" : "bg-black";
  const hargaCustomToggle = hargaToggle === "custom" ? "bg-main-3" : "bg-black";
  const [checkoutToggle, setCheckoutToggle] = useState(false);

  const [limitHarga, setLimitHarga] = useState({
    harga_lte: undefined,
    harga_gte: undefined,
  });

  const [nameItem, setNameItem] = useState("");
  const nameItemHandle = (e) => setNameItem(e.target.value);

  const [brands, setBrands] = useState([]);
  const brandHandle = (id_brand) => {
    if (brands.includes(id_brand)) {
      const brandFiltered = brands.filter((e) => e !== id_brand);
      setBrands(brandFiltered);
    } else {
      setBrands([...brands, id_brand]);
    }
  };

  const [categories, setCategories] = useState([]);
  const categoryHandle = (id_category) => {
    if (categories.includes(id_category)) {
      const brandFiltered = categories.filter((e) => e !== id_category);
      setCategories(brandFiltered);
    } else {
      setCategories([...categories, id_category]);
    }
  };

  const [checkoutDetail, setCheckoutDetail] = useState(null);

  const checkoutToggleForDetail = (data) => {
    setCheckoutToggle(!checkoutToggle);
    setCheckoutDetail(data);
  };

  const getData = () => {
    const data = {
      brands,
      categories,
      name: nameItem,
      harga_gte: limitHarga.harga_gte,
      harga_lte: limitHarga.harga_lte,
    };
    myAxios.post("/api/items/search", data).then((res) => {
      setData(res.data.data);
    });
  };

  const resetFilter = () => {
    setBrands([]);
    setCategories([]);
    setLimitHarga({ harga_lte: undefined, harga_gte: undefined });
  };

  const resetLimitHargaAndChangeMode = (mode) => {
    setLimitHarga({
      harga_lte: undefined,
      harga_gte: undefined,
    });
    setHargaToggle(mode);
  };

  const user = useGetUser();
  return (
    <>
      {/* Nav for mobile size */}
      <motion.nav
        animate={{ x: navbarToggle ? 0 : "-100vh" }}
        className="fixed bg-black bottom-0 left-0 top-0 w-1/2 z-40 text-white p-3 -translate-x-[100vh] md:hidden"
      >
        <p className="font-bold text-xl text-center mb-5">Navigation</p>
        <ul className="flex flex-col justify-evenly gap-y-4">
          <div className="flex gap-x-2 items-center">
            <HomeNav />
            <li className="font-semibold text-xl hover:text-white">
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </div>
          <div className="flex gap-x-2 items-center">
            <Shop />
            <li className="font-semibold text-xl hover:text-white">
              <NavLink to={"/toko"}>Toko</NavLink>
            </li>
          </div>
          {user.isLoggedIn ? (
            <>
              <div className="flex gap-x-2 items-center">
                <User />
                <li className="font-semibold text-xl hover:text-white">
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
              </div>
              {user.role === "admin" && (
                <div className="flex gap-x-2 items-center">
                  <User />
                  <li className="font-semibold text-xl hover:text-white">
                    <NavLink to={"/admin"}>Admin</NavLink>
                  </li>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex gap-x-2 items-center">
                <Login />
                <li className="font-semibold text-xl hover:text-white">
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
              </div>
              <div className="flex gap-x-2 items-center">
                <img src={signup} alt="signup" className="w-6 h-6" />
                <li className="font-semibold text-xl hover:text-white">
                  <NavLink to={"/signup"}>Signup</NavLink>
                </li>
              </div>
            </>
          )}
        </ul>
        <button
          onClick={() => setNavbarToggle(!navbarToggle)}
          className="mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg"
        >
          Close
        </button>
      </motion.nav>

      <header className="flex p-5 items-center justify-between md:p-9">
        <div className="flex gap-x-3 items-center">
          <img
            src={logo}
            alt="tokosediaLogo"
            className="w-1/12 sm:w-[5%] md:w-[8%] lg:w-[4%]"
          />
          <h2 className="font-bold text-xl uppercase md:text-3xl font-poetsenOne">
            TokoSedia
          </h2>
        </div>
        <div className="flex gap-x-2 items-center md:justify-end">
          {/* nav untuk size tablet */}
          <nav className="mr-3 font-semibold hidden md:block md:text-xl ">
            <ul className="flex gap-x-3">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/toko">Toko</NavLink>
              {user.isLoggedIn ? (
                <>
                  <NavLink to="/profile">Profile</NavLink>
                  {user.role === "admin" && (
                    <NavLink to="/admin">Admin</NavLink>
                  )}
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/signup">Signup</NavLink>
                </>
              )}
            </ul>
          </nav>
          <NavLink to={"/cart"}>
            <Cart className={"w-7 h-7 md:w-8 md:h-8"} />
          </NavLink>
          {user.isLoggedIn && user.photo ? (
            <img
              onClick={() => navigate("/profile")}
              src={user.photo}
              alt="profile"
              className="w-9 h-9 hidden md:block rounded-full cursor-pointer"
            />
          ) : (
            <User
              className={"w-7 h-7 cursor-pointer"}
              clickHandler={navigate}
            />
          )}
          <div
            className="md:hidden"
            onClick={() => setNavbarToggle(!navbarToggle)}
          >
            <Bars3 strokeColor={"black"} className={"w-8 h-8 md:w-10"} />
          </div>
        </div>
      </header>

      <section className="w-full overflow-hidden">
        <Form className="p-5 pt-2 flex-col gap-y-1 flex">
          <h2 className="font-bold  text-2xl -mb-1 font-roboto sm:text-3xl  sm:text-red-600 md:text-3xl md:text-main-1 lg:text-yellow-600 lg:text-3xl">
            Search Item
          </h2>
          <div className="flex md:h-10 items-stretch lg:h-10">
            <input
              type="text"
              className="form-input md:text-xl sm:py-2 py-1 w-4/5 md:py-3 rounded-l-md bg-main-1 placeholder-gray-200 shadow-xl focus:border-main-2 placeholder-opacity-70 text-white text-sm lg:w-3/5"
              placeholder="Type here"
              value={nameItem}
              onChange={nameItemHandle}
            />
            <div className="form-input py-1 md:text-xl md:py-2 rounded-r-md bg-black placeholder-gray-200 shadow-xl focus:border-main-2 placeholder-opacity-70 text-white text-sm sm:py-2 flex items-center justify-center">
              <svg
                onClick={getData}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5 cursor-pointer self-stretch md:w-6 md:h-6 my-auto lg:w-6 lg:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div
              className="ml-1 flex md:ml-3 lg:hidden"
              onClick={() => setFilterToggle(!filterToggle)}
            >
              <Filter className={"w-8 h-8 md:w-10 md:h-10 my-auto"} />
            </div>
          </div>
          <motion.div
            animate={{ x: filterToggle ? "0" : "100vw" }}
            className=" fixed right-0 top-0 bottom-0 w-2/3 lg:hidden"
          >
            <div className="bg-main-1 w-full h-full p-3 text-white overflow-y-auto flex flex-col md:gap-y-9 lg:hidden">
              <div
                onClick={() => setFilterToggle(!filterToggle)}
                className="absolute left-3 top-3 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-12 md:h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-y-2 p-3 md:gap-y-5">
                <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
                  Category
                </p>
                {categoriesForFilter &&
                  categoriesForFilter.map((d) => {
                    return (
                      <div
                        className="flex gap-x-2 items-center "
                        key={d.id_category}
                      >
                        <input
                          type="checkbox"
                          id={d.category}
                          className="form-input md:w-9 md:h-9"
                          onChange={() => categoryHandle(d.id_category)}
                          checked={categories.includes(d.id_category)}
                        />
                        <label className="md:text-xl" htmlFor={d.category}>
                          {d.category}
                        </label>
                      </div>
                    );
                  })}
              </div>
              <div className="grid grid-cols-2 gap-y-2 p-3 md:gap-y-5">
                <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
                  Brand
                </p>
                {brandForFilter &&
                  brandForFilter.map((b) => {
                    return (
                      <div
                        className="flex gap-x-2 items-center "
                        key={b.id_brand}
                      >
                        <input
                          type="checkbox"
                          id={b.id_brand}
                          className="form-input md:w-9 md:h-9"
                          onChange={() => brandHandle(b.id_brand)}
                          checked={brands.includes(b.id_brand)}
                        />
                        <label className="md:text-xl" htmlFor={b.id_brand}>
                          {b.name_brand}
                        </label>
                      </div>
                    );
                  })}
              </div>
              <div className="flex flex-col gap-y-2 p-3">
                <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
                  Harga
                </p>
                <div className="mx-auto text-center mb-2">
                  <button
                    type="button"
                    onClick={() => resetLimitHargaAndChangeMode("auto")}
                    className={
                      "px-2 rounded-l py-0.5 md:px-5 md:py-2 " + hargaAutoToggle
                    }
                  >
                    Auto
                  </button>
                  <button
                    type="button"
                    onClick={() => resetLimitHargaAndChangeMode("custom")}
                    className={
                      `px-2 rounded-r py-0.5 md:px-5 md:py-2 ` +
                      hargaCustomToggle
                    }
                  >
                    Custom
                  </button>
                </div>

                {hargaToggle == "custom" ? (
                  <>
                    <div className="flex flex-col items-center text-black md:gap-y-2">
                      <p className="font-medium text-white md:text-xl">From</p>
                      <input
                        type="number"
                        className="form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2"
                        value={limitHarga.harga_gte || undefined}
                        onChange={(e) =>
                          setLimitHarga({
                            ...limitHarga,
                            harga_gte: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                      <p className="font-medium text-white md:text-xl">to</p>
                      <input
                        type="number"
                        className="form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2"
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
                    <div className="flex gap-x-2 items-center ">
                      <input
                        type="radio"
                        className="form-input  md:w-9 md:h-9"
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
                      <label className="md:text-xl" htmlFor="">
                        0 - 250.000
                      </label>
                    </div>
                    <div className="flex gap-x-2 items-center ">
                      <input
                        type="radio"
                        className="form-input  md:w-9 md:h-9"
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
                      <label className="md:text-xl" htmlFor="">
                        250.000 - 1.000.000
                      </label>
                    </div>
                    <div className="flex gap-x-2 items-center ">
                      <input
                        type="radio"
                        className="form-input  md:w-9 md:h-9"
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
                      <label className="md:text-xl" htmlFor="">
                        1.000.000 - 3.000.000
                      </label>
                    </div>
                    <div className="flex gap-x-2 items-center ">
                      <input
                        type="radio"
                        className="form-input  md:w-9 md:h-9"
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
                      <label className="md:text-xl" htmlFor="">
                        3.000.000 ++
                      </label>
                    </div>
                  </>
                )}
              </div>
              <button
                type="button"
                onClick={resetFilter}
                className="px-4 py-0.5 rounded bg-main-3  text-black font-semibold mx-auto mt-auto md:px-8 md:py-2 md:mb-5 md:text-2xl md:border border-black"
              >
                Reset
              </button>
            </div>
          </motion.div>
        </Form>
      </section>
      <main className="grid grid-cols-2 p-5 gap-5 gap-y-9 md:grid-cols-3">
        <div className="row-span-3 hidden lg:block ">
          <div className="bg-main-1 w-full h-full p-3 rounded-lg text-white overflow-y-auto hidden flex-col md:gap-y-9 lg:flex">
            <div
              onClick={() => setFilterToggle(!filterToggle)}
              className="absolute left-3 top-3 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-12 md:h-12 lg:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-y-2 p-3 md:gap-y-5">
              <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
                Category
              </p>
              {categoriesForFilter &&
                categoriesForFilter.map((d) => {
                  return (
                    <div
                      className="flex gap-x-2 items-center "
                      key={d.id_category}
                    >
                      <input
                        type="checkbox"
                        className="form-input md:w-9 md:h-9"
                        onChange={() => categoryHandle(d.id_category)}
                        checked={categories.includes(d.id_category)}
                      />
                      <label className="md:text-xl" htmlFor="">
                        {d.category}
                      </label>
                    </div>
                  );
                })}
            </div>
            <div className="grid grid-cols-2 gap-y-2 p-3 md:gap-y-5">
              <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
                Brand
              </p>
              {brandForFilter &&
                brandForFilter.map((b) => {
                  return (
                    <div
                      className="flex gap-x-2 items-center "
                      key={b.id_brand}
                    >
                      <input
                        type="checkbox"
                        id={b.id_brand}
                        className="form-input md:w-9 md:h-9"
                        onChange={() => brandHandle(b.id_brand)}
                        checked={brands.includes(b.id_brand)}
                      />
                      <label className="md:text-xl" htmlFor={b.id_brand}>
                        {b.name_brand}
                      </label>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-col gap-y-2 p-3">
              <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
                Harga
              </p>
              <div className="mx-auto text-center mb-2">
                <button
                  type="button"
                  onClick={() => {
                    setLimitHarga({
                      harga_lte: undefined,
                      harga_gte: undefined,
                    });
                    setHargaToggle("auto");
                  }}
                  className={
                    "px-2 rounded-l py-0.5 md:px-5 md:py-2 " + hargaAutoToggle
                  }
                >
                  Auto
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLimitHarga({
                      harga_lte: undefined,
                      harga_gte: undefined,
                    });
                    setHargaToggle("custom");
                  }}
                  className={
                    `px-2 rounded-r py-0.5 md:px-5 md:py-2 ` + hargaCustomToggle
                  }
                >
                  Costum
                </button>
              </div>

              {hargaToggle == "custom" ? (
                <>
                  <div className="flex flex-col items-center text-black md:gap-y-2">
                    <p className="font-medium text-white md:text-xl">From</p>
                    <input
                      type="number"
                      className="form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2"
                      value={limitHarga.harga_gte || undefined}
                      onChange={(e) =>
                        setLimitHarga({
                          ...limitHarga,
                          harga_gte: parseInt(e.target.value) || 0,
                        })
                      }
                    />
                    <p className="font-medium text-white md:text-xl">to</p>
                    <input
                      type="number"
                      className="form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2"
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
                  <div className="flex gap-x-2 items-center ">
                    <input
                      id="lt2.5"
                      type="radio"
                      className="form-input  md:w-9 md:h-9"
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
                    <label className="md:text-xl" htmlFor="lt2.5">
                      0 - 250.000
                    </label>
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <input
                      id="bt2.5a1"
                      type="radio"
                      className="form-input  md:w-9 md:h-9"
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
                    <label className="md:text-xl" htmlFor="bt2.5a1">
                      250.000 - 1.000.000
                    </label>
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <input
                      id="bt1a3"
                      type="radio"
                      className="form-input  md:w-9 md:h-9"
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
                    <label className="md:text-xl" htmlFor="bt1a3">
                      1.000.000 - 3.000.000
                    </label>
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <input
                      type="radio"
                      id="gt3"
                      className="form-input  md:w-9 md:h-9"
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
                    <label className="md:text-xl" htmlFor="gt3">
                      3.000.000 ++
                    </label>
                  </div>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={resetFilter}
              className="px-4 py-0.5 rounded bg-main-3  text-black font-semibold mx-auto mt-auto md:px-8 md:py-2 md:mb-5 md:text-2xl md:border border-black"
            >
              Reset
            </button>
          </div>
        </div>
        {data &&
          data.map((item) => {
            return (
              <BoxItem
                id={item.id_item}
                price={item.price}
                name={item.name}
                rating={item.rating}
                key={item.id_item}
                stock={item.stock}
                image={item.photo_item}
                setToggle={checkoutToggleForDetail}
              />
            );
          })}
      </main>
      <div className={checkoutToggle ? "block" : "hidden"}>
        <ModalItem setToggle={checkoutToggleForDetail} data={checkoutDetail} />
      </div>
    </>
  );
}
