export function BrandForFilter({ brandForFilter, brandHandle, brands }) {
  // brandForFilter &&
  return brandForFilter
    ? brandForFilter.map((b) => {
        return (
          <div className="flex gap-x-2 items-center " key={b.id_brand}>
            <input
              type="checkbox"
              id={b.id_brand}
              className="form-input md:w-9 md:h-9"
              onChange={() => brandHandle(b.id_brand)}
              checked={brands.includes(b.id_brand)}
            />
            <label className="md:text-xl" htmlFor={b.id_brand}>
              {b.name_brand}
            </label>
          </div>
        );
      })
    : "";
}

export function CategoriesForFilter({
  categoriesForFilter,
  categoryHandle,
  categories,
}) {
  return categoriesForFilter
    ? categoriesForFilter.map((d) => {
        return (
          <div className="flex gap-x-2 items-center " key={d.id_category}>
            <input
              type="checkbox"
              id={d.category}
              className="form-input md:w-9 md:h-9"
              onChange={() => categoryHandle(d.id_category)}
              checked={categories.includes(d.id_category)}
            />
            <label className="md:text-xl" htmlFor={d.category}>
              {d.category}
            </label>
          </div>
        );
      })
    : "";
}

export function HargaForFilter({ hargaToggle, limitHarga, setLimitHarga }) {
  return hargaToggle == "custom" ? (
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
          id="lt2.5"
          type="radio"
          className="form-input  md:w-9 md:h-9"
          checked={
            limitHarga.harga_gte === 0 && limitHarga.harga_lte === 250000
          }
          onChange={() =>
            setLimitHarga({
              harga_gte: 0,
              harga_lte: 250000,
            })
          }
        />
        <label className="md:text-xl" htmlFor="lt2.5">
          0 - 250.000
        </label>
      </div>
      <div className="flex gap-x-2 items-center ">
        <input
          id="bt2.5a1"
          type="radio"
          className="form-input  md:w-9 md:h-9"
          checked={
            limitHarga.harga_gte === 250000 && limitHarga.harga_lte === 1000000
          }
          onChange={() =>
            setLimitHarga({
              harga_gte: 250000,
              harga_lte: 1000000,
            })
          }
        />
        <label className="md:text-xl" htmlFor="bt2.5a1">
          250.000 - 1.000.000
        </label>
      </div>
      <div className="flex gap-x-2 items-center ">
        <input
          id="bt1a3"
          type="radio"
          className="form-input  md:w-9 md:h-9"
          checked={
            limitHarga.harga_gte === 1000000 && limitHarga.harga_lte === 3000000
          }
          onChange={() =>
            setLimitHarga({
              harga_gte: 1000000,
              harga_lte: 3000000,
            })
          }
        />
        <label className="md:text-xl" htmlFor="bt1a3">
          1.000.000 - 3.000.000
        </label>
      </div>
      <div className="flex gap-x-2 items-center ">
        <input
          type="radio"
          id="gt3"
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
        <label className="md:text-xl" htmlFor="gt3">
          3.000.000 ++
        </label>
      </div>
    </>
  );
}
