// Save this file as: app/safety-security/page.tsx
// (a new route folder inside your Next.js `app/` directory)
//
// This makes the page reachable at:  https://yourdomain/safety-security
//
// It reuses your existing Navbar/Footer so it looks like the rest of the
// site, and needs no new npm packages.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Privacy | DocEzy",
  description:
    "Learn how DocEzy protects your documents with secure storage, encryption, and privacy-focused document management.",
  alternates: {
    canonical: "https://www.docezy.in/safety-security",
  },
  openGraph: {
    title: "Security & Privacy | DocEzy",
    description:
      "Learn how DocEzy protects your documents with secure storage, encryption, and privacy-focused document management.",
    url: "https://www.docezy.in/safety-security",
    siteName: "DocEzy",
    type: "website",
  },
};



import Navbar from "@/components/Navbar";

const backupPoints = [
  {
    title: "Automatic, in the background",
    description:
      "Once turned on, every new document is queued and backed up on its own — no need to remember to do it yourself. You can switch it off anytime from your Profile.",
  },
  {
    title: "20GB of backup storage, free",
    description:
      "Every account gets 20GB of secure backup storage. The Backup Status page shows exactly how much you've used and how much is left.",
  },
  {
    title: "Restore on any device",
    description:
      "Reinstalled the app or switched phones? Your backed-up documents are pulled right back down, exactly where you left off.",
  },
  {
    title: "Encrypted before it's stored",
    description:
      "Every image and PDF is encrypted with AES-256 — the same encryption standard used by banks — before it ever reaches our storage.",
  }
];


export default function SafetySecurityPage() {
  return (
    <>
      <div id="top">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/60" />
            <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[130px]" />
          </div>

          <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Safety &amp; Security
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Your documents, backed up
              <br className="hidden sm:block" /> and encrypted.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              DocEzy automatically keeps a secure backup of your documents and
              encrypts every file before it's stored — so your images and
              PDFs stay private and never get lost.
            </p>
          </div>
        </section>

        {/* Continuous animation */}
        <section className="pb-4 sm:pb-8">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-black shadow-xl shadow-blue-500/10">
              <video
                className="aspect-video w-full"
                src="/videos/security-backup-encryption.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Backup */}
        <section id="backup" className="bg-slate-50 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Backup and Encryption
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Never lose a document again.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                DocEzy quietly backs up your documents in the background, so
                a lost phone or a fresh install doesn't mean starting over.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {backupPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
