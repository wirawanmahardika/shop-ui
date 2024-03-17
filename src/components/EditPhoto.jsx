import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { myAxios } from "../utils/axios";

export default function EditPhoto({ editPhotoTagIsOn, setEditPhotoTagIsOn }) {
  const [msg, setMsg] = useState(null)
  const [img, setImg] = useState(null);
  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const allowedType = ["image/jpeg", "image/png", "image/jpg"];
    if (!img) {
      setMsg("Masukkan image terlebih dahulu");
      return;
    }
    if (!allowedType.find((d) => d === img.type)) {
      setMsg("Ekstensi file tidak valid");
      return;
    }
    if (img.size > 3145728) {
      setMsg("Size dari image maksimal 3 MB");
      return;
    }

    const formData = new FormData();
    formData.append('photo', img);

    try {
      await myAxios.patch('/api/users/add-photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });
      return navigate(0)
    } catch (error) {
      setMsg("Gagal mengubah foto")
    }
  };

  return (
    <>
      <div className='fixed -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-4/5 h-fit z-30 bg-black text-white rounded-md p-4 flex justify-center items-center  gap-y-5 flex-col sm:py-8 sm:w-3/5 lg:py-12 lg:w-2/5'>
        <p className='text-lg font-semibold'>Input Photo</p>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col gap-y-3'>
          {msg && (
            <p className='text-lg text-red-600 text-center font-semibold'>
              {msg}
            </p>
          )}
          <label
            className='block -mb-2 text-sm font-medium text-gray-900 dark:text-white '
            htmlFor='file_input'>
            Upload file{" "}
            <span className='mt-1 text-sm text-gray-500 dark:text-gray-300'>
              (PNG, JPG) (Max 3MB)
            </span>
          </label>
          <input
            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            type='file'
            name="photo"
            onChange={() => setImg(event.target.files[0])}
          />
          <div className='flex gap-x-3 justify-center'>
            <button
              onClick={() => setEditPhotoTagIsOn(!editPhotoTagIsOn)}
              className='px-5 py-1 rounded-md bg-red-600 mt-3 mx-auto'>
              Cancel
            </button>
            <button
              type="submit"
              className='px-5 py-1 rounded-md bg-orange-600 mt-3 mx-auto'>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
