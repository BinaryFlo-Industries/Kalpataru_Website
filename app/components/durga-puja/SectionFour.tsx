const SectionFour = () => {
  const highlights = [
    {
      number: "01",
      title: "1500+ Devotees",
      description:
        "Join a growing community of more than 1,500 devotees coming together to celebrate Maa Durga and the spirit of togetherness.",
      accent: "#E63946",
      bengali: "ভক্ত সমাগম",
    },
    {
      number: "02",
      title: "Free Bhog",
      description:
        "Share a traditional community meal with everyone. Our Bhog is served freely, bringing people together around food, devotion and celebration.",
      accent: "#F59E0B",
      bengali: "ভোগ প্রসাদ",
    },
    {
      number: "03",
      title: "A Day of Culture",
      description:
        "Experience a full day of cultural programs celebrating music, dance, art and the traditions that make Durga Puja so special.",
      accent: "#D94672",
      bengali: "সংস্কৃতির উৎসব",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E63946]">
              The Kalpataru Experience
            </p>

            <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#3B0B12] sm:text-6xl lg:text-7xl">
              More than a Puja.
              <span className="block italic text-[#E63946]">
                A celebration together.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-[#3B0B12]/65 sm:text-lg">
              At Kalpataru, Durga Puja is where devotion meets community,
              culture and the simple joy of being together. This year, we look
              forward to welcoming everyone into the celebration.
            </p>
          </div>
        </div>

        {/* Main visual / statement */}
        <div className="mt-16 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#3B0B12]">
          <div className="relative px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Decorative Bengali mark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-12 font-serif text-[10rem] leading-none text-white/[0.035] sm:text-[15rem] lg:text-[19rem]"
            >
              মা
            </div>

            <div className="relative z-10 max-w-4xl">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F59E0B]">
                Maa Durga • Community • Culture
              </p>

              <p className="font-serif text-3xl leading-tight tracking-tight text-[#FFFDF8] sm:text-4xl lg:text-5xl">
                Come for Maa.
                <br />
                Stay for the people,
                <br />
                <span className="italic text-[#FFD166]">
                  the culture and the celebration.
                </span>
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
                <div>
                  <p className="font-serif text-3xl text-[#FFFDF8]">1500+</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Expected devotees
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl text-[#FFFDF8]">Free</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Community Bhog
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl text-[#FFFDF8]">All Day</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Cultural programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)] sm:p-8"
            >
              {/* Accent */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: item.accent }}
              />

              {/* Bengali decorative character */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 bottom-0 font-serif text-[6rem] leading-none opacity-[0.035]"
                style={{ color: item.accent }}
              >
                {item.bengali}
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <span
                    className="text-[11px] font-semibold tracking-[0.2em]"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </span>

                  <span
                    className="font-serif text-2xl opacity-70"
                    style={{ color: item.accent }}
                  >
                    {item.bengali}
                  </span>
                </div>

                <h3 className="mt-12 font-serif text-3xl tracking-tight text-[#3B0B12]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#3B0B12]/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#3B0B12]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-serif text-2xl leading-snug text-[#3B0B12] sm:text-3xl">
            A celebration made richer by every person who becomes part of it.
          </p>

          <p className="shrink-0 font-serif text-xl italic text-[#D94672]">
            এসো, মা-এর সাথে
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
