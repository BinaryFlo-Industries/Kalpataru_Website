import Link from "next/link";

const SectionFive = () => {
  const benefits = [
    {
      number: "01",
      title: "Dedicated Parking",
      description:
        "Enjoy dedicated parking arrangements during the Puja celebrations for a more convenient experience.",
      accent: "#E63946",
    },
    {
      number: "02",
      title: "Front-Row Seating",
      description:
        "Get front-row seating at our cultural events and experience the performances up close.",
      accent: "#F59E0B",
    },
    {
      number: "03",
      title: "Special Food Arrangements",
      description:
        "Enjoy exclusive food arrangements, including Shashti morning offerings and Dashami dinner.",
      accent: "#D94672",
    },
    {
      number: "04",
      title: "A Community of People",
      description:
        "Meet and connect with fellow art enthusiasts, professionals and members of the Kalpataru community.",
      accent: "#E63946",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F0] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E63946]">
            Become a Privileged Member
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] text-[#3B0B12] sm:text-6xl lg:text-7xl">
            Celebrate Maa.
            <span className="block italic text-[#D94672]">
              Be part of something more.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#3B0B12]/60 sm:text-lg">
            Make this Durga Puja a little more special with a Privileged
            Membership at Kalpataru Cultural Association.
          </p>
        </div>

        {/* Membership contribution */}
        <div className="mt-14 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#3B0B12]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div className="relative px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-5 font-serif text-[13rem] leading-none text-white/[0.035] sm:text-[17rem]"
              >
                মা
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F59E0B]">
                  Membership Contribution
                </p>

                <div className="mt-5 flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-6xl tracking-tighter text-[#FFFDF8] sm:text-7xl">
                    ₹7,500
                  </span>

                  <span className="text-sm text-white/45">per family</span>
                </div>

                <p className="mt-6 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                  Become a Privileged Member and enjoy an enhanced Puja
                  experience while being a part of the community that makes
                  these celebrations possible.
                </p>

                <Link
                  href="/join-us"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#E63946] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#d92f3d] hover:shadow-[0_12px_30px_rgba(230,57,70,0.25)]"
                >
                  Become a Privileged Member
                  <span aria-hidden="true" className="text-lg leading-none">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="border-t border-white/10 bg-white/[0.035] px-7 py-10 sm:px-12 sm:py-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Membership at a glance
              </p>

              <div className="mt-7 space-y-5">
                {[
                  "Dedicated parking",
                  "Front-row seating",
                  "Exclusive Shashti morning offerings",
                  "Special Dashami dinner",
                  "Community networking",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-serif text-sm text-[#FFD166]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-6 text-white/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)] sm:p-8"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: benefit.accent }}
              />

              <div className="flex items-start justify-between">
                <span
                  className="text-[11px] font-semibold tracking-[0.2em]"
                  style={{ color: benefit.accent }}
                >
                  {benefit.number}
                </span>

                <span
                  className="font-serif text-3xl opacity-20"
                  style={{ color: benefit.accent }}
                >
                  ✦
                </span>
              </div>

              <h3 className="mt-14 font-serif text-3xl tracking-tight text-[#3B0B12]">
                {benefit.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-[#3B0B12]/60">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-[#3B0B12]/10 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3B0B12]/40">
                This Puja
              </p>

              <p className="mt-2 font-serif text-2xl leading-tight tracking-[-0.02em] text-[#3B0B12] sm:text-3xl">
                Come closer to the celebration.
              </p>
            </div>

            <p className="font-serif text-xl italic text-[#E63946]">মা আসছেন</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
