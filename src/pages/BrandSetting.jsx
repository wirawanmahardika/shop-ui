import { useOutletContext } from "react-router-dom";
import Bars3 from "../svg/Bars3";
import { useFetchGet } from "../hooks/useFetch";

export default function BrandSetting() {
  const { navbarToggle, setNavbarToggle } = useOutletContext();
  const [brands, setBrands] = useFetchGet("http://localhost:1000/api/brands");

  const deleteBrand = (id_brand) => {
    // axios.delete('http://localhost:1000/api/category/'+id_brand, {withCredentials: true})
    //   .then(res => console.log(res))
    setBrands(brands.filter((c) => c.id_brand !== id_brand));
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
          Brand Setting
        </h2>
        <div className='flex px-3 py-1 mt-7'>
          <button className='font-bold text-xl font-raleway'>Add Brand</button>
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
                    Brand
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
                {brands.map((b) => {
                  return (
                    <tr
                      key={b.id_brand}
                      className='border-b dark:border-neutral-500'>
                      <td
                        colSpan={1}
                        className='whitespace-nowrap  px-6 py-4 font-medium'>
                        {b.id_brand}
                      </td>
                      <td colSpan={6} className='whitespace-nowrap  px-6 py-4'>
                        {b.name_brand}
                      </td>
                      <td colSpan={6} className='whitespace-nowrap  px-6 py-4'>
                        <button
                          onClick={() => deleteBrand(b.id_brand)}
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
