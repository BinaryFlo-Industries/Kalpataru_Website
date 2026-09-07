import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/adopt-a-student/SectionOne";
import SectionTwo from "@/app/components/adopt-a-student/SectionTwo";
import SectionThree from "@/app/components/adopt-a-student/SectionThree";
import SectionFour from "@/app/components/adopt-a-student/SectionFour";
import Footer from "@/app/components/footer/Footer";

export default function AdoptAStudent() {
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
