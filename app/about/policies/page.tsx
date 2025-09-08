import Policies from "@/components/about/Policies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Policies",
};
const Policy = () => {
  return (
    <div>
      <Header />
      <Policies />
      <Footer />
    </div>
  );
};

export default Policy;
