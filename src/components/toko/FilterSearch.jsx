import { motion } from "framer-motion";
import { BrandForFilter, CategoriesForFilter } from "./Filters";

export default function FilterSearch({
  brands,
  filterToggle,
  setFilterToggle,
  categoriesForFilter,
  brandForFilter,
  categories,
  categoryHandle,
  setLimitHarga,
  resetLimitHargaAndChangeMode,
  limitHarga,
  hargaAutoToggle,
  hargaCustomToggle,
  hargaToggle,
  resetFilter,
  brandHandle,
}) {
  return (
    <motion.div
      animate={{ x: filterToggle ? "0" : "100vw" }}
      className=" fixed right-0 top-0 bottom-0 w-2/3 lg:hidden"
    >
      <div className="bg-main-1 w-full h-full p-3 text-white overflow-y-auto flex flex-col md:gap-y-9 lg:hidden">
        <div
          onClick={() => setFilterToggle(!filterToggle)}
          className="absolute left-3 top-3 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-12 md:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-y-2 p-3 md:gap-y-5">
          <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
            Category
          </p>
          <CategoriesForFilter
            categoriesForFilter={categoriesForFilter}
            categories={categories}
            categoryHandle={categoryHandle}
          />
        </div>
        <div className="grid grid-cols-2 gap-y-2 p-3 md:gap-y-5">
          <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
            Brand
          </p>
          <BrandForFilter
            brandForFilter={brandForFilter}
            brandHandle={brandHandle}
            brands={brands}
          />
        </div>
        <div className="flex flex-col gap-y-2 p-3">
          <p className="text-xl font-bold text-center col-span-2 mb-2 md:text-3xl">
            Harga
          </p>
          <div className="mx-auto text-center mb-2">
            <button
              type="button"
              onClick={() => resetLimitHargaAndChangeMode("auto")}
              className={
                "px-2 rounded-l py-0.5 md:px-5 md:py-2 " + hargaAutoToggle
              }
            >
              Auto
            </button>
            <button
              type="button"
              onClick={() => resetLimitHargaAndChangeMode("custom")}
              className={
                `px-2 rounded-r py-0.5 md:px-5 md:py-2 ` + hargaCustomToggle
              }
            >
              Custom
            </button>
          </div>

          {hargaToggle == "custom" ? (
            <>
              <div className="flex flex-col items-center text-black md:gap-y-2">
                <p className="font-medium text-white md:text-xl">From</p>
                <input
                  type="number"
                  className="form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2"
                  value={limitHarga.harga_gte || undefined}
                  onChange={(e) =>
                    setLimitHarga({
                      ...limitHarga,
                      harga_gte: parseInt(e.target.value) || 0,
                    })
                  }
                />
                <p className="font-medium text-white md:text-xl">to</p>
                <input
                  type="number"
                  className="form-input py-0.5 w-2/3 font-semibold md:py-2 md:px-2"
                  value={limitHarga.harga_lte || undefined}
                  onChange={(e) =>
                    setLimitHarga({
                      ...limitHarga,
                      harga_lte: parseInt(e.target.value) || undefined,
                    })
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-x-2 items-center ">
                <input
                  type="radio"
                  className="form-input  md:w-9 md:h-9"
                  checked={
                    limitHarga.harga_gte === 0 &&
                    limitHarga.harga_lte === 250000
                  }
                  onChange={() =>
                    setLimitHarga({
                      harga_gte: 0,
                      harga_lte: 250000,
                    })
                  }
                />
                <label className="md:text-xl" htmlFor="">
                  0 - 250.000
                </label>
              </div>
              <div className="flex gap-x-2 items-center ">
                <input
                  type="radio"
                  className="form-input  md:w-9 md:h-9"
                  checked={
                    limitHarga.harga_gte === 250000 &&
                    limitHarga.harga_lte === 1000000
                  }
                  onChange={() =>
                    setLimitHarga({
                      harga_gte: 250000,
                      harga_lte: 1000000,
                    })
                  }
                />
                <label className="md:text-xl" htmlFor="">
                  250.000 - 1.000.000
                </label>
              </div>
              <div className="flex gap-x-2 items-center ">
                <input
                  type="radio"
                  className="form-input  md:w-9 md:h-9"
                  checked={
                    limitHarga.harga_gte === 1000000 &&
                    limitHarga.harga_lte === 3000000
                  }
                  onChange={() =>
                    setLimitHarga({
                      harga_gte: 1000000,
                      harga_lte: 3000000,
                    })
                  }
                />
                <label className="md:text-xl" htmlFor="">
                  1.000.000 - 3.000.000
                </label>
              </div>
              <div className="flex gap-x-2 items-center ">
                <input
                  type="radio"
                  className="form-input  md:w-9 md:h-9"
                  checked={
                    limitHarga.harga_gte === 3000000 &&
                    limitHarga.harga_lte === undefined
                  }
                  onChange={() =>
                    setLimitHarga({
                      harga_gte: 3000000,
                      harga_lte: undefined,
                    })
                  }
                />
                <label className="md:text-xl" htmlFor="">
                  3.000.000 ++
                </label>
              </div>
            </>
          )}
        </div>
        <button
          type="button"
          onClick={resetFilter}
          className="px-4 py-0.5 rounded bg-main-3  text-black font-semibold mx-auto mt-auto md:px-8 md:py-2 md:mb-5 md:text-2xl md:border border-black"
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
}
