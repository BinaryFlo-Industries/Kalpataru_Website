import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/gallery/SectionOne";
import Footer from "@/app/components/footer/Footer";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div className="paper-world">
        <SectionOne />
      </div>
      <Footer />
    </>
  );
}
