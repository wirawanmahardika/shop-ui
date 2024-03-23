import { resetCart } from "../../utils/redux/slice/CartItem";
import OnDelivery from "../../components/cart/Ondelivery";
import { useFetchGet } from "../../hooks/useFetch";
import { myAxios } from "../../utils/axios";
import CartItem from "../../components/cart/CartItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { numberWithCommas } from "../../utils/numberWithCommas";

export default function CartMain() {
    const dispatch = useDispatch();
    const [ondeliveryData, setOndeliveryData] = useFetchGet("/api/penjualan");
    const [subTotal, setSubTotal] = useState(0);
    const shippingCost = 15000;
    const data = useSelector((state) => state.cartItem);

    useEffect(() => {
        let count = 0;
        data.forEach((e) => {
            count += e.price * e.qty;
        });
        setSubTotal(count);
    }, [data]);

    const buyProcess = () => {
        const items = [];
        for (const item of data) {
            const i = {
                id_item: item.id,
                quantity: item.qty,
            };
            items.push(i);
        }

        myAxios
            .patch("/api/items/buy", { items }, { withCredentials: true })
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
                dispatch(resetCart());
                myAxios
                    .get("/api/penjualan", { withCredentials: true })
                    .then((res) => setOndeliveryData(res.data.data));
            })
            .catch((err) => {
                toast.error(err.response.data.description, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            });
    };

    const displayCartItem = data.map((d, i) => {
        return (
            <CartItem
                key={i}
                id={d.id}
                name={d.name}
                price={d.price}
                qty={d.qty}
                image={d.image}
                stock={d.stock}
            />
        );
    });

    return (
        <div className="bg-gray-100 pt-20 min-h-screen">
            <h1 className="mb-10 text-center text-2xl font-bold md:text-3xl lg:text-5xl font-geologica">
                Cart Items
            </h1>
            {data.length === 0 ? (
                <div className="text-3xl font-geologica font-bold text-center">
                    No Items in Check
                </div>
            ) : (
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">{displayCartItem}</div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">
                                Rp {numberWithCommas(subTotal)}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">
                                Rp {numberWithCommas(shippingCost)}
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">
                                    Rp{" "}
                                    {numberWithCommas(subTotal + shippingCost)}
                                </p>
                                <p className="text-sm text-gray-700">
                                    including VAT
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={buyProcess}
                            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                        >
                            Check out
                        </button>
                    </div>
                </div>
            )}

            {ondeliveryData.map((o, index) => {
                return (
                    <OnDelivery
                        key={index}
                        status={o.status}
                        tanggal_beli={o.tanggal_beli}
                        items={o.item_terjual}
                        setItems={setOndeliveryData}
                        id_penjualan={o.id_penjualan}
                    />
                );
            })}
        </div>
    );
}
