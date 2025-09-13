import Donate from "@/components/about/Donate";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
};

function Doanation() {
  return (
    <div>
      <Header />
      <Donate />
      <Footer />
    </div>
  );
}

export default Doanation;
