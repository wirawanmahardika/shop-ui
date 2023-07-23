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
import EditProfile, { editProfileAction } from "./pages/EditProfile";
import Admin from "./pages/Admin";
import CategorySetting from "./pages/CategorySetting";
import AdminHome from "./pages/AdminHome";
import BrandSetting from "./pages/BrandSetting";
import UsersSetting from "./pages/UsersSettting";
import ItemSetting from "./pages/ItemSetting";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/toko' element={<Toko />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route
        path='/edit-profile'
        element={<EditProfile />}
        action={editProfileAction}
      />
      <Route path='/login' element={<Login />} action={loginAction} />
      <Route path='/signup' element={<Signup />} action={signupAction} />
      <Route path='/admin' element={<Admin />}>
        <Route index element={<AdminHome />} />
        <Route path='category' element={<CategorySetting />} />
        <Route path='brand' element={<BrandSetting />} />
        <Route path='users' element={<UsersSetting />} />
        <Route path='items' element={<ItemSetting />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
