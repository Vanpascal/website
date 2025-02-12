import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tailoring from "@/components/production-units/Tailoring";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSCT Tailoring",
};

function page() {
  return (
    <div>
      <Header />
      <Tailoring />
      <Footer />
    </div>
  );
}

export default page;
