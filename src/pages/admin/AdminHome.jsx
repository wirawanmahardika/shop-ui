import { useState } from "react";
import { useFetchGet } from "../../hooks/useFetch";
import { myAxios } from "../../utils/axios";
import PenjualanDetail from "../../components/edit-profile/PenjualanDetail";

export default function AdminHome() {
    const [delivers, setDelivers] = useFetchGet("/api/penjualan");
    const [penjualanDetail, setPenjualanDetail] = useState(false);
    const [items, setItems] = useState([]);
    const [id_penjualan, setId_penjualan] = useState();
    const [msg, setMsg] = useState("");

    const [statusSetting, setStatusSetting] = useState(false);

    return (
        <>
            <div className="w-full flex flex-col items-center gap-y-6">
                <h1 className="font-bold text-5xl mt-10 font-geologica">
                    Order List
                </h1>
                {msg && (
                    <div className="w-3/5 flex items-center p-2 rounded-sm justify-center bg-green-300 text-green-600">
                        <p>{msg}</p>
                    </div>
                )}
                <div className="inline-block w-full">
                    <div className="overflow-x-auto grow">
                        <table className="w-full text-center text-sm ">
                            <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900 min-h-fit">
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
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-6 py-4 w-1/6"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-6 py-4 w-1/6"
                                    >
                                        Status
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
                                {delivers.map((d, i) => {
                                    const date = new Date(d.tanggal_beli);
                                    const displayDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

                                    return (
                                        <tr
                                            key={i}
                                            className="border-b dark:border-neutral-500"
                                        >
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                {i + 1}
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                {d.users.username}
                                            </td>
                                            <td className="whitespace-nowrap font-semibold px-6 py-4">
                                                {displayDate}
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                {d.status}
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4 flex gap-x-4 justify-evenly">
                                                <button
                                                    onClick={() => {
                                                        setPenjualanDetail(
                                                            !penjualanDetail
                                                        );
                                                        setItems(
                                                            d.item_terjual
                                                        );
                                                    }}
                                                    className="hover:bg-sky-400 px-5 py-1 bg-sky-600 rounded-sm font-medium"
                                                >
                                                    Detail
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        setStatusSetting(
                                                            !statusSetting
                                                        );
                                                        setId_penjualan(
                                                            d.id_penjualan
                                                        );
                                                    }}
                                                    className="hover:bg-green-400 px-4 py-1 bg-green-600 rounded-sm font-medium"
                                                >
                                                    Set Status
                                                </button>

                                                <button className="hover:bg-red-400 px-5 py-1 bg-red-600 rounded-sm font-medium">
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
            {penjualanDetail && (
                <PenjualanDetail
                    toggle={penjualanDetail}
                    setToggle={setPenjualanDetail}
                    items={items}
                />
            )}

            {statusSetting && (
                <SetStatus
                    toggle={statusSetting}
                    setToggle={setStatusSetting}
                    id_penjualan={id_penjualan}
                    setMsg={setMsg}
                    setDelivers={setDelivers}
                />
            )}
        </>
    );
}

function SetStatus({ toggle, setToggle, id_penjualan, setMsg, setDelivers }) {
    const handleSendData = (status) => {
        myAxios
            .patch(
                "/api/penjualan/status/" + id_penjualan,
                { status },
                { withCredentials: true }
            )
            .then((res) => {
                setMsg(res.data.description);
                myAxios
                    .get("/api/penjualan", { withCredentials: true })
                    .then((res) => {
                        setDelivers(res.data.data);
                    });
            });
    };
    return (
        <>
            <div
                onClick={() => setToggle(!toggle)}
                className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm"
            ></div>
            <div className="center-fixed w-2/5 bg-black h-fit p-5 flex flex-col text-white gap-y-5 rounded">
                <p className="font-bold text-2xl text-center">Set Status</p>
                <div className="flex gap-x-5 justify-between p-5 items-center">
                    <button
                        onClick={() => {
                            handleSendData("pengemasan");
                            setToggle(!toggle);
                        }}
                        className="px-4 py-1 bg-orange-600 rounded-md"
                    >
                        Pengemasan
                    </button>
                    <button
                        onClick={() => {
                            handleSendData("dikirim");
                            setToggle(!toggle);
                        }}
                        className="px-4 py-1 bg-orange-600 rounded-md"
                    >
                        Dikirim
                    </button>
                    <button
                        onClick={() => {
                            handleSendData("sampai");
                            setToggle(!toggle);
                        }}
                        className="px-4 py-1 bg-orange-600 rounded-md"
                    >
                        Sampai
                    </button>
                </div>
            </div>
        </>
    );
}
