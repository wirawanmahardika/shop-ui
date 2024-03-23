import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser";
import logo from "../../img/logo.png";

export default function Admin() {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const user = useGetUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.role !== "admin") {
            return navigate("/");
        }
    }, []);

    return (
        <>
            {window.innerWidth < 1024 ? (
                <>
                    <div className="w-full h-screen flex items-center justify-center">
                        <h1 className="font-bold text-center text-3xl uppercase font-quicksand">
                            Tersedia hanya di desktop size
                        </h1>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full h-screen flex">
                        <Navbar
                            navbarToggle={navbarToggle}
                            setNavbarToggle={setNavbarToggle}
                        />
                        <Outlet context={{ navbarToggle, setNavbarToggle }} />
                    </div>
                </>
            )}
        </>
    );
}

function Navbar({ navbarToggle, setNavbarToggle }) {
    return (
        <>
            <nav className="w-1/4 h-screen bg-indigo-600 flex flex-col p-5 gap-y-6 text-white">
                <div className="w-full items-center flex justify-between">
                    <img src={logo} alt="logo" className="w-9" />
                    <p className="text-xl uppercase font-extrabold font-roboto ">
                        Admin Control
                    </p>
                </div>
                <div className="w-full">
                    <ul className="flex flex-col gap-y-3">
                        <NavLink
                            to="/admin"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Deliver
                        </NavLink>
                        <NavLink
                            to="/admin/items"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Items
                        </NavLink>
                        <NavLink
                            to="/admin/users"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Users
                        </NavLink>
                        <NavLink
                            to="/admin/category"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Categories
                        </NavLink>
                        <NavLink
                            to="/admin/brand"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Brands
                        </NavLink>
                    </ul>
                </div>
                <div className="w-full flex flex-col gap-y-5">
                    <h1 className="text-xl font-bold">Navigation</h1>
                    <ul className="flex flex-col gap-y-3">
                        <NavLink
                            to="/"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/profile"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            to="/toko"
                            className="bg-indigo-800 px-3 py-2 rounded-lg hover:bg-indigo-950"
                        >
                            Shop
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </>
    );
}
