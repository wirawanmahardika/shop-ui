import { DeliveryItem } from "../all/DeliveryItem";

export default function PenjualanDetail({ toggle, setToggle, items }) {
    let price = 0;
    return (
        <>
            <div
                onClick={() => setToggle(!toggle)}
                className="fixed z-50 w-screen h-screen backdrop-blur-sm "
            ></div>
            <div className=" fixed z-50 w-3/5 rounded-md bg-white shadow-sm shadow-slate-500 min-h-[200px] center-fixed max-h-[80vh] overflow-y-auto flex flex-col gap-y-6 p-6 ">
                <h2 className="font-bold text-3xl text-center font-geologica">
                    Detail
                </h2>
                {items.length &&
                    items.map((d, i) => {
                        price += d.price * d.quantity;
                        return (
                            <DeliveryItem
                                key={i}
                                name={d.name}
                                photo={d.photo_item}
                                price={d.price}
                                quantity={d.quantity}
                            />
                        );
                    })}
                <p className="text-center font-roboto text-xl ">
                    Total Price : {numberWithCommas(price)}
                </p>
            </div>
        </>
    );
}

const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
