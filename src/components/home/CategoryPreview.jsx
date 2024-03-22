import { useFetchGet } from "../../hooks/useFetch";

export default function CategoryPreview() {
    const [categories] = useFetchGet("/api/category");

    return (
        <div className="w-full min-h-[200px] p-5 flex flex-col items-center gap-y-9 font-quicksand">
            <button className="border border-black rounded-lg font-semibold font-roboto bg-main-1 text-center w-full py-2 shadow-lg sm:w-3/5">
                Category
            </button>
            {categories &&
                categories.map((d) => {
                    return (
                        <div
                            key={d.id_category}
                            className="w-full flex justify-between items-center px-6 sm:justify-around"
                        >
                            <img
                                src={d.category_photo}
                                alt="shoes1"
                                className="w-[80px]"
                            />
                            <h3 className="font-semibold capitalize">
                                {d.category}
                            </h3>
                        </div>
                    );
                })}
        </div>
    );
}
