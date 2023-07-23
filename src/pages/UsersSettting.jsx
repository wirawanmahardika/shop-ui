import { useOutletContext } from "react-router-dom";
import Bars3 from "../svg/Bars3";
import { useFetchGet } from "../hooks/useFetch";
import axios from "axios";

export default function UsersSetting() {
  const { navbarToggle, setNavbarToggle } = useOutletContext();
  const [users, setUsers] = useFetchGet("http://localhost:1000/api/users");
  const deleteUser = (id) => {
    setUsers(users.filter((c) => c.id !== id));
  };

  return (
    <>
      <div className='flex flex-col'>
        <div
          className='p-5 w-fit'
          onClick={() => setNavbarToggle(!navbarToggle)}>
          <Bars3 className={"w-8 h-8"} />
        </div>
        <h2 className='font-bold text-center text-2xl uppercase font-roboto mb-5'>
          Users Setting
        </h2>
        <div className='inline-block w-full '>
          <div className='overflow-hidden'>
            <table className='w-full text-center text-sm '>
              <thead className='border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900'>
                <tr>
                  <th
                    scope='col'
                    colSpan={1}
                    className='whitespace-nowrap px-6 py-4'>
                    Username
                  </th>
                  <th
                    scope='col'
                    colSpan={6}
                    className='whitespace-nowrap px-6 py-4'>
                    Fullname
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
                {users &&
                  users.map((c) => {
                    return (
                      <tr
                        key={c.id}
                        className='border-b dark:border-neutral-500'>
                        <td
                          colSpan={1}
                          className='whitespace-nowrap  px-6 py-4 font-medium'>
                          {c.username}
                        </td>
                        <td
                          colSpan={6}
                          className='whitespace-nowrap  px-6 py-4'>
                          {c.fullname}
                        </td>
                        <td
                          colSpan={6}
                          className='whitespace-nowrap  px-6 py-4'>
                          <button
                            onClick={() => deleteUser(c.id)}
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
