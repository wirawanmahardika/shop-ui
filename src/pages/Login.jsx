import {
  Form,
  NavLink,
  useActionData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "../img/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Login() {
  const [msg, setMsg] = useState(null);
  const data = useActionData();
  const location = useLocation();

  useEffect(() => {
    if (data && data.code < 300) {
      setMsg("Berhasil Login");
    } else if (data && data.place === "username") {
      setMsg(data.description);
    } else if (data && data.place === "password") {
      setMsg(data.description);
    } else {
      setMsg("");
    }
  }, [data]);

  return (
    <>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-10 w-auto' src={logo} alt='Toko Sedia' />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Log in to your account
          </h2>
          {data && data.code < 300 && (
            <div className='flex items-center justify-center w-full py-3 bg-emerald-300 rounded-md shadow-md mt-4'>
              <p className='text-center font-semibold text-sm text-green-800 5'>
                {msg}
              </p>
            </div>
          )}
          {location.state && (
            <div className='flex items-center justify-center w-full py-3 bg-red-300 rounded-md shadow-md mt-4'>
              <p className='text-center font-semibold text-sm text-red-800 5'>
                {location.state}
              </p>
            </div>
          )}
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <Form className='space-y-6' method='POST'>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Username
              </label>
              <div className='mt-2'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  autoComplete='username'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6'
                />
              </div>
              {data && data.place === "username" && typeof msg == "string" && (
                <p className='text-sm mt-2 text-red-600'>{msg}</p>
              )}
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-main-1 hover:text-main-1'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6'
                />
              </div>
              {data && data.place === "password" && typeof msg == "string" && (
                <p className='text-sm mt-2 text-red-600'>{msg}</p>
              )}
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-main-1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-1'>
                Sign in
              </button>
            </div>
          </Form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Don't have an Account?
            <NavLink
              to='/signup'
              className='font-semibold leading-6 text-main-1 hover:text-main-1'>
              Signup Here
            </NavLink>
          </p>

          <p className='mt-10 text-center text-sm text-gray-500'>
            <NavLink
              to='/'
              className='font-semibold leading-6 text-main-1 hover:text-main-1'>
              Back To Homepage
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export const loginAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  try {
    const returndata = await axios.post(
      "http://localhost:1000/api/users/login",
      data,
      { withCredentials: true }
    );
    localStorage.setItem("isLoggedIn", "true");
    return returndata.data;
  } catch (error) {
    return error.response.data;
  }
};
