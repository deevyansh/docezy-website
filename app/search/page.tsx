import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Document Search | Find Documents Instantly | DocEzy",
  description:
    "Search your documents instantly with DocEzy's AI-powered document search, OCR, multilingual search, and intelligent retrieval.",
  alternates: {
    canonical: "https://www.docezy.in/search",
  },
  openGraph: {
    title: "AI Document Search | DocEzy",
    description:
      "Find your documents instantly with AI-powered search, OCR, and intelligent document retrieval.",
    url: "https://www.docezy.in/search",
    siteName: "DocEzy",
    type: "website",
  },
};


export default function SearchSection() {
  return (
    <section
      id="search"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Smart Search
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Find any document in seconds.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              DocEzy turns your document collection into a searchable
              knowledge base. Search naturally instead of digging through
              folders one file at a time.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Search using natural language",
                "Search across your imported documents",
                "Find information without remembering file names",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                    ✓
                  </div>

                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-xl shadow-blue-500/10">
            <div className="rounded-2xl bg-white p-5 shadow-lg">
              <p className="mb-3 text-sm font-medium text-gray-500">
                Search your documents
              </p>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
                <span className="text-gray-400">⌕</span>

                <span className="text-gray-600">
                  Find documents containing...
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Important documents
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Search results appear instantly
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Your files, organized
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Quickly locate the information you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}