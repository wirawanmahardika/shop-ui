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
import Profile from "./pages/Profile";
import Login, { loginAction } from "./pages/Login";
import Signup, { signupAction } from "./pages/Signup";
import EditProfile, { editProfileAction } from "./pages/EditProfile";
import Admin from "./pages/Admin";
import CategorySetting from "./pages/CategorySetting";
import AdminHome from "./pages/AdminHome";
import BrandSetting from "./pages/BrandSetting";
import UsersSetting from "./pages/UsersSetting";
import ItemSetting from "./pages/ItemSetting";
import { useEffect } from "react";

const Container = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

const ErrorElement = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    useEffect(() => {
        if (
            error?.internal &&
            error?.status === 404 &&
            error?.data.includes("Error: No route matches URL")
        ) {
            navigate("/");
            return;
        }
    }, []);

    return (
        <div className="w-full h-screen font-quicksand bg-slate-200 flex justify-center items-center flex-col gap-y-7">
            <h1 className="font-bold text-4xl ">SOMETHING WENT WRONG</h1>
            <a href="/" className="text-blue-500 font-semibold">
                Back To Homepage
            </a>
        </div>
    );
};

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={<Container />}
                    errorElement={<ErrorElement />}
                >
                    <Route index element={<Home />} />
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
