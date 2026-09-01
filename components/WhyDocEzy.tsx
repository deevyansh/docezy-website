export default function WhyDocEzy() {
  const features = [
    {
      title: "Fast document discovery",
      description:
        "Spend less time browsing folders and more time getting things done.",
    },
    {
      title: "Natural language search",
      description:
        "Search for information the way you naturally think about it.",
    },
    {
      title: "Your documents, one place",
      description:
        "Keep your important documents accessible and easier to navigate.",
    },
    {
      title: "Built for everyday use",
      description:
        "A simple experience designed around finding information quickly.",
    },
  ];

  return (
    <section
      id="why-docezy"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Why DocEzy
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Your documents should work for you.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              DocEzy is designed to make finding information inside your
              documents faster, simpler, and less frustrating.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}