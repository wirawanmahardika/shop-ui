import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    useNavigate,
    useRouteError,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Toko from "./pages/Toko";
import CartPage from "./pages/Cart";
import Profile from "./pages/profile/Profile";
import Login, { loginAction } from "./pages/Login";
import Signup, { signupAction } from "./pages/Signup";
import EditProfile, { editProfileAction } from "./pages/profile/EditProfile";
import CategorySetting from "./pages/admin/CategorySetting";
import Admin from "./pages/admin/Admin";
import AdminHome from "./pages/admin/AdminHome";
import BrandSetting from "./pages/admin/BrandSetting";
import UsersSetting from "./pages/admin/UsersSetting";
import ItemSetting from "./pages/admin/ItemSetting";
import Container from "./components/all/Container";
import ErrorElementAll from "./components/all/ErrorElementAll";
import { produkPreviewLoader } from "./components/home/ProdukPreview";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={<Container />}
                    errorElement={<ErrorElementAll />}
                >
                    <Route
                        index
                        element={<Home />}
                        loader={produkPreviewLoader}
                    />
                    <Route path="/toko" element={<Toko />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/edit-profile"
                        element={<EditProfile />}
                        action={editProfileAction}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                        action={loginAction}
                    />
                    <Route
                        path="/signup"
                        element={<Signup />}
                        action={signupAction}
                    />
                    <Route path="/admin" element={<Admin />}>
                        <Route index element={<AdminHome />} />
                        <Route path="category" element={<CategorySetting />} />
                        <Route path="brand" element={<BrandSetting />} />
                        <Route path="users" element={<UsersSetting />} />
                        <Route path="items" element={<ItemSetting />} />
                    </Route>
                </Route>
            </>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
