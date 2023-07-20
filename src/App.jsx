import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Toko from "./pages/Toko";
import CartPage from "./pages/Cart";
import Profile from "./pages/Profile";
import Login, { loginAction } from "./pages/Login";
import Signup, { signupAction } from "./pages/Signup";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/toko' element={<Toko />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} action={loginAction} />
      <Route path='/signup' element={<Signup />} action={signupAction} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
