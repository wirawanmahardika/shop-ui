import shoes1 from "../../assets/shoes1.png";
import shoes2 from "../../assets/shoes2.png";
import shoes3 from "../../assets/shoes3.png";

export default function ProdukPreview() {
    return (
        <div className="w-full min-h-[300px] grid grid-cols-3 bg-gray-600 gap-5 p-4 gap-x-9">
            <h2 className="col-span-3 font-bold text-2xl text-center text-stone-100 md:text-4xl">
                Preview
            </h2>
            <div className="col-span-3 justify-between flex mb-3">
                <div className="rotate-180 p-4 bg-slate-800 h-fit my-auto">
                    <PlaySvg />
                </div>
                <div className="w-1/2 my-auto flex items-center justify-center">
                    <img
                        src={shoes1}
                        alt="converse"
                        className="w-full drop-shadow-xl md:w-4/5"
                    />
                </div>
                <div className="p-4 bg-slate-800 h-fit my-auto">
                    <PlaySvg />
                </div>
            </div>
            <div className=" my-auto flex justify-center ">
                <img
                    src={shoes2}
                    alt="converse"
                    className="w-full drop-shadow-2xl md:w-2/4"
                />
            </div>
            <div className=" my-auto flex justify-center ">
                <img
                    src={shoes3}
                    alt="converse"
                    className="w-full drop-shadow-2xl md:w-2/4"
                />
            </div>
            <div className=" my-auto flex justify-center ">
                <img
                    src={shoes1}
                    alt="converse"
                    className="w-full drop-shadow-2xl md:w-2/4"
                />
            </div>
        </div>
    );
}

function PlaySvg() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 md:w-9 md:h-9"
        >
            <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
            />
        </svg>
    );
}
