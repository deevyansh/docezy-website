"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className="text-xl font-extrabold tracking-tight text-gray-900"
        >
          Doc<span className="text-blue-600">Ezy</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#search"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Search
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            How It Works
          </a>

          <a
            href="#why-docezy"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Why DocEzy
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.deevyansh.docezy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Download
          </a>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.deevyansh.docezy"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Get App
        </a>
      </nav>
    </header>
  );
}