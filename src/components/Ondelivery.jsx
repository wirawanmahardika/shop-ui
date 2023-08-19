import { DeliveryItem } from "./DeliveryItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { myAxios } from "../utils/axios";

export default function OnDelivery({
  status,
  items,
  id_penjualan,
  setItems,
}) {
  const pengemasan = `w-5 h-5 rounded-full bg-black relative md:w-7 md:h-7 ${
    status === "pengemasan"
      ? "bg-orange-600"
      : status === "dikirim" || status === "sampai"
      ? " bg-green-600"
      : " bg-black"
  }`;

  const hr1 = `h-1 w-1/2 sm:w-1/3 ${
    status === "dikirim" || status === "sampai" ? " bg-green-600" : " bg-black"
  }`;

  const pengiriman = `w-5 h-5 rounded-full bg-black relative md:w-7 md:h-7 ${
    status === "dikirim"
      ? "bg-orange-600"
      : status === "sampai"
      ? " bg-green-600"
      : " bg-black"
  }`;

  const hr2 = `h-1 bg-black w-1/2 sm:w-1/3 ${
    status === "sampai" ? " bg-green-600" : " bg-black"
  }`;

  const sampai = `w-5 h-5 rounded-full bg-black relative md:w-7 md:h-7 ${
    status === "sampai" ? " bg-green-600" : " bg-black"
  }`;

  const changeStatusPenjualan = () => {
    if (status === "sampai") {
      myAxios
        .patch(
          "/api/penjualan/terima",
          { id_penjualan },
          { withCredentials: true }
        )
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
            .get("/api/penjualan", {
              withCredentials: true,
            })
            .then((res) => {
              setItems(res.data.data);
            });
        })
        .catch((err) => console.log(err.response));
    }
  };

  const totalPrice = () => {
    let total = 0;
    for (const item of items) {
      total += item.price;
    }
    return numberWithCommas(total);
  };
  return (
    <>
      <div className='flex flex-col items-center pt-20 gap-y-5 bg-gray-100 '>
        <h1 className='text-2xl font-geologica font-bold md:text-3xl lg:text-5xl '>
          On Delivery
        </h1>
        <div className='mx-auto flex flex-col items-center gap-y-5 bg-white shadow-md w-4/5 p-5 rounded-md py-8 lg:pt-14 lg:w-3/5'>
          <div className='flex-col gap-y-8 flex w-full'>
            <div className='flex w-full justify-center items-center px-6 mb-6'>
              <div className={pengemasan}>
                <p className='absolute capitalize left-1/2 -translate-x-1/2 -translate-y-1/2 top-[170%] text-xs font-medium md:text-base'>
                  packaging
                </p>
              </div>
              <hr className={hr1} />
              <div className={pengiriman}>
                <p className='absolute capitalize left-1/2 -translate-x-1/2 -translate-y-1/2 top-[170%] text-xs font-medium md:text-base'>
                  Pengiriman
                </p>
              </div>
              <hr className={hr2} />
              <div className={sampai}>
                <p className='absolute capitalize left-1/2 -translate-x-1/2 -translate-y-1/2 top-[170%] text-xs font-medium md:text-base'>
                  Sampai
                </p>
              </div>
            </div>
            {items.length &&
              items.map((i, index) => {
                return (
                  <DeliveryItem
                    key={index}
                    name={i.name}
                    photo={i.photo_item}
                    price={i.price}
                    quantity={i.quantity}
                  />
                );
              })}
            <p className='text-center font-bold text-lg'>
              Total : {items && items.length !== 0 && totalPrice()}
            </p>
            <button
              disabled={status !== "sampai"}
              onClick={changeStatusPenjualan}
              className={`px-8 py-1 rounded text-white font-medium w-fit mx-auto ${
                status === "sampai"
                  ? "bg-red-600 hover:bg-green-600"
                  : " bg-gray-600"
              }`}>
              Terima
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme='light'
      />
    </>
  );
}

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
