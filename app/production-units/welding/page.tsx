import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Welding from "@/components/production-units/Welding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welding",
};

function Metalfab() {
  return (
    <div>
      <Header />
      <Welding />
      <Footer />
    </div>
  );
}

export default Metalfab;
