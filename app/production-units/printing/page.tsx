import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Printing from "@/components/production-units/Printing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing",
};

function page() {
  return (
    <div>
      <Header />
      <Printing />
      <Footer />
    </div>
  );
}

export default page;
