import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/lakshmi-puja/SectionOne";
import SectionTwo from "@/app/components/lakshmi-puja/SectionTwo";
import SectionThree from "@/app/components/lakshmi-puja/SectionThree";
import SectionFour from "@/app/components/lakshmi-puja/SectionFour";
import SectionFive from "@/app/components/lakshmi-puja/SectionFive";
import Footer from "@/app/components/footer/Footer";
import EventSidebar from "@/app/components/EventsSidebar";

export default function LakshmiPuja() {
  return (
    <>
      <Navbar />
      <div className="paper-world">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-16 sm:px-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:px-14">
          {/* Left Event Index */}
          <EventSidebar />

          {/* Right Main Content */}
          <main className="min-w-0">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
