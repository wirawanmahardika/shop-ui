import useGetUser from "../../hooks/useGetUser";
import Footer from "../../components/home/Footer";
import HomeNavbars from "../../components/home/HomeNavbars";
import JumboTron from "../../components/home/JumboTron";
import ProdukPreview from "../../components/home/ProdukPreview";
import CategoryPreview from "../../components/home/CategoryPreview";

export default function Home() {
  useGetUser();
  return (
    <>
      <div className="h-screen">
        <HomeNavbars />
        <JumboTron />
      </div>
      <ProdukPreview />
      <CategoryPreview />
      <Footer />
    </>
  );
}
