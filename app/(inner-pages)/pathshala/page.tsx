import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/pathshala/SectionOne";
import SectionTwo from "@/app/components/pathshala/SectionTwo";
import SectionThree from "@/app/components/pathshala/SectionThree";
import SectionFour from "@/app/components/pathshala/SectionFour";
import Footer from "@/app/components/footer/Footer";

export default function PathshalaPage() {
  return (
    <>
      <Navbar />
      <div className="paper-world">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
      <Footer />
    </>
  );
}
