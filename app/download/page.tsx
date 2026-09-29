import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download DocEzy | AI Document Search",
  description:
    "Download DocEzy and find your documents instantly with AI-powered document search, OCR, and secure document storage.",
  alternates: {
    canonical: "https://www.docezy.in/download",
  },
  openGraph: {
    title: "Download DocEzy | AI Document Search",
    description:
      "Download DocEzy and find your documents instantly with AI-powered document search and secure document storage.",
    url: "https://www.docezy.in/download",
    siteName: "DocEzy",
    type: "website",
  },
};

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
          Get DocEzy
        </p>

        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Your documents.
          <br />
          Always within reach.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Download DocEzy for Android and start finding your documents faster.
        </p>

        <div className="mt-10">
          <a
            href="https://play.google.com/store/apps/details?id=com.deevyansh.docezy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <span className="text-2xl">▶</span>
            <span>Get it on Google Play</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Android 8+ · Free
        </p>
      </div>
    </section>
  );
}