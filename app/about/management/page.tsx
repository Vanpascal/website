import ManagementAndStaff from "@/components/about/ManagementAndStaff";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management and Staff",
};
const Management = () => {
  return (
    <div>
      <Header />
      <ManagementAndStaff />
      <Footer />
    </div>
  );
};

export default Management;
