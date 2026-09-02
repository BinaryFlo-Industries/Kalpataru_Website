import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/Home/SectionOne";
import SectionTwo from "@/app/components/Home/SectionTwo";
import SectionThree from "@/app/components/Home/SectionThree";
import SectionFour from "@/app/components/Home/SectionFour";
import SectionFive from "@/app/components/Home/SectionFive";
import SectionSix from "@/app/components/Home/SectionSix";
import SectionSeven from "@/app/components/Home/SectionSeven";
import SectionEight from "@/app/components/Home/SectionEight";
import SectionNine from "@/app/components/Home/SectionNine";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <div className="paper-world">
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
      </div>
      <Footer />
    </>
  );
}
