import React from "react";
import AdmissionInfo from "@/components/academics/AdmissionInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Info",
};
export default function AdmissionInf() {
  return (
    <div>
      <Header />
      <AdmissionInfo />
      <Footer />
    </div>
  );
}
