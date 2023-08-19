import { useFetchGet } from "../hooks/useFetch";
import { useState } from "react";
import { myAxios } from "../utils/axios";

export default function UsersSetting() {
  const [users, setUsers] = useFetchGet("/api/users");
  const [msg, setMsg] = useState({ message: "", status: null });

  const deleteUser = (id) => {
    myAxios
      .delete("/api/users/" + id, {
        withCredentials: true,
      })
      .then((res) => {
        setMsg({ message: res.data.description, status: true });
        setUsers(users.filter((c) => c.id !== id));
      })
      .catch((error) => {
        setMsg({ message: error.response.data.description, status: false });
      });
  };

  return (
    <>
      <div className='flex flex-col w-full pt-10'>
        <h2 className='font-bold text-center text-3xl uppercase font-roboto mb-5'>
          Users Setting
        </h2>
        {msg.status !== null &&
          (msg.status ? (
            <div className='mt-4 w-4/5 text-center mx-auto rounded-md flex items-center justify-center p-3 bg-green-300 text-green-800 md:text-lg'>
              <p>{msg.message}</p>
            </div>
          ) : (
            <div className='mt-4 w-4/5 text-center mx-auto rounded-md flex items-center justify-center p-3 bg-red-300 text-red-800 md:text-lg'>
              <p>{msg.message}</p>
            </div>
          ))}
        <div className='inline-block min-w-full mt-10'>
          <div className='overflow-x-auto'>
            <table className='w-full text-center '>
              <thead className='border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900'>
                <tr className='text-sm md:text-lg'>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-1/12'
                  >
                    Number
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-5/12 lg:w-3/12'
                  >
                    Username
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-5/12 lg:w-3/12'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-5/12 lg:w-3/12'
                  >
                    Fullname
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 w-2/12'
                  >
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((c, i) => {
                    
                    return (
                      <tr
                        key={c.id}
                        className='border-b dark:border-neutral-500'
                      >
                        <td className='whitespace-nowrap  px-6 py-4 font-medium'>
                          {i + 1}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4 font-medium'>
                          {c.username}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {c.email}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {c.fullname}
                        </td>
                        <td className='whitespace-nowrap  px-6 py-4'>
                          {c.role === "admin" ? (
                            <button className='px-4 py-1 bg-blue-600 rounded-md'>
                              Admin
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                if (
                                  confirm("Yakin ingin menghapus " + c.fullname)
                                ) {
                                  return deleteUser(c.id);
                                }
                              }}
                              className='px-4 py-1 bg-red-600 rounded-md'
                            >
                              Delete
                            </button>
                          )}
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
