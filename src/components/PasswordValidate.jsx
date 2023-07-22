import axios from "axios";
import { useEffect, useState } from "react";

export default function PasswordValidate({
  appear,
  setAppear,
  data,
  msg,
  setMsg,
}) {
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMsg({ place: "", message: "" });
  }, [password]);

  const validateAndChangeDataProfile = () => {
    axios
      .put(
        "http://localhost:1000/api/users/edit-bio",
        { ...data, password: password },
        { withCredentials: true }
      )
      .then((res) => {
        setMsg({
          place: res.data.place,
          message: res.data.description,
          code: res.data.code,
        });
        console.log(res.data);
        setAppear(!appear);
      })
      .catch((err) => {
        setMsg({
          place: err.response.data.place,
          message: err.response.data.description,
        });
        if (err.response.data.place !== "password") {
          setAppear(!appear);
        }
      });
  };

  return (
    <>
      {appear && (
        <>
          <div
            onClick={() => setAppear(!appear)}
            className='fixed  backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-20'></div>
          <div className='fixed z-30 w-4/5 bg-black rounded-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center h-fit text-white p-5 justify-center gap-y-5 lg:w-2/5 lg:gap-y-8'>
            <h3 className='text-2xl font-bold text-center font-roboto sm:text-3xl'>
              User Validate
            </h3>

            <div className='w-full flex flex-col items-center'>
              <label
                htmlFor='username'
                className='block text-lg font-medium leading-6 text-white'>
                Your Password
              </label>
              <div className='mt-2 w-full '>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id='username'
                  name='username'
                  type='password'
                  autoComplete='off'
                  required
                  className='block w-3/5 rounded-md mx-auto border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6 '
                />
              </div>
              {msg.place === "password" && msg.message && (
                <p className='text-red-500 font-medium mt-1'>{msg.message}</p>
              )}
            </div>
            <button
              disabled={!password}
              onClick={validateAndChangeDataProfile}
              className='px-4 py-1 rounded-md w-fit bg-orange-600 sm:py-2 sm:px-6 sm:text-lg'>
              Send
            </button>
          </div>
        </>
      )}
    </>
  );
}
