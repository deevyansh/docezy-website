import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import DownloadSection from "@/components/DownloadSection";
import HowItWorks from "@/components/HowItWorks";
import VideoShowcase from "@/components/VideoShowcase";
import WhyDocEzy from "@/components/WhyDocEzy";
import Footer from "@/components/Footer";
import SafeSecurityPage from "@/components/SafetySecurityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocEzy | AI Document Search",
  description:
    "DocEzy helps you find your documents instantly with AI-powered search, OCR, multilingual search, and secure document storage.",
  alternates: {
    canonical: "https://www.docezy.in",
  },
  openGraph: {
    title: "DocEzy | AI Document Search",
    description:
      "Find your documents instantly with AI-powered search, OCR, multilingual search, and secure document storage.",
    url: "https://www.docezy.in",
    siteName: "DocEzy",
    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DocEzy",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Android",
  "description":
    "DocEzy is an AI-powered document search app with OCR, multilingual search, fuzzy search, and secure document storage.",
  "url": "https://www.docezy.in/",
  "downloadUrl":
    "https://play.google.com/store/apps/details?id=com.deevyansh.docezy"
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <div id="top">
        <Navbar />
        <Hero />
        <SearchSection />
        <DownloadSection />
        <HowItWorks />
        <VideoShowcase />
        <SafeSecurityPage />
        <WhyDocEzy />
        <Footer />
      </div>
    </>
  );
}
