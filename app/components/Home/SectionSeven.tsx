"use client";

import { AnimatePresence, motion } from "motion/react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rupam Ganguly",
    quote:
      "Thank you once again to the Kalpataru Association for bringing together such a vibrant and heartwarming celebration. We look forward to many more such gatherings that continue to uplift and unite the community. Warm regards",
  },
  {
    name: "Kunal Ghosh",
    quote:
      "What an amazing day spent today with the Kalpataru family. A huge thanks to Arindam, Sambaran, Shubham, Sumanto, Ayantika and everyone from the organizing committee to make this happen. Organizing a picnic for 100 odd people is by no means a small feat. Also, kudos and a huge thanks to Kakoli and Didi's Kitchen team for the lips smacking breakfast and lunch. Looking forward to more such fun engagement 🙏🏼",
  },
  {
    name: "Rupam Ganguly",
    quote:
      "It was an absolute pleasure to spend a wonderful day with the Kalpataru family. My sincere appreciation to Arindam, Sambaran, Shubham, Sumanto, Ayantika, and the entire organising committee for their exceptional efforts in planning and executing such a well-coordinated event. Organising a picnic for over 100 participants is no small undertaking, and the seamless execution is a testament to your dedication and teamwork.",
  },
  {
    name: "Ameet Dutt",
    quote:
      "What an incredible day with the Kalpataru family! Huge thanks to the organizing team—Arindam, Sambaran, Shubham, Sumanto, Ayantika & all—for making it happen. Hats off to Kakoli & Didi’s Kitchen for the delicious meals. Grateful to every member who joined—your energy made it special. Can’t wait for the same spirit during our first Durga Pujo! 🙏🏼",
  },
  {
    name: "Subham Roy",
    quote:
      "Fresh off the fun and bonding at Kalpataru Cultural Association’s first-ever picnic! A big thank you to everyone who joined and made it a day to remember. The energy, the vibe, the togetherness — this is just a glimpse of what’s coming your way. We look forward to seeing each one of you again, and through you, even more new faces, at our grand inaugural Durga Puja. Let’s make it bigger, warmer, and unforgettable — together!",
  },
  {
    name: "Rajat Some",
    quote:
      "Thank you all for making this picnic successful. It was a memorable day and absolute pleasure to spend a wonderful day with the Kalpataru family. My sincere appreciation to Sambaran Da, Arindam Da, Pallav Da, Shubham Da, Sumanto Da, Ayantika Di, Kunal Da and the entire organising committee for their exceptional efforts in planning and executing such a well-coordinated event. Thankyou everyone.",
  },
  {
    name: "Jhilik Pal",
    quote:
      "Amader 1st picnic just fatafati. Je vabe Day and night kaj kore @Sambaran @Arindam Dey @Subham @Ayantika and other working committee members ra picnic ta successful korlo tader many many thanks. And amader lovely didi @Kakoli Das Didis Kitchen @Surajit da And their team thank you so much. Tomra sob kichu khub time maintain kore complete korecho. Food quality was awesome. Specially breakfast ta and lunch er katla kalia ta super super super.",
  },
  {
    name: "Sreeparna Bagchi",
    quote:
      "Hi @Sambaran @Pallav Bardhan & @Arindam Dey: I wanted to thank you on behalf of my parents who had an amazing time at the picnic and all the help and energy that you all provided. Cheers to Team Kalpataru",
  },
  {
    name: "Chanchal Chakrabarty",
    quote:
      "Heartfelt thanks to our Cultural Team. To all participants and our dedicated leadership team, including Bhutnath da, Ameet, Kunal, and Baishali Arun, for their tireless efforts in making our cultural event a huge success. Special thanks to Moumita di and Deepash for their wonderful anchoring! Team Kalpataru",
  },
  {
    name: "Jasmeen Thakkar",
    quote:
      "It was an absolutely incredible event with stunning cultural performances which brought the spirit of Noboborsho to life. Wonderful cake by Lovely and the delicious food at open air dining. Truly memorable!! Congratulations to our team Kalpataru",
  },
  {
    name: "Bimal Das",
    quote:
      "Heartfelt congratulations to all organisers and members of Kalpataru for the vibrant Noboborsho celebration. Thank you for the warm invitation and gracious reception. Truly appreciate your sincere efforts in promoting Bengali culture.",
  },
  {
    name: "Indrajit",
    quote:
      "Many Many congratulations for such wonderful successful well managed event to Team Kalpataru. After long time, well evening spent with such wonderful performances.",
  },
  {
    name: "Dwaipayan Chakrabarty",
    quote:
      "Congratulations Team Kalpataru on an exceptional first year and well conducted Borsho Boron. A big shout out to all of you/us here as well, for participating so whole heartedly and encouraging such events for our community. Through such active participation, things will only get better and better. Best wishes always!",
  },
];

