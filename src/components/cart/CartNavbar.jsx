import { motion } from "framer-motion";
import HomeNav from "../../assets/svg/HomeNav";
import Shop from "../../assets/svg/Shop";
import { NavLink } from "react-router-dom";
import User from "../../assets/svg/User";

export function CartNavbar({ navbarToggle, setNavbarToggle, user }) {
    return (
        <motion.nav
            animate={{ x: navbarToggle ? 0 : "-100vh" }}
            className="fixed bg-black bottom-0 left-0 top-0 w-1/2 z-40 text-white p-3 -translate-x-[100vh] md:hidden"
        >
            <p className="font-bold text-xl text-center mb-5">Navigation</p>
            <ul className="flex flex-col justify-evenly gap-y-4">
                <div className="flex gap-x-2 items-center">
                    <HomeNav />
                    <li className="font-semibold text-xl hover:text-white">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                </div>
                <div className="flex gap-x-2 items-center">
                    <Shop />
                    <li className="font-semibold text-xl hover:text-white">
                        <NavLink to={"/toko"}>Toko</NavLink>
                    </li>
                </div>
                <div className="flex gap-x-2 items-center">
                    <User />
                    <li className="font-semibold text-xl hover:text-white">
                        <NavLink to={"/profile"}>Profile</NavLink>
                    </li>
                </div>
                {user.role === "admin" && (
                    <div className="flex gap-x-2 items-center">
                        <User />
                        <li className="font-semibold text-xl hover:text-white">
                            <NavLink to={"/admin"}>Admin</NavLink>
                        </li>
                    </div>
                )}
            </ul>
            <button
                onClick={() => setNavbarToggle(!navbarToggle)}
                className="mt-auto absolute text-sm font-medium bottom-5 left-1/2 -translate-x-1/2 uppercase px-2 py-1 bg-red-600 rounded-lg"
            >
                Close
            </button>
        </motion.nav>
    );
}
