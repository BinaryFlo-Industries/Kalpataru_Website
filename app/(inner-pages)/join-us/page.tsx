import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/join-us/SectionOne";
import SectionTwo from "@/app/components/join-us/SectionTwo";
import SectionThree from "@/app/components/join-us/SectionThree";
import SectionFour from "@/app/components/join-us/SectionFour";
import Footer from "@/app/components/footer/Footer";

export default function JoinUs() {
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