export default function SectionSeven() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  const next = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const previous = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
      );
    }, 9000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#7d1f2a]/45" />

            <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#7d1f2a]/70">
              Testimonials
            </span>

            <span className="h-px w-12 bg-[#7d1f2a]/45" />
          </div>

          <h2 className="font-serif text-5xl leading-none text-[#34251c] sm:text-6xl lg:text-7xl">
            Voices of
            <span className="ml-2 italic text-[#7d1f2a]">Kalpataru.</span>
          </h2>
        </motion.div>

        {/* ============================================================
            FEATURED TESTIMONIAL
        ============================================================ */}

        <div className="relative min-h-117.5 overflow-hidden border-y border-[#8c6b45]/30">
          {/* Large decorative quote */}
          <div className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 select-none font-serif text-[180px] leading-none text-[#7d1f2a]/4.5 sm:text-[240px]">
            “
          </div>

          <div className="relative flex min-h-117.5 items-center justify-center px-3 py-16 sm:px-12 lg:px-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full max-w-4xl text-center"
              >
                <Quote
                  size={28}
                  strokeWidth={1}
                  className="mx-auto mb-8 text-[#7d1f2a]/40"
                />

                <blockquote className="font-serif text-2xl leading-[1.65] text-[#403126] sm:text-3xl lg:text-[34px] lg:leading-[1.6]">
                  “{current.quote}”
                </blockquote>

                <div className="mt-9 flex items-center justify-center gap-4">
                  <span className="h-px w-8 bg-[#7d1f2a]/45" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7d1f2a]">
                    {current.name}
                  </span>

                  <span className="h-px w-8 bg-[#7d1f2a]/45" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ============================================================
            CONTROLS
        ============================================================ */}

        <div className="mt-10 flex flex-col items-center gap-8">
          {/* Name navigation */}
          <div className="flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-3">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${testimonial.name}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative py-1 text-[9px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                    isActive
                      ? "text-[#7d1f2a]"
                      : "text-[#8c6b45]/50 hover:text-[#59483a]"
                  }`}
                >
                  {testimonial.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#7d1f2a] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Arrow controls + counter */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8c6b45]/30 text-[#59483a] transition-all duration-300 hover:border-[#7d1f2a]/50 hover:text-[#7d1f2a]"
            >
              <ArrowLeft size={15} strokeWidth={1.3} />
            </button>

            <div className="min-w-17.5 text-center font-serif text-sm italic text-[#8c6b45]/65">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-1 not-italic text-[#8c6b45]/30">/</span>
              {String(testimonials.length).padStart(2, "0")}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8c6b45]/30 text-[#59483a] transition-all duration-300 hover:border-[#7d1f2a]/50 hover:text-[#7d1f2a]"
            >
              <ArrowRight size={15} strokeWidth={1.3} />
            </button>
          </div>
        </div>

        {/* ============================================================
            CLOSING
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-6 h-px w-12 bg-[#8c6b45]/35" />

          <p className="font-serif text-xl italic text-[#59483a]/65">
            The community speaks for itself.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
