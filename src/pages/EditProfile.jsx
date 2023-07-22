import { Form, NavLink, useActionData, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";
import PasswordValidate from "../components/PasswordValidate";
import useGetUser from "../hooks/useGetUser";

export default function EditProfile({}) {
  const [passwordValidateToggle, setPasswordValidateToggle] = useState(false);
  const [msg, setMsg] = useState({ place: "", message: "", code: "" });
  const user = useGetUser();
  const [valueInput, setValueInput] = useState({
    email: user.email,
    username: user.username,
    fullname: user.fullname,
  });

  const checkInput = () => {
    if (!valueInput.email) {
      return setMsg({ message: "Memerlukan email", place: "email" });
    }
    if (!valueInput.fullname) {
      return setMsg({ message: "Memerlukan fullname", place: "fullname" });
    }
    if (!valueInput.username) {
      return setMsg({ message: "Memerlukan username", place: "username" });
    }
    setPasswordValidateToggle(true);
  };

  useEffect(() => {
    if (valueInput.email && valueInput.username && valueInput.fullname) {
      setMsg({ place: "", message: "" });
    }
  }, [valueInput]);

  console.log(msg);

  return (
    <>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-10 w-auto' src={logo} alt='Toko Sedia' />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Change Profile
          </h2>
          {msg.place === "top" && !msg.code && (
            <div className='flex items-center justify-center py-2 mt-3 bg-red-300'>
              <p className={"text-red-700"}>{msg.message}</p>
            </div>
          )}
          {msg.place === "top" && msg.code < 300 && (
            <div className='flex items-center justify-center py-2 mt-3 bg-green-300'>
              <p className={"text-green-700 font-medium"}>{msg.message}</p>
            </div>
          )}
          {/* {data && data.code < 300 && (
            <div className='flex items-center justify-center w-full py-3 bg-emerald-300 rounded-md shadow-md mt-4'>
              <p className='text-center font-semibold text-sm text-green-800 5'>
                {msg}
              </p>
            </div>
          )} */}
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <Form className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email
              </label>
              <div className='mt-2'>
                <input
                  onChange={(e) =>
                    setValueInput({ ...valueInput, email: e.target.value })
                  }
                  value={valueInput.email}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6'
                />
              </div>
              {msg.place === "email" && (
                <p className='text-sm mt-2 text-red-600'>{msg.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor='fullname'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Fullname
              </label>
              <div className='mt-2'>
                <input
                  onChange={(e) =>
                    setValueInput({ ...valueInput, fullname: e.target.value })
                  }
                  value={valueInput.fullname}
                  id='fullname'
                  name='fullname'
                  type='text'
                  autoComplete='fullname'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6'
                />
              </div>
              {msg.place === "fullname" && (
                <p className='text-sm mt-2 text-red-600'>{msg.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Username
              </label>
              <div className='mt-2'>
                <input
                  onChange={(e) =>
                    setValueInput({ ...valueInput, username: e.target.value })
                  }
                  value={valueInput.username}
                  id='username'
                  name='username'
                  type='text'
                  autoComplete='username'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6'
                />
              </div>
              {msg.place === "username" && (
                <p className='text-sm mt-2 text-red-600'>{msg.message}</p>
              )}
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  checkInput();
                }}
                type='submit'
                className='flex w-full justify-center rounded-md bg-main-1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-1'>
                Change
              </button>
            </div>
          </Form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            <NavLink
              to='/'
              className='font-semibold leading-6 text-main-1 hover:text-main-1'>
              Back To Homepage
            </NavLink>
          </p>
        </div>
      </div>
      <PasswordValidate
        appear={passwordValidateToggle}
        setAppear={setPasswordValidateToggle}
        data={valueInput}
        msg={msg}
        setMsg={setMsg}
      />
    </>
  );
}

export const editProfileAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  return data;
};
