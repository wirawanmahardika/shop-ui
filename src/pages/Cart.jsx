import { useState } from "react";
import useGetUser from "../hooks/useGetUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartNavbar } from "../components/cart/CartNavbar";
import CartHeader from "../components/cart/CartHeader";
import CartMain from "../components/cart/CartMain";

export default function CartPage() {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const user = useGetUser();

    return (
        <>
            <CartNavbar
                navbarToggle={navbarToggle}
                setNavbarToggle={setNavbarToggle}
                user={user}
            />
            <CartHeader user={user} />
            <CartMain />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </>
    );
}
