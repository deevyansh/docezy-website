"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKEDIN_URL = "https://www.linkedin.com/";

const links = [
  { href: "#search", label: "Search" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-docezy", label: "Why DocEzy" },
  { href: "/safety-security", label: "Safety & Security" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-gray-900"
        >
          <Image
            src="/logo.png"
            alt="DocEzy logo"
            width={32}
            height={32}
            priority
            className="shrink-0 rounded-[9px]"
          />
          <span>
            Doc<span className="text-blue-600">Ezy</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
              >
                {link.label}
              </a>
            )
          )}

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            LinkedIn
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

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://play.google.com/store/apps/details?id=com.deevyansh.docezy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Get App
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-gray-200/70 bg-white/95 backdrop-blur-xl transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </a>
            )
          )}

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
