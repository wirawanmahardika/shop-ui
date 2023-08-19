import { useFetchGet } from "../hooks/useFetch";
import { useState } from "react";
import { myAxios } from "../utils/axios";

export default function ItemModal({ state, setState, setParentMsg, setItems }) {
  const [brands] = useFetchGet("/api/brands");
  const [categories] = useFetchGet("/api/category");
  const [input, setInput] = useState({
    name: null,
    id_category: null,
    id_brand: null,
    price: null,
    stock: null,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(() => ({
      ...input,
      [name]: value,
    }));
  };

  const sendData = () => {
    myAxios
      .post("/api/items", input, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setParentMsg(res.data.description);
        setItems(res.data.data);
        setState(!state);
      })
      .catch((err) => {
        setParentMsg(err.response.data.description);
        setState(!state);
      });
  };

  return (
    <>
      <div
        onClick={() => setState(!state)}
        className='fixed backdrop-blur-sm top-0 left-0 right-0 bottom-0'></div>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 flex flex-col max-h-screen'>
        <div className='flex flex-col items-center gap-y-3 bg-black text-white p-5 rounded-md overflow-y-auto'>
          <h2 className='text-2xl font-bold uppercase'>Add Item</h2>
          <div className='flex flex-col gap-y-1 w-4/5'>
            <label className='text-lg font-medium uppercase'>name</label>
            <input
              type='text'
              name='name'
              className='form-input py-1 text-black'
              value={input.name}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col gap-y-1 w-4/5 '>
            <label htmlFor='category' className='text-lg font-medium uppercase'>
              Category
            </label>
            <select
              name='id_category'
              id='category'
              value={input.id_category}
              onChange={handleChange}
              className='py-1 text-black overflow-y-auto'>
              <option value={""} disabled selected>
                Category
              </option>
              {categories &&
                categories.map((c) => {
                  return <option value={c.id_category}>{c.category}</option>;
                })}
            </select>
          </div>
          <div className='flex flex-col gap-y-1 w-4/5 '>
            <label htmlFor='category' className='text-lg font-medium uppercase'>
              Brand
            </label>
            <select
              name='id_brand'
              id='category'
              value={input.id_brand}
              onChange={handleChange}
              className='py-1 text-black overflow-y-auto'>
              <option value={""} disabled selected>
                Brand
              </option>
              {brands &&
                brands.map((b) => {
                  return <option value={b.id_brand}>{b.name_brand}</option>;
                })}
            </select>
          </div>

          <div className='flex flex-col gap-y-1 w-4/5'>
            <label className='text-lg font-medium uppercase'>price</label>
            <input
              type='number'
              name='price'
              value={input.price}
              onChange={handleChange}
              className='form-input py-1 text-black'
            />
          </div>
          <div className='flex flex-col gap-y-1 w-4/5'>
            <label className='text-lg font-medium uppercase'>stock</label>
            <input
              type='number'
              name='stock'
              value={input.stock}
              onChange={handleChange}
              className='form-input py-1 text-black'
            />
          </div>

          <div className='flex flex-col gap-y-1 w-4/5'>
            <label className='text-lg font-medium uppercase'>Image</label>
            <input
              type='file'
              name='image'
              className='text-black bg-white'
              onChange={(e) => setInput({ ...input, image: e.target.files[0] })}
            />
          </div>

          <button
            disabled={
              !(
                input.id_brand &&
                input.id_category &&
                input.image &&
                input.name &&
                input.price &&
                input.stock
              )
            }
            onClick={sendData}
            className='px-5 py-1 font-medium rounded-md bg-red-600 mt-4'>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
