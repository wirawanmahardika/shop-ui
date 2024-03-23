import { useFetchGet } from "../hooks/useFetch";
import Plus from "../svg/Plus";
import CategoryModal from "../components/category-setting/CategoryModal";
import { useState } from "react";
import { myAxios } from "../utils/axios";

export default function CategorySetting() {
    const [msg, setMsg] = useState("");
    const [categoryModal, setCategoryModal] = useState(false);
    const [categories, setCategories] = useFetchGet("/api/category");

    const deleteCategory = (id_category) => {
        setCategories(categories.filter((c) => c.id_category !== id_category));
        myAxios
            .delete("/api/category/" + id_category, {
                withCredentials: true,
            })
            .then((res) => {
                setMsg(res.data.description);
            })
            .catch((err) => err);
    };

    const addCategory = (data) => {
        setCategories([...categories, data]);
    };

    return (
        <>
            <div className="flex flex-col w-full pt-10">
                <h2 className="font-bold text-center text-2xl uppercase font-roboto md:text-3xl">
                    Category Setting
                </h2>
                {msg && (
                    <div className="mt-4 w-4/5 mx-auto rounded-md flex items-center justify-center p-3 bg-green-300 text-green-800 md:text-lg">
                        <p>{msg}</p>
                    </div>
                )}

                <div className="flex px-3 py-1 mt-4 sm:px-4 sm:py-2 items-center gap-x-1 group w-fit  md:text-2xl">
                    <Plus className={"group-hover:fill-blue-600 w-6 h-6"} />
                    <button
                        onClick={() => setCategoryModal(!categoryModal)}
                        className="font-bold text-xl font-raleway group-hover:text-blue-600 md:text-2xl"
                    >
                        Add Category
                    </button>
                </div>
                <div className="inline-block w-full ">
                    <div className="overflow-hidden">
                        <table className="w-full text-center text-sm ">
                            <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                <tr>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-6 py-4 w-1/6 md:text-lg"
                                    >
                                        Number
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-6 py-4 w-4/6 md:text-lg"
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-6 py-4 w-1/6 md:text-lg"
                                    >
                                        Handle
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories &&
                                    categories.map((c, i) => {
                                        return (
                                            <tr
                                                key={c.id_category}
                                                className="border-b dark:border-neutral-500"
                                            >
                                                <td className="whitespace-nowrap  px-6 py-4 md:text-lg font-medium">
                                                    {i + 1}
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4 md:text-lg">
                                                    {c.category}
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4 md:text-lg">
                                                    <button
                                                        onClick={() => {
                                                            if (
                                                                confirm(
                                                                    "Anda yakin ingin menghapus category " +
                                                                        c.category
                                                                )
                                                            ) {
                                                                return deleteCategory(
                                                                    c.id_category
                                                                );
                                                            }
                                                        }}
                                                        className="px-4 py-1 bg-red-600 rounded-md"
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
            {categoryModal && (
                <CategoryModal
                    state={categoryModal}
                    setState={setCategoryModal}
                    setParentMsg={setMsg}
                    setCategories={addCategory}
                />
            )}
        </>
    );
}
