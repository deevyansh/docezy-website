import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | DocEzy – AI Document Search",
  description:
    "Find answers to common questions about DocEzy, including AI document search, OCR, multilingual search, document storage, security, and downloading the app.",
  alternates: {
    canonical: "https://www.docezy.in/faq",
  },
  openGraph: {
    title: "FAQ | DocEzy – AI Document Search",
    description:
      "Learn how DocEzy helps you search, organize, and securely store your documents using AI-powered search and OCR.",
    url: "https://www.docezy.in/faq",
    siteName: "DocEzy",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is DocEzy?",
    answer:
      "DocEzy is an AI-powered document search and storage app that helps you quickly find documents stored on your device. It uses OCR, intelligent search, multilingual search, and fuzzy matching to make your documents easier to find.",
  },
  {
    question: "How does DocEzy search my documents?",
    answer:
      "DocEzy processes the text contained in your documents and uses multiple search techniques to find relevant results. This includes keyword matching, fuzzy matching, and AI-powered semantic search, helping you find documents even when your search does not exactly match the text inside them.",
  },
  {
    question: "Can I search scanned PDFs and images?",
    answer:
      "Yes. DocEzy can use OCR to extract text from supported document images and scanned files. Once the text has been processed, you can search for information contained within those documents.",
  },
  {
    question: "Can I search documents in Hindi?",
    answer:
      "DocEzy is designed to support multilingual document search. This makes it possible to search documents containing text in different languages and improves the experience when working with multilingual documents.",
  },
  {
    question: "Does DocEzy support images and PDFs?",
    answer:
      "Yes. DocEzy supports common document formats such as images and PDFs, allowing you to keep important documents together and search through their contents.",
  },
  {
    question: "Can I import documents from WhatsApp?",
    answer:
      "Yes. DocEzy can receive supported shared files and images from other applications, including WhatsApp, making it easier to save documents directly into your document collection.",
  },
  {
    question: "Do I need to create folders for my documents?",
    answer:
      "No. DocEzy is designed around search rather than traditional folder-based organization. Instead of remembering where you stored a document, you can search for information contained in it.",
  },
  {
    question: "Can I save important documents for quick access?",
    answer:
      "Yes. DocEzy includes favourites so that you can mark important documents and access them more quickly later.",
  },
  {
    question: "How does DocEzy protect my documents?",
    answer:
      "DocEzy is designed with security in mind. Documents are handled through secure application infrastructure and protected using appropriate authentication and encryption mechanisms. For complete details about data handling and privacy, please review our Privacy Policy.",
  },
  {
    question: "Does DocEzy store my documents securely?",
    answer:
      "DocEzy uses secure backend infrastructure for document storage and access. Authentication and secure communication are used to help protect your account and documents.",
  },
  {
    question: "Can I search for documents using approximate words?",
    answer:
      "Yes. DocEzy includes fuzzy and similarity-based search capabilities, which can help find relevant documents even when your search contains spelling differences or does not exactly match the stored text.",
  },
  {
    question: "Is DocEzy available on Android?",
    answer:
      "Yes. DocEzy is currently available on Android through the Google Play Store.",
  },
  {
    question: "Where can I download DocEzy?",
    answer:
      "You can download DocEzy from the Google Play Store. Visit our Download page for the latest download link and more information.",
  },
  {
    question: "Is DocEzy free to use?",
    answer:
      "Please check the current Google Play Store listing for the latest information about DocEzy's available features and pricing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Frequently Asked Questions
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to know about DocEzy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Learn how DocEzy helps you search, organize, and securely store
            your important documents using AI-powered search and OCR.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white transition hover:border-gray-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-semibold">
                <span>{faq.question}</span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-6 pb-6 text-[15px] leading-7 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to find your documents faster?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Download DocEzy and make your important documents easier to search
            and access.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Download DocEzy
            </Link>

            <Link
              href="/features"
              className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-900 transition hover:bg-white"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}