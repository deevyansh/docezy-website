const LINKEDIN_URL = "https://www.linkedin.com/";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-extrabold text-gray-900">
              Doc<span className="text-blue-600">Ezy</span>
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Your documents. Instantly found.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="https://privacy.docezy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              Privacy Policy
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.deevyansh.docezy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              Google Play
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} DocEzy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}