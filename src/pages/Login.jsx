import logo from "../img/logo.png";

export default function Login() {
  return (
    <>
      <div class='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div class='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img class='mx-auto h-10 w-auto' src={logo} alt='Toko Sedia' />
          <h2 class='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Log in to your account
          </h2>
        </div>

        <div class='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form class='space-y-6' action='#' method='POST'>
            <div>
              <label
                for='email'
                class='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div class='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autocomplete='email'
                  required
                  class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div class='flex items-center justify-between'>
                <label
                  for='password'
                  class='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div class='text-sm'>
                  <a
                    href='#'
                    class='font-semibold text-main-1 hover:text-main-1'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autocomplete='current-password'
                  required
                  class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                class='flex w-full justify-center rounded-md bg-main-1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-1'>
                Sign in
              </button>
            </div>
          </form>

          <p class='mt-10 text-center text-sm text-gray-500'>
            Don't have an Account?
            <a
              href='#'
              class='font-semibold leading-6 text-main-1 hover:text-main-1'>
              Signup Here
            </a>
          </p>

          <p class='mt-10 text-center text-sm text-gray-500'>
            <a
              href='#'
              class='font-semibold leading-6 text-main-1 hover:text-main-1'>
              Back To Homepage
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
