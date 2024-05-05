import { motion } from "framer-motion";
import HomeNav from "../../assets/svg/HomeNav";
import Shop from "../../assets/svg/Shop";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Bars3 from "../../assets/svg/Bars3";
import User from "../../assets/svg/User";
import Cart from "../../assets/svg/Cart";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/redux/slice/Auth";
import useGetUser from "../../hooks/useGetUser";
import EditPhoto from "../../components/profile/EditPhoto";
import Camera from "../../assets/svg/Camera";
import { useFetchGet } from "../../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { myAxios } from "../../utils/axios";

export default function Profile() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [editPhotoNotifToggle, setEditPhotoNotifToggle] = useState(false);
  const [editPhotoTagIsOn, setEditPhotoTagIsOn] = useState(false);
  const [detailToggle, setDetailToggle] = useState(false);
  const [buyHistory, setBuyHistory] = useFetchGet("/api/penjualan/history");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detailItems, setDetailsItems] = useFetchGet("/api/penjualan/items");

  const toggleLogout = () => {
    myAxios
      .delete("/api/users/logout", {
        withCredentials: true,
      })
      .then(() => {
        navigate("/login", { state: "Berhasil logout" });
        dispatch(logout());
      });
  };
  const deleteHistory = (id_penjualan) => {
    myAxios
      .delete("/api/penjualan/" + id_penjualan, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.description, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "light",
        });
        myAxios
          .get("/api/penjualan/history", { withCredentials: true })
          .then((res) => setBuyHistory(res.data.data));
      })
      .catch((err) => console.log(err.response));
  };
  const user = useGetUser();
  return (
    <>
      <motion.nav
        animate={{ x: navbarToggle ? 0 : "-100vh" }}
        className="fixed bg-black bottom-0 left-0 top-0 w-1/2 z-40 md:w-1/3 text-white p-3 -translate-x-[100vh]"
      >
        <p className="font-bold text-xl text-center mb-5 md:text-3xl">
          Navigation
        </p>
        <ul className="flex flex-col justify-evenly gap-y-4">
          <div className="flex gap-x-2 items-center">
            <HomeNav />
            <li className="font-semibold text-xl hover:text-white md:text-2xl">
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </div>
          <div className="flex gap-x-2 items-center">
            <User />
            <li className="font-semibold text-xl hover:text-white md:text-2xl">
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </div>
          {user.role === "admin" && (
            <div className="flex gap-x-2 items-center">
              <User />
              <li className="font-semibold text-xl hover:text-white md:text-2xl">
                <NavLink to={"/admin"}>Admin</NavLink>
              </li>
            </div>
          )}
          <div className="flex gap-x-2 items-center">
            <Shop />
            <li className="font-semibold text-xl hover:text-white md:text-2xl">
              <NavLink to={"/toko"}>Toko</NavLink>
            </li>
          </div>
          <div className="flex gap-x-2 items-center">
            <Cart className={"w-6 h-6"} />
            <li className="font-semibold text-xl hover:text-white md:text-2xl">
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
          </div>
        </ul>
        <button
          onClick={() => setNavbarToggle(!navbarToggle)}
          className="mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg md:px-4 md:py-2 md:text-lg md:mb-6"
        >
          Close
        </button>
      </motion.nav>

      <div className="flex p-5 items-center max-w-full  justify-between">
        <div onClick={() => setNavbarToggle(!navbarToggle)}>
          <Bars3 className={"w-9 h-9"} />
        </div>
        <p className="text-xl font-bold">Profile {user.username}</p>
      </div>

      <div className="  flex flex-col p-3 items-center justify-center w-full gap-3 lg:flex-row lg:justify-items-center">
        <div className="w-1/2 overflow-hidden flex justify-center items-center">
          <div className="relative overflow-hidden max-w-full h-auto flex rounded-full border-2 border-black justify-center items-center lg:max-w-[68%] lg:shadow-xl group cursor-pointer">
            {user.photo ? (
              <img
                src={user.photo}
                alt="user"
                className="drop-shadow-lg lg:w-full rounded-full"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            <div
              onClick={() => setEditPhotoNotifToggle(!editPhotoNotifToggle)}
              className="group-hover:block hidden opacity-70 absolute bg-black top-0 left-0 bottom-0 right-0"
            ></div>
            <Camera
              setEditPhotoNotifToggle={setEditPhotoNotifToggle}
              editPhotoNotifToggle={editPhotoNotifToggle}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-5 w-1/2">
          <div className="text-center">
            <p className="font-bold text-2xl font-geologica md:text-5xl lg:text-4xl">
              {user.fullname}
            </p>
            <p className="md:text-2xl font-medium">{user.email}</p>
          </div>
          <Link
            to="/edit-profile"
            className="text-center font-medium text-blue-600 -my-4 md:text-lg"
          >
            Edit Profile
          </Link>
          <button
            onClick={toggleLogout}
            className="px-4 py-1 font-medium rounded-2xl bg-red-600 mt-3 md:px-6 md:py-2 md:text-lg md:font-semibold lg:text-center w-fit"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="text-center w-fit px-5 py-2 bg-slate-100 shadow-md shadow-slate-400 md:px-9 md:py-4 md:text-xl">
          <strong>Balance</strong>
          <p>
            Rp {user.wallet?.balance && numberWithCommas(user.wallet.balance)}
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-4 w-full gap-y-3 md:gap-y-5">
        <p className="font-bold text-2xl font-geologica px-3 text-center sm:text-sky-600 md:text-3xl">
          Buy History
        </p>
        <div className="w-full lg:mt-3">
          <div className="inline-block w-full ">
            <div className="overflow-x-auto">
              <table className="w-full text-center text-sm ">
                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 w-1/6"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 w-2/6"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 w-1/6"
                    >
                      Items
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 w-2/6"
                    >
                      Total Price
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 w-2/6"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {buyHistory &&
                    buyHistory.map((b, i) => {
                      const displayDate = getDate(b.tanggal_beli);
                      let totalPrice = 0;

                      b.item_terjual.forEach((d) => {
                        totalPrice += d.price;
                      });

                      return (
                        <tr
                          key={i}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">
                            {i + 1}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">
                            {displayDate}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {b.item_terjual.length}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {numberWithCommas(totalPrice)}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4 flex gap-x-4 justify-evenly">
                            <button
                              onClick={() => {
                                setDetailToggle(!detailToggle);
                                myAxios
                                  .get(
                                    "/api/penjualan/items?id_penjualan=" +
                                      b.id_penjualan,
                                    {
                                      withCredentials: true,
                                    }
                                  )
                                  .then((res) => {
                                    setDetailsItems(res.data.data);
                                  })
                                  .catch((err) =>
                                    console.log(err.response.data)
                                  );
                              }}
                              className="hover:bg-sky-400 px-5 py-1 bg-sky-600 rounded-sm font-medium"
                            >
                              Detail
                            </button>
                            <button
                              onClick={() => deleteHistory(b.id_penjualan)}
                              className="hover:bg-red-400 px-5 py-1 bg-red-600 rounded-sm font-medium"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {detailToggle && (
        <>
          <div
            onClick={() => setDetailToggle(!detailToggle)}
            className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm z-10"
          ></div>
          <div className="fixed w-4/5 flex flex-col z-20 left-1/2 top-1/2 max-h-[500px] -translate-x-1/2 -translate-y-1/2 p-5 bg-gray-500 rounded-md shadow shadow-slate-700 gap-y-6 overflow-y-auto lg:w-3/5">
            <p className="font-bold text-xl text-center md:text-3xl">Detail</p>
            {detailItems.map((d) => {
              return (
                <div
                  key={d.id}
                  className="flex justify-between items-center md:p-5 lg:px-8"
                >
                  <img
                    src={d.items.photo_item}
                    alt="shoes"
                    className="w-2/6 md:w-1/5"
                  />
                  <div className="flex flex-col items-center text-sm md:text-xl">
                    <p className="font-bold">
                      {d.items.name} ({d.quantity}x)
                    </p>
                    <p className="font-medium">
                      Price : {numberWithCommas(d.price)}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* <div className='flex justify-between items-center md:p-5 lg:px-8'>
              <img src={shoes} alt='shoes' className='w-2/6 md:w-1/5' />
              <div className='flex flex-col items-center text-sm md:text-xl'>
                <p className='font-bold'>Sepatu x12 (x3)</p>
                <p className='font-medium'>Price : 1000000</p>
              </div>
            </div>
            <div className='flex justify-between items-center md:p-5 lg:px-8'>
              <img src={shoes} alt='shoes' className='w-2/6 md:w-1/5' />
              <div className='flex flex-col items-center text-sm md:text-xl'>
                <p className='font-bold'>Sepatu x12 (x3)</p>
                <p className='font-medium'>Price : 1000000</p>
              </div>
            </div>
            <div className='flex justify-between items-center md:p-5 lg:px-8'>
              <img src={shoes} alt='shoes' className='w-2/6 md:w-1/5' />
              <div className='flex flex-col items-center text-sm md:text-xl'>
                <p className='font-bold'>Sepatu x12 (x3)</p>
                <p className='font-medium'>Price : 1000000</p>
              </div>
            </div> */}
          </div>
        </>
      )}

      {editPhotoTagIsOn && (
        <div className={"fixed z-50 "}>
          <div className="fixed  backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-20"></div>
          <EditPhoto
            editPhotoTagIsOn={editPhotoTagIsOn}
            setEditPhotoTagIsOn={setEditPhotoTagIsOn}
          />
        </div>
      )}
      {editPhotoNotifToggle && (
        <>
          <div className="fixed  backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-20"></div>
          <div className="fixed -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-4/5 h-fit z-30 bg-black text-white rounded-md p-4 flex justify-center items-center  gap-y-5 flex-col sm:py-8 sm:w-3/5 lg:py-12 lg:w-2/5">
            <p className="font-semibold text-lg text-center md:text-xl">
              Ingin Mengubah Foto Profile ?
            </p>
            <div className="flex justify-evenly w-full items-center">
              <button
                onClick={() => {
                  setEditPhotoTagIsOn(!editPhotoTagIsOn);
                  setEditPhotoNotifToggle(!editPhotoNotifToggle);
                }}
                className="px-5 py-1 bg-orange-600 rounded-md font-medium lg:px-8 lg:py-2 lg:text-xl "
              >
                Yes
              </button>
              <button
                onClick={() => setEditPhotoNotifToggle(!editPhotoNotifToggle)}
                className="px-5 py-1 bg-orange-600 rounded-md font-medium lg:px-8 lg:py-2 lg:text-xl"
              >
                No
              </button>
              <button
                onClick={() =>
                  myAxios
                    .delete("/api/users/empty-photo", {
                      withCredentials: true,
                    })
                    .then((res) => {
                      return navigate(0);
                    })
                    .catch((err) => console.log(err))
                }
                className="px-5 py-1 bg-orange-600 rounded-md font-medium lg:px-8 lg:py-2 lg:text-xl"
              >
                Kosongkan
              </button>
            </div>
          </div>
        </>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
}

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function getDate(tanggal) {
  const date = new Date(tanggal);
  const dateToDisplay = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${
    date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
  }:${date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}`;

  return dateToDisplay;
}
