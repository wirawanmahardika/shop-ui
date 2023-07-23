import { useOutletContext } from "react-router-dom";
import Bars3 from "../svg/Bars3";
import { useFetchGet } from "../hooks/useFetch";
import axios from "axios";
import Plus from "../svg/Plus";

export default function CategorySetting() {
  const { navbarToggle, setNavbarToggle } = useOutletContext();
  const [categories, setCategories] = useFetchGet(
    "http://localhost:1000/api/category"
  );

  const deleteCategory = (id_category) => {
    // axios.delete('http://localhost:1000/api/category/'+id_category, {withCredentials: true})
    //   .then(res => console.log(res))
    setCategories(categories.filter((c) => c.id_category !== id_category));
  };

  return (
    <>
      <div className='flex flex-col'>
        <div
          className='p-5 w-fit'
          onClick={() => setNavbarToggle(!navbarToggle)}>
          <Bars3 className={"w-8 h-8"} />
        </div>
        <h2 className='font-bold text-center text-2xl uppercase font-roboto'>
          Category Setting
        </h2>
        <div className='flex px-3 py-1 mt-7 sm:px-4 sm:py-2 items-center gap-x-1 group'>
          <Plus className={"group-hover:fill-blue-600 w-6 h-6"} />
          <button className='font-bold text-xl font-raleway group-hover:text-blue-600'>
            Add Category
          </button>
        </div>
        <div className='inline-block w-full '>
          <div className='overflow-hidden'>
            <table className='w-full text-center text-sm '>
              <thead className='border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900'>
                <tr>
                  <th
                    scope='col'
                    colSpan={1}
                    className='whitespace-nowrap px-6 py-4'>
                    ID
                  </th>
                  <th
                    scope='col'
                    colSpan={6}
                    className='whitespace-nowrap px-6 py-4'>
                    Category
                  </th>
                  <th
                    scope='col'
                    colSpan={6}
                    className='whitespace-nowrap px-6 py-4'>
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => {
                  return (
                    <tr
                      key={c.id_category}
                      className='border-b dark:border-neutral-500'>
                      <td
                        colSpan={1}
                        className='whitespace-nowrap  px-6 py-4 font-medium'>
                        {c.id_category}
                      </td>
                      <td colSpan={6} className='whitespace-nowrap  px-6 py-4'>
                        {c.category}
                      </td>
                      <td colSpan={6} className='whitespace-nowrap  px-6 py-4'>
                        <button
                          onClick={() => deleteCategory(c.id_category)}
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
    </>
  );
}
