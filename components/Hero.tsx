export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-28 pb-20 sm:min-h-[90vh] sm:pt-32 sm:pb-24">
      {/* Glow / gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/60" />

        {/* Stronger ambient glows */}
        <div className="absolute -top-40 left-1/2 h-[580px] w-[900px] -translate-x-1/2 rounded-full bg-blue-400/40 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-400/35 blur-[110px]" />
        <div className="absolute bottom-10 -right-32 h-[480px] w-[480px] rounded-full bg-indigo-400/30 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[320px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        {/* Brand label */}
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          DOCEZY
        </p>

        {/* Headline with Safari-safe gradient */}
        <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Your documents.
          <br />
          <span
            className="
              bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
              bg-clip-text text-transparent
              [-webkit-background-clip:text]
            "
          >
            Instantly found.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl sm:leading-9">
          Stop wasting time searching through folders.
          Import your documents once and instantly find anything
          using natural language.
        </p>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#download"
            className="
              group relative inline-flex items-center justify-center gap-4
              min-w-[280px] sm:min-w-[340px] h-16 sm:h-[72px]
              rounded-full
              bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400
              px-10 sm:px-14
              text-lg sm:text-xl font-bold tracking-tight text-white
              shadow-xl shadow-blue-500/30
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/45
              active:scale-[0.97]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40
            "
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative">Download for Android</span>
            <span className="relative text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Meta info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-gray-500 sm:text-base">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Android 8+
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Free
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            140 MB
          </span>
        </div>
      </div>
    </section>
  );
}