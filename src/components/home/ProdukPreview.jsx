import { useEffect, useState } from "react";
import shoes1 from "../../assets/shoes1.png";
import shoes2 from "../../assets/shoes2.png";
import shoes3 from "../../assets/shoes3.png";
import gelang1 from "../../assets/adidas.png";
import gelang2 from "../../assets/baju.png";
import gelang3 from "../../assets/brand.png";
import useGetPreview from "../../hooks/useGetPreview";
import { useLoaderData } from "react-router-dom";
import { myAxios } from "../../utils/axios";

export default function ProdukPreview() {
  const previewDatas = useLoaderData();
  const [preview, setPreview] = useState(previewDatas.sepatu);

  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  const prevSlide = () => {
    if (currentPreviewIndex === 0) {
      setCurrentPreviewIndex(preview.length - 1);
    } else {
      setCurrentPreviewIndex((prev) => --prev);
    }
  };

  const nextSlide = () => {
    if (currentPreviewIndex === preview.length - 1) {
      setCurrentPreviewIndex(0);
    } else {
      setCurrentPreviewIndex((prev) => ++prev);
    }
  };

  const slideInfoAction = preview.map((_, i) => (
    <Circle key={i} used={currentPreviewIndex == i} />
  ));

  return (
    <>
      <div className="w-full h-fit bg-gradient-to-r from-red-600 to-black text-white grid-rows-1 grid  grid-cols-3 md:grid-rows-3 md:grid-cols-4 md:h-screen">
        <div className="col-span-3  gap-y-5 flex items-center flex-col justify-between py-5 md:row-span-3">
          <span className="text-3xl font-bold">Previews</span>

          <div className="flex justify-center items-center h-52 md:h-96">
            <SlideBtn isLeft={true} onclick={prevSlide} />
            <div className="flex w-3/5 justify-center items-center py-4 ">
              <img
                src={preview[currentPreviewIndex]}
                alt="shoes"
                className="max-h-60"
              />
            </div>
            <SlideBtn onclick={nextSlide} />
          </div>

          <div className="flex space-x-5">{slideInfoAction}</div>
        </div>

        <div
          onClick={() => setPreview(previewDatas.sepatu)}
          className="hidden p-3 md:flex justify-center items-center bg-black flex-col gap-y-4 font-bold text-lg font-geologica cursor-pointer hover:bg-gray-700 md:pb-8"
        >
          <img
            src={previewDatas.sepatu[0]}
            alt="shoes"
            className="w-1/2 size-20"
          />
          <span>Sepatu</span>
        </div>

        <div
          onClick={() => setPreview(previewDatas.celana)}
          className="hidden p-3 md:flex justify-center items-center bg-black flex-col gap-y-4 font-bold text-lg font-geologica cursor-pointer hover:bg-gray-700 md:pb-8"
        >
          <img
            src={previewDatas.celana[1]}
            alt="shoes"
            className="w-1/2 size-20"
          />
          <span>Celana</span>
        </div>

        <div
          onClick={() => setPreview(previewDatas.topi)}
          className="hidden p-3 md:flex justify-center items-center bg-black flex-col gap-y-4 font-bold text-lg font-geologica cursor-pointer hover:bg-gray-700 md:pb-8"
        >
          <img
            src={previewDatas.topi[0]}
            alt="shoes"
            className="w-1/2 size-20"
          />
          <span>Topi</span>
        </div>
      </div>

      {/* batas */}
      <div className="w-full md:hidden flex items-center grow">
        <div
          onClick={() => setPreview(previewDatas.sepatu)}
          className="flex p-3 md:hidden justify-center items-center bg-black flex-col gap-y-4 font-bold text-lg font-geologica cursor-pointer hover:bg-gray-700 text-white basis-1/3"
        >
          <img
            src={previewDatas.sepatu[0]}
            alt="shoes"
            className="w-1/2 size-20"
          />
          <span>Sepatu</span>
        </div>

        <div
          onClick={() => setPreview(previewDatas.celana)}
          className="flex p-3 md:hidden justify-center items-center bg-black flex-col gap-y-4 font-bold text-lg font-geologica cursor-pointer hover:bg-gray-700 text-white basis-1/3"
        >
          <img
            src={previewDatas.celana[1]}
            alt="shoes"
            className="w-1/2 size-20"
          />
          <span>Celana</span>
        </div>

        <div
          onClick={() => setPreview(previewDatas.topi)}
          className="flex p-3 md:hidden justify-center items-center bg-black flex-col gap-y-4 font-bold text-lg font-geologica cursor-pointer hover:bg-gray-700 text-white basis-1/3"
        >
          <img
            src={previewDatas.topi[0]}
            alt="shoes"
            className="w-1/2 size-20"
          />
          <span>Topi</span>
        </div>
      </div>
    </>
  );
}

function Circle({ used }) {
  return (
    <div
      className={`size-3 rounded-full border-2 border-white ${
        used && "bg-white"
      }`}
    ></div>
  );
}

function SlideBtn({ isLeft = false, onclick }) {
  const className = `size-10 md:size-12 cursor-pointer hover:fill-slate-500 ${
    isLeft && "rotate-180"
  }`;

  return (
    <div className="px-8">
      <svg
        onClick={onclick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={className}
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export const produkPreviewLoader = async () => {
  try {
    const sepatu = await myAxios.get("/api/preview/sepatu");
    const celana = await myAxios.get("/api/preview/celana");
    const topi = await myAxios.get("/api/preview/topi");
    // const res = await myAxios.get("/api/preview/sepatu");
    return {
      sepatu: sepatu.data.data,
      celana: celana.data.data,
      topi: topi.data.data,
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};
