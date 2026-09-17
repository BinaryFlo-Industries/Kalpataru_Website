import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/picnic/SectionOne";
import SectionTwo from "@/app/components/picnic/SectionTwo";
import SectionThree from "@/app/components/picnic/SectionThree";
import SectionFour from "@/app/components/picnic/SectionFour";
import Footer from "@/app/components/footer/Footer";
import EventSidebar from "@/app/components/EventsSidebar";

export default function Picnic() {
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
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
