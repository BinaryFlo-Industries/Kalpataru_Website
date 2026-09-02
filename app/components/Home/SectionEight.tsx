"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Kalpataru a new group? What is its principle?",
    answer: (
      <p>
        Kalpataru is a newly formed community brought together by like-minded
        individuals who value transparency and inclusivity. Our principles
        include transparency in all our dealings, equal opportunities for
        everyone to participate and contribute, and open communication with
        respectful dialogue.
        <br />
        <br />
        Let&apos;s grow together.
      </p>
    ),
  },
  {
    question: "Why Kalpataru, when old groups exist?",
    answer: (
      <p>
        While other groups may focus on professional ambitions and individual
        agendas, Kalpataru is driven by a deeper purpose. As a member of
        Kalpataru, you will experience the nostalgia of participating in
        traditional pujas and cultural events just like you did in your
        childhood.
        <br />
        <br />
        Our mission is to reconnect our young generation with their cultural
        heritage.
      </p>
    ),
  },
  {
    question:
      "Is the venue for Kalpataru&apos;s upcoming event near my location?",
    answer: (
      <p>
        <span className="font-serif text-lg italic text-[#7d1f2a]">
          Distance is relative, and it&apos;s the enthusiasm and interest that
          matters.
        </span>
        <br />
        <br />
        Join us at Kalpataru&apos;s upcoming event, conveniently located near
        NIBM, Undri, Handewadi, and Hadapsar. Come experience an epicenter of
        love, care and inclusiveness!
      </p>
    ),
  },
  {
    question:
      "Will it be just another typical Pujo event, where I contribute, eat bhog and leave? Or will it be something more meaningful?",
    answer: (
      <div>
        <p className="mb-7">The 5T vision of Kalpataru is clear and concise.</p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-5">
          {[
            ["T", "Trust"],
            ["T", "Transparency"],
            ["T", "Teamwork"],
            ["T", "Togetherness"],
            ["T", "Tradition"],
          ].map(([letter, word]) => (
            <div key={word} className="text-center sm:text-left">
              <span className="font-serif text-3xl italic text-[#7d1f2a]">
                {letter}
              </span>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#59483a]/70">
                {word}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-7">
          This framework provides a strong foundation for building a harmonious
          and inclusive community.
        </p>
      </div>
    ),
  },
];

export default function SectionEight() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#7d1f2a]/50" />

              <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#7d1f2a]/70">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="font-serif text-5xl leading-[0.95] text-[#34251c] sm:text-6xl lg:text-7xl">
              Questions,
              <br />
              <span className="italic text-[#7d1f2a]">answered.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#59483a]/70 lg:justify-self-end">
            A few things people often want to know before becoming part of the
            Kalpataru community.
          </p>
        </motion.div>

        {/* ============================================================
            FAQ REGISTER
        ============================================================ */}

        <div className="border-t border-[#8c6b45]/35">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="border-b border-[#8c6b45]/25"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[42px_1fr_40px] items-center gap-5 py-7 text-left sm:grid-cols-[60px_1fr_50px] sm:py-8"
                >
                  {/* Number */}
                  <span
                    className={`font-serif text-sm italic transition-colors duration-300 ${
                      isOpen ? "text-[#7d1f2a]" : "text-[#8c6b45]/50"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`font-serif text-xl leading-tight transition-colors duration-300 sm:text-2xl lg:text-[27px] ${
                      isOpen
                        ? "text-[#7d1f2a]"
                        : "text-[#34251c] group-hover:text-[#7d1f2a]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle */}
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#7d1f2a]/40 bg-[#7d1f2a]/5 text-[#7d1f2a]"
                        : "border-[#8c6b45]/25 text-[#59483a]/60 group-hover:border-[#7d1f2a]/40 group-hover:text-[#7d1f2a]"
                    }`}
                  >
                    <ChevronDown size={16} strokeWidth={1.3} />
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-[42px_1fr] gap-5 pb-9 sm:grid-cols-[60px_1fr]">
                        <div />

                        <div className="max-w-3xl border-l border-[#8c6b45]/25 pl-5 text-sm leading-7 text-[#59483a]/75 sm:pl-7">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================
            HAVE A QUESTION?
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-start justify-between gap-7 border border-[#8c6b45]/30 bg-[#eee0c4]/35 px-7 py-8 sm:flex-row sm:items-center sm:px-9"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8c6b45]/30 bg-[#f5e8ce]">
              <MessageCircle
                size={17}
                strokeWidth={1.3}
                className="text-[#7d1f2a]"
              />
            </div>

            <div>
              <p className="font-serif text-xl text-[#34251c]">
                Have something else on your mind?
              </p>

              <p className="mt-1 text-sm text-[#59483a]/65">
                Please call or DM any admin of Kalpataru.
              </p>
            </div>
          </div>

          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#7d1f2a]/70">
            We&apos;re listening
          </span>
        </motion.div>

        {/* ============================================================
            5T SIGNATURE
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-5 h-px w-12 bg-[#8c6b45]/35" />

          <p className="font-serif text-xl italic text-[#59483a]/65">
            Trust · Transparency · Teamwork · Togetherness · Tradition
          </p>
        </motion.div>
      </div>
    </section>
  );
}
