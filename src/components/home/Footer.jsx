import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-black text-gray-50 p-5 gap-x-5 flex flex-col items-center gap-y-4 sm:p-10 sm:flex-row">
                <div className="w-1/2 flex flex-col items-center gap-y-2 self-start sm:self-auto">
                    <h3 className="font-geologica font-extrabold text-xl ">
                        Tentang Kami
                    </h3>
                    <p className="text-xs lg:w-4/5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Itaque vitae deleniti harum magnam accusantium
                        voluptatem. Repellat corporis necessitatibus fugiat
                        itaque architecto numquam officiis aliquam et, suscipit
                        voluptates explicabo vitae id. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quaerat voluptatibus
                        vitae sequi rem praesentium consequuntur soluta illo
                        consequatur moles
                    </p>
                </div>
                <div className="w-1/2 flex flex-col items-center font-light self-end sm:self-auto">
                    <h3 className="font-geologica font-extrabold text-xl mb-2">
                        Contact
                    </h3>
                    <p className="font-extralight">+628-1234-5678</p>
                    <p className="font-extralight">johndoe@gmail.com</p>
                    <div className="w-full flex p-2 gap-x-2 sm:justify-center">
                        <img
                            src={instagram}
                            alt="instagram"
                            className="w-1/5"
                        />
                        <img
                            src={facebook}
                            alt="facebook"
                            className="w-[40px] sm:w-[90px]"
                        />
                        <img src={whatsapp} alt="whatsapp" className="w-1/5" />
                    </div>
                </div>
            </footer>
            <div className="border-t border-gray-600 text-center bg-black text-gray-400 text-sm py-1 sm:text-xs">
                <p>Copyright 2023</p>
            </div>
        </>
    );
}
