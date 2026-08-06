import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import DownloadSection from "@/components/DownloadSection";
import HowItWorks from "@/components/HowItWorks";
import WhyDocEzy from "@/components/WhyDocEzy";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <DownloadSection />
      <HowItWorks />
      <WhyDocEzy />
    </>
  );
}