import { useOutletContext } from "react-router-dom";
import Bars3 from "../svg/Bars3";
import { useFetchGet } from "../hooks/useFetch";
import Plus from "../svg/Plus";
import { useState } from "react";
import BrandModal from "../components/BrandModal";
import axios from "axios";
import ItemModal from "../components/ItemModal";

export default function ItemSetting() {
  const { navbarToggle, setNavbarToggle } = useOutletContext();
  const [itemModal, setItemModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [items, setItems] = useFetchGet(
    "http://localhost:1000/api/items/get-all?withPhoto=yes"
  );

  const deleteItems = (id_item) => {
    axios
      .delete("http://localhost:1000/api/items/" + id_item, {
        withCredentials: true,
      })
      .then((res) => {
        setMsg(res.data.description);
        setItems(items.filter((c) => c.id_item !== id_item));
      })
      .catch((err) => console.log(err.response));
  };

  const addItem = (data) => {
    setItems([...items, data]);
  };

  return (
    <>
      <div className='flex flex-col'>
        <div
          className='p-5 w-fit'
          onClick={() => setNavbarToggle(!navbarToggle)}>
          <Bars3 className={"w-8 h-8 md:w-10 md:h-10"} />
        </div>
        <h2 className='font-bold text-center text-2xl uppercase font-roboto md:text-3xl'>
          Items Setting
        </h2>
        {msg && (
          <div className='mt-4 w-4/5 mx-auto rounded-md flex items-center justify-center p-3 bg-green-300 text-green-800 md:text-lg'>
            <p>{msg}</p>
          </div>
        )}
        <div className='flex px-3 py-1 mt-7 sm:px-4 sm:py-2 items-center gap-x-1 group w-fit  md:text-2xl'>
          <Plus className={"group-hover:fill-blue-600 w-6 h-6"} />
          <button
            onClick={() => setItemModal(!itemModal)}
            className='font-bold text-xl font-raleway group-hover:text-blue-600 md:text-2xl'>
            Add Items
          </button>
        </div>
        <div className='inline-block w-full '>
          <div className='overflow-x-auto'>
            <table className='w-full text-center text-sm md:text-xl'>
              <thead className='border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900'>
                <tr>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-1/12 '>
                    Number
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-2/12'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-2/12'>
                    Price
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-2/12'>
                    Stock
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-2/12'>
                    Brand
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-2/12'>
                    Category
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-2/12'>
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((b, i) => {
                    return (
                      <tr
                        key={b.id_item}
                        className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap  px-6 py-4 font-medium'>
                          {i + 1}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {b.name}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {b.price}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {b.stock}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {b.brand}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {b.category}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          <button
                            onClick={() => {
                              if (
                                confirm("Anda yakin ingin menghapus " + b.name)
                              ) {
                                return deleteItems(b.id_item);
                              }
                            }}
                            className='px-4 py-1 bg-red-600 rounded-md'>
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
      {itemModal && (
        <ItemModal
          state={itemModal}
          setState={setItemModal}
          setParentMsg={setMsg}
          setItems={addItem}
        />
      )}
    </>
  );
}
