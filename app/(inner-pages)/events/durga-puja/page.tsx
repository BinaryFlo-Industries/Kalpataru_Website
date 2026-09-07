import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/durga-puja/SectionOne";
import SectionTwo from "@/app/components/durga-puja/SectionTwo";
import SectionThree from "@/app/components/durga-puja/SectionThree";
import SectionFour from "@/app/components/durga-puja/SectionFour";
import SectionFive from "@/app/components/durga-puja/SectionFive";
import Footer from "@/app/components/footer/Footer";

export default function DurgaPuja() {
  return (
    <>
      <Navbar />
      <div className="paper-world">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <Footer />
    </>
  );
}
