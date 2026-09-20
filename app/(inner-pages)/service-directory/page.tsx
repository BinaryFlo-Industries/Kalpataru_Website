import Navbar from "@/app/components/navbar/Navbar";
import SectionOne from "@/app/components/service-directory/SectionOne";
import Footer from "@/app/components/footer/Footer";

export default function ServiceDirectory() {
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
