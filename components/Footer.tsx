import Image from "next/image";
import Link from "next/link";

const LINKEDIN_URL = "https://www.linkedin.com/";
const YOUTUBE_URL = "https://www.youtube.com/@DocEzy";
const INSTAGRAM_URL = "https://www.instagram.com/docezy.app/?hl=en";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="DocEzy logo"
                width={30}
                height={30}
                className="shrink-0 rounded-lg"
              />

              <div>
                <p className="text-lg font-extrabold text-white">
                  Doc<span className="text-blue-500">Ezy</span>
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Your documents. Instantly found.
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Find your documents instantly with powerful AI-powered search,
              OCR, and secure document storage.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                href="/how-it-works"
                className="text-gray-400 transition hover:text-blue-500"
              >
                How It Works
              </Link>

              <Link
                href="/search"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Search
              </Link>

              <Link
                href="/safety-security"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Safety & Security
              </Link>

              <Link
                href="/download"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Download
              </Link>

              <Link
                href="/faq"
                className="text-gray-400 transition hover:text-blue-500"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Social
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                href="/why"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Features
              </Link>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-500"
              >
                LinkedIn
              </a>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-500"
              >
                YouTube
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Instagram
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.deevyansh.docezy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Google Play
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="https://privacy.docezy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Privacy Policy
              </a>

              <a
                href="https://terms.docezy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-500"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DocEzy. All rights reserved.
          </p>

          <p>
            Your documents. Instantly found.
          </p>
        </div>

      </div>
    </footer>
  );
}