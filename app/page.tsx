import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import DownloadSection from "@/components/DownloadSection";
import HowItWorks from "@/components/HowItWorks";
import VideoShowcase from "@/components/VideoShowcase";
import WhyDocEzy from "@/components/WhyDocEzy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="top">
        <Navbar />
        <Hero />
        <SearchSection />
        <DownloadSection />
        <HowItWorks />
        <VideoShowcase />
        <WhyDocEzy />
        <Footer />
      </div>
    </>
  );
}
