"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";
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
        <span className="font-serif text-lg italic text-[#E63946]">
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
        <p className="mb-7">
          The <span className="font-semibold text-[#E63946]">5T vision</span> of
          Kalpataru is clear and concise.
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-5">
          {[
            ["T", "Trust", "#E63946"],
            ["T", "Transparency", "#F59E0B"],
            ["T", "Teamwork", "#D94672"],
            ["T", "Togetherness", "#E63946"],
            ["T", "Tradition", "#F59E0B"],
          ].map(([letter, word, accent]) => (
            <div key={word} className="relative pl-4">
              <span
                className="absolute left-0 top-0 h-full w-px"
                style={{ backgroundColor: accent }}
              />

              <span
                className="font-serif text-3xl italic"
                style={{ color: accent }}
              >
                {letter}
              </span>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#3B0B12]/60">
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

const SectionEight = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FFFAF2] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#E63946]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#E63946]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="font-serif text-5xl leading-[0.92] tracking-tight text-[#3B0B12] sm:text-6xl lg:text-7xl">
              Questions,
              <br />
              <span className="italic text-[#E63946]">answered.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3B0B12]/45">
                Before you join us
              </span>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#3B0B12]/65 sm:text-base">
              A few things people often want to know before becoming part of the
              Kalpataru community.
            </p>
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="border-t border-[#3B0B12]/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className={`border-b border-[#3B0B12]/15 transition-colors duration-300 ${
                  isOpen ? "bg-white/45" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[38px_1fr_40px] items-center gap-4 py-7 text-left sm:grid-cols-[60px_1fr_46px] sm:gap-5 sm:py-8"
                >
                  {/* NUMBER */}
                  <div className="flex flex-col items-start">
                    <span
                      className={`font-serif text-sm italic transition-colors duration-300 ${
                        isOpen
                          ? "text-[#E63946]"
                          : "text-[#3B0B12]/35 group-hover:text-[#E63946]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`mt-2 h-px transition-all duration-300 ${
                        isOpen ? "w-7 bg-[#F59E0B]" : "w-4 bg-[#3B0B12]/15"
                      }`}
                    />
                  </div>

                  {/* QUESTION */}
                  <span
                    className={`font-serif text-xl leading-tight transition-all duration-300 sm:text-2xl lg:text-[27px] ${
                      isOpen
                        ? "text-[#E63946]"
                        : "text-[#3B0B12] group-hover:text-[#E63946]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* TOGGLE */}
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                      isOpen
                        ? "rotate-180 border-[#E63946] bg-[#E63946] text-white"
                        : "border-[#3B0B12]/20 text-[#3B0B12]/50 group-hover:border-[#E63946] group-hover:text-[#E63946]"
                    }`}
                  >
                    <ChevronDown size={16} strokeWidth={1.4} />
                  </span>
                </button>

                {/* ANSWER */}
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
                      <div className="grid grid-cols-[38px_1fr] gap-4 pb-9 sm:grid-cols-[60px_1fr] sm:gap-5">
                        <div />

                        <div className="relative max-w-3xl border-l border-[#F59E0B] pl-5 text-sm leading-7 text-[#3B0B12]/70 sm:pl-7">
                          <span className="absolute -left-0.75 top-1.5 h-1.5 w-1.5 rounded-full bg-[#E63946]" />

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
    HAVE A QUESTION
============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
    group
    relative
    mt-16
    overflow-hidden
    rounded-[1.75rem]
    border
    border-[#3B0B12]/10
    bg-[#FFFDF8]
    p-7
    transition-shadow
    duration-500
    hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)]
    sm:p-9
    lg:p-10
  "
        >
          {/* Accent line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-0 h-1 bg-[#E63946]"
          />

          {/* Decorative Bengali mark */}

          <div className="pointer-events-none absolute right-6 top-2 select-none font-serif text-8xl leading-none text-[#E63946]/4.5 transition-transform duration-500 group-hover:scale-110">
            ?
          </div>

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E63946]/20 bg-[#E63946]/5">
                <MessageCircle
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#E63946]"
                />
              </div>

              <div>
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                  Still curious?
                </p>

                <h3 className="font-serif text-2xl leading-tight text-[#3B0B12] sm:text-3xl">
                  Have something else
                  <br className="hidden sm:block" /> on your mind?
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#3B0B12]/60">
                  Please call or DM any admin of Kalpataru. We&apos;re always
                  happy to hear from you.
                </p>
              </div>
            </div>

            {/* Right */}

            <div className="flex shrink-0 items-center gap-3 self-start sm:self-center">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/40">
                We&apos;re listening
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3B0B12]/15 text-[#E63946] transition-all duration-300 group-hover:border-[#E63946] group-hover:bg-[#E63946] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </div>
        </motion.div>

        {/* 5T SIGNATURE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#E63946]/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            <span className="h-px w-12 bg-[#D94672]/35" />
          </div>

          <p className="font-serif text-lg italic leading-relaxed text-[#3B0B12]/65 sm:text-xl">
            <span className="text-[#E63946]">Trust</span>
            <span className="mx-2 text-[#3B0B12]/25">·</span>
            <span className="text-[#F59E0B]">Transparency</span>
            <span className="mx-2 text-[#3B0B12]/25">·</span>
            <span className="text-[#D94672]">Teamwork</span>
            <span className="mx-2 text-[#3B0B12]/25">·</span>
            <span className="text-[#E63946]">Togetherness</span>
            <span className="mx-2 text-[#3B0B12]/25">·</span>
            <span className="text-[#F59E0B]">Tradition</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionEight;
