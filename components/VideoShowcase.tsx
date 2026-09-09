export default function VideoShowcase() {
  const featureVideos = [
    {
      src: "/videos/feature1.mp4",
      title: "Search your documents",
      description:
        "Bring your documents into DocEzy and let the app search it using the natural language of your queries. No more digging through folders or opening files.",
    },
    {
      src: "/videos/feature2.mp4",
      title: "Smart Id card",
      description:
        "DocEzy allows you to put your ID card on the one page of the PDF",
    },
    {
      src: "/videos/feature3.mp4",
      title: "Convert to PDF",
      description:
        "Convert your documents to PDF format for easy sharing and storage. DocEzy ensures that your files are preserved in a widely accepted format.",
    },
  ];

  return (
    <section id="videos" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            See DocEzy In Action
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Watch it work.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A quick introduction to DocEzy, followed by a closer look at each
            step of finding your documents.
          </p>
        </div>

        {/* Intro video */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-black shadow-xl shadow-blue-500/10">
          <video
            className="aspect-video w-full"
            src="/videos/intro.mp4"
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Feature videos */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featureVideos.map((feature) => (
            <div
              key={feature.src}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <video
                className="aspect-video w-full bg-black"
                src={feature.src}
                controls
                playsInline
                preload="none"
              >
                Your browser does not support the video tag.
              </video>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
