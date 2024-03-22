import { useFetchGet } from "../../hooks/useFetch";

export default function BrandCoop() {
    const [brands] = useFetchGet("/api/brands");

    return (
        <div className="flex flex-col w-full bg-main-2  p-5 gap-y-2 md:p-8 md:gap-y-6">
            <h2 className="font-semibold text-xl md:font-bold md:text-2xl lg:text-xl">
                Working with popular brand
            </h2>
            <div className="w-full grid grid-cols-3 items-center justify-items-center gap-3">
                {brands &&
                    brands.map((d) => {
                        return (
                            <img
                                key={d.id_brand}
                                src={d.brand_photo}
                                alt={d.name_brand}
                                className="pl-2 w-11/12 sm:w-4/6 md:w-1/2 lg:w-1/3"
                            />
                        );
                    })}
            </div>
        </div>
    );
}
