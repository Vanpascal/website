import Carpentry from "@/components/production-units/Carpentry";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carpentry",
};

function Cj() {
  return (
    <div>
      <Header />
      <Carpentry />
      <Footer />
    </div>
  );
}

export default Cj;
