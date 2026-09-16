import React from "react";

const SectionFour = () => {
  return (
    <section
      id="lakshmi-puja-home"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-kalpataru-red">
              The spirit of the puja
            </p>

            <p className="mt-5 font-serif text-3xl leading-none text-kalpataru-pink sm:text-4xl">
              ঘরের পূজা
            </p>
          </div>

          <div>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-tight text-kalpataru-text sm:text-6xl lg:text-7xl">
              A puja rooted
              <br />
              <span className="italic">in home.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-(--kalpataru-text)/70 sm:text-lg">
              Kojagari Lakshmi Puja carries a deeply intimate Bengali character.
              The preparation of the home, the drawing of alpana, the placing of
              Lakshmi&apos;s footprints and the gathering of family all become
              part of the celebration.
            </p>
          </div>
        </div>

        {/* Main editorial area */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main feature */}
          <div className="relative min-h-107.5 overflow-hidden rounded-4xl border border-(--kalpataru-text)/10 bg-[#fffdf8] p-8 sm:p-10 lg:p-12">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-(--kalpataru-gold)/25" />

            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-(--kalpataru-gold)/20" />

            <div className="relative flex min-h-90 flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full border border-(--kalpataru-gold)/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-kalpataru-gold">
                  Bengali tradition
                </span>

                <h3 className="mt-8 max-w-xl font-serif text-4xl leading-[0.95] text-kalpataru-text sm:text-5xl">
                  Preparation is
                  <br />
                  <span className="italic">part of the prayer.</span>
                </h3>
              </div>

              <div className="max-w-xl">
                <div className="mb-6 h-px w-20 bg-kalpataru-red" />

                <p className="text-sm leading-7 text-(--kalpataru-text)/65 sm:text-base">
                  The beauty of Kojagari lies in the quiet preparation that
                  surrounds the puja — creating a welcoming space, drawing
                  alpana, arranging traditional elements and bringing family
                  together for the occasion.
                </p>
              </div>
            </div>
          </div>

          {/* Traditional details */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-4xl border border-(--kalpataru-text)/10 bg-[#fffdf8] p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-kalpataru-red">
                The setting
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-kalpataru-text">
                A home prepared with care.
              </h3>

              <p className="mt-5 text-sm leading-7 text-(--kalpataru-text)/65">
                Clean surroundings and carefully prepared spaces form an
                important part of the traditional Bengali observance.
              </p>
            </div>

            <div className="rounded-4xl border border-(--kalpataru-text)/10 bg-kalpataru-text p-7 text-[#fffaf2] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-kalpataru-yellow">
                Food & togetherness
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight">
                Tradition shared around the family.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#fffaf2]/65">
                Traditional Bengali preparations such as naru and khoi-er moa
                are associated with Kojagari celebrations, although offerings
                and food traditions can vary between families and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-16 border-t border-(--kalpataru-text)/10 pt-8 lg:mt-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl font-serif text-2xl leading-tight text-kalpataru-text sm:text-3xl">
              A celebration that feels intimate,
              <span className="italic"> familiar, and Bengali.</span>
            </p>

            <p className="max-w-xs text-xs uppercase leading-5 tracking-[0.16em] text-(--kalpataru-text)/45">
              Kojagari Lakshmi Puja
              <br />
              Bengali tradition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
