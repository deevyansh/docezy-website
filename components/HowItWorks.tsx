export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Import your documents",
      description:
        "Bring your documents into DocEzy and let the app organize them for searching.",
    },
    {
      number: "02",
      title: "Let DocEzy process them",
      description:
        "Your documents are prepared so that important information can be discovered quickly.",
    },
    {
      number: "03",
      title: "Search naturally",
      description:
        "Ask for what you need instead of manually opening files and searching through folders.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-slate-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Simple from start to finish.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get your documents ready and find what you need without the usual
            folder-hunting.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-7 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}