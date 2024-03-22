import useGetUser from "../../hooks/useGetUser";
import { useFetchGet } from "../../hooks/useFetch";
import Footer from "../../components/home/Footer";
import HomeNavbars from "../../components/home/HomeNavbars";
import JumboTron from "../../components/home/JumboTron";
import BrandCoop from "../../components/home/BrandCoop";
import ProdukPreview from "../../components/home/ProdukPreview";
import CategoryPreview from "../../components/home/CategoryPreview";

export default function Home() {
    useGetUser();
    return (
        <>
            <HomeNavbars />
            <JumboTron />
            <BrandCoop />
            <ProdukPreview />

            <CategoryPreview />
            <Footer />
        </>
    );
}
