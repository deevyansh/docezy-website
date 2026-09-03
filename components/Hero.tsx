import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-28 pb-20 sm:min-h-[90vh] sm:pt-32 sm:pb-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/60" />

        {/* Grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,78,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 85% 65% at 50% 38%, white 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 65% at 50% 38%, white 40%, transparent 100%)",
          }}
        />

        {/* Dot accent layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(37,99,235,0.18) 1.3px, transparent 1.3px)",
            backgroundSize: "44px 44px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 36%, white 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 36%, white 30%, transparent 100%)",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute -top-40 left-1/2 h-[580px] w-[900px] -translate-x-1/2 rounded-full bg-blue-400/25 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[110px]" />
        <div className="absolute bottom-10 -right-32 h-[480px] w-[480px] rounded-full bg-indigo-400/18 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[320px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

        {/* Floating accent shapes, kept clear of the text column */}
        <div
          className="animate-float-slow absolute left-[45%] top-[16%] hidden h-12 w-12 rotate-[-14deg] rounded-2xl border border-blue-100/80 bg-white/60 shadow-lg shadow-blue-500/10 backdrop-blur-sm sm:block"
          style={{ "--float-rot": "-14deg" } as React.CSSProperties}
        />
        <div
          className="animate-float-slower absolute right-[6%] top-[14%] hidden h-9 w-9 rotate-[10deg] rounded-xl bg-cyan-400/25 shadow-lg shadow-cyan-500/10 sm:block"
          style={{ "--float-rot": "10deg" } as React.CSSProperties}
        />
        <div
          className="animate-float-slow absolute bottom-[10%] left-[5%] hidden h-7 w-7 rotate-[18deg] rounded-lg bg-blue-500/15 lg:block"
          style={{ "--float-rot": "18deg", animationDelay: "1.2s" } as React.CSSProperties}
        />
        <span className="animate-pulse-soft absolute right-[30%] top-[10%] hidden h-2 w-2 rounded-full bg-cyan-400 sm:block" />
        <span className="animate-pulse-soft absolute left-[40%] bottom-[8%] hidden h-1.5 w-1.5 rounded-full bg-blue-500 sm:block" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Text column */}
        <div className="text-center lg:text-left">
          {/* Brand label */}
          <div className="mb-8 flex items-center justify-center gap-2.5 lg:justify-start">
            <Image
              src="/logo.png"
              alt="DocEzy logo"
              width={26}
              height={26}
              priority
              className="shrink-0 rounded-[7px]"
            />
            <p className="text-sm font-bold tracking-tight text-gray-900">
              Doc<span className="text-blue-600">Ezy</span>
            </p>
          </div>

          {/* Headline with Safari-safe gradient */}
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Your Documents.
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
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl sm:leading-9 lg:mx-0">
            Stop wasting time searching through folders.
            Import your documents once and instantly find anything
            using natural language.
          </p>

          {/* CTA */}
          <div className="mt-14 flex justify-center lg:justify-start">
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
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-gray-500 sm:text-base lg:justify-start">
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

        {/* Logo showcase column */}
        <div className="relative hidden justify-self-center lg:flex lg:justify-self-end">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-500/25 to-cyan-400/25 blur-3xl" />

          {/* Floating accent chips */}
          <div
            className="animate-float-slow absolute -left-8 top-6 h-14 w-14 rotate-[-12deg] rounded-2xl border border-white/60 bg-white/70 shadow-lg shadow-blue-500/10 backdrop-blur-sm"
            style={{ "--float-rot": "-12deg" } as React.CSSProperties}
          />
          <div
            className="animate-float-slower absolute -right-6 bottom-10 h-10 w-10 rotate-[16deg] rounded-xl border border-white/60 bg-white/70 shadow-lg shadow-blue-500/10 backdrop-blur-sm"
            style={{ "--float-rot": "16deg" } as React.CSSProperties}
          />
          <div
            className="animate-float-slow absolute right-10 -top-6 h-7 w-7 rotate-[8deg] rounded-lg bg-cyan-400/40 shadow-lg shadow-cyan-500/20"
            style={{ "--float-rot": "8deg", animationDelay: "0.6s" } as React.CSSProperties}
          />

          <div className="animate-float-slower relative rounded-[2.5rem] border border-white/60 bg-white/60 p-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="DocEzy app icon"
              width={220}
              height={220}
              priority
              className="rounded-[2.75rem] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}