import { NavLink } from "react-router-dom";
import imageHome from "../../img/bg-image-home.png";

export default function JumboTron() {
    return (
        <>
            {" "}
            <div className="w-full h-[390px] bg-image-home bg-cover p-7 flex sm:bg-none sm:flex sm:p-0 md:h-[450px]">
                <div className="w-4/5 text-center sm:w-full sm:flex sm:items-center sm:justify-center sm:flex-col sm:basis-1/2 md:gap-y-1 lg:gap-y-2">
                    <h2 className="text-main-1 font-bold text-3xl  md:-mb-1">
                        SHOP WITH US
                    </h2>
                    <p className="font-semibold font-quicksand">
                        <span className="text-main-2 xl:text-lg">Get</span> Your
                        Dream <span className="text-main-1">Fashion</span> Style
                    </p>
                    <NavLink
                        to={"/toko"}
                        className="mx-auto px-3 py-0.5 rounded-2xl bg-main-3 font-semibold hidden md:block shadow-md lg:px-5 lg:py-1"
                    >
                        Start Now
                    </NavLink>
                </div>
                <div className="hidden justify-end items-center sm:flex sm:basis-1/2 md:pb-4">
                    <img src={imageHome} alt="imageHome" className="w-4/5" />
                </div>
            </div>
            <div className="w-full flex justify-center p-5 pb-9 md:hidden">
                <NavLink
                    to="/toko"
                    className="mx-auto px-5 py-1 rounded-xl bg-main-3 font-semibold"
                >
                    Start Now
                </NavLink>
            </div>
        </>
    );
}
