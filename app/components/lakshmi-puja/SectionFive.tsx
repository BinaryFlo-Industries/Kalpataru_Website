const SectionFive = () => {
  return (
    <section
      id="lakshmi-puja-closing"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-(--kalpataru-text)/10 bg-[#fffdf8] px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          {/* Decorative moon */}
          <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-(--kalpataru-gold)/25 sm:right-12 sm:top-12 sm:h-40 sm:w-40" />

          <div className="absolute right-16 top-16 h-12 w-12 rounded-full bg-(--kalpataru-gold)/10 sm:right-24 sm:top-24 sm:h-20 sm:w-20" />

          {/* Content */}
          <div className="relative max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-kalpataru-red">
              Kojagari
            </p>

            <p className="mt-6 font-serif text-4xl leading-none text-kalpataru-pink sm:text-5xl">
              কে জাগো?
            </p>

            <h2 className="mt-8 font-serif text-5xl leading-[0.9] tracking-tight text-kalpataru-text sm:text-6xl lg:text-8xl">
              Who is
              <br />
              <span className="italic">awake?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-(--kalpataru-text)/65 sm:text-lg">
              On the full-moon night of Kojagari, the question gives the
              celebration its name and its atmosphere. A night of wakefulness,
              devotion, family, and Bengali tradition.
            </p>
          </div>

          {/* Bottom line */}
          <div className="relative mt-16 flex flex-col gap-6 border-t border-(--kalpataru-text)/10 pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-xl text-kalpataru-text sm:text-2xl">
              শুভ কোজাগরী লক্ষ্মী পূর্ণিমা
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-(--kalpataru-text)/40">
              Kalpataru · Pune
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
