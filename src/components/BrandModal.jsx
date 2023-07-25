import axios from "axios";
import { useEffect, useState } from "react";

export default function BrandModal({
  state,
  setState,
  setParentMsg,
  setBrands,
}) {
  const [input, setInput] = useState({ name_brand: "", image: null });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg("");
  }, [input]);

  console.log(input);

  const addBrand = () => {
    if (!input.name_brand) return setMsg("Membutuhkan brand");
    if (!input.image) return setMsg("Membutuhkan image");
    if (input.image.size > 3_200_000) return setMsg("Melebihi size maksimum");
    axios
      .post("http://localhost:1000/api/brands", input, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data?.code && res.data.code < 300) {
          setBrands(res.data.data);
          setParentMsg(res.data.description);
          setState(!state);
        }
      });
  };

  return (
    <>
      <div
        onClick={() => setState(!state)}
        className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm'></div>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-4/5 h-fit p-5 flex items-center flex-col text-white'>
        <p className='text-center text-2xl font-semibold'>Add Brand</p>

        <div className='flex flex-col p-5 gap-y-3'>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='brand' className='font-medium text-lg'>
              Brand
            </label>
            <input
              id='brand'
              type='text'
              name='brand'
              className='form-input py-1 rounded text-black'
              value={input.brand}
              onChange={(e) =>
                setInput({ ...input, name_brand: e.target.value })
              }
            />
            <p className='text-sm text-red-600'>{!input.name_brand && msg}</p>
          </div>
          <div className='flex flex-col gap-y-2'>
            <label className='font-medium text-lg' htmlFor='file_input'>
              Upload file{" "}
              <span className='text-sm text-gray-500 dark:text-gray-300'>
                (PNG, JPG) (3MB)
              </span>
            </label>
            <input
              className='block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
              id='file_input'
              type='file'
              accept='image/**'
              name='image'
              onChange={(e) => setInput({ ...input, image: e.target.files[0] })}
            />
            <p className='text-sm text-red-600'>
              {input.image
                ? input.image.size > 3_200_000 && msg
                : input.name_brand && msg}
            </p>
          </div>
          <button
            onClick={() => addBrand()}
            className='px-4 py-1 rounded bg-orange-600 font-medium w-fit mx-auto mt-2'>
            Tambah
          </button>
        </div>
      </div>
    </>
  );
}
