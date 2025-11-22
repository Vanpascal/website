import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Masonry from "@/components/production-units/Masonry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masonry",
};

function page() {
  return (
    <div>
      <Header />
      <Masonry />
      <Footer />
    </div>
  );
}

export default page;
