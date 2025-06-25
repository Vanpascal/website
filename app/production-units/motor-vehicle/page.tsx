import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotorVehicleMechanics from "@/components/production-units/MotorVehicleMechanics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor Vehicle Mechanics",
};

function Mvm() {
  return (
    <div>
      <Header />
      <MotorVehicleMechanics />
      <Footer />
    </div>
  );
}

export default Mvm;
