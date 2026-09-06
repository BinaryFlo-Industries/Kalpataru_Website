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

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-5 sm:gap-4">
          {[
            ["T", "Trust"],
            ["T", "Transparency"],
            ["T", "Teamwork"],
            ["T", "Togetherness"],
            ["T", "Tradition"],
          ].map(([letter, word], index) => (
            <div
              key={word}
              className="rounded-2xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-4"
            >
              <span
                className={`font-serif text-3xl italic ${
                  index % 2 === 0 ? "text-[#E63946]" : "text-[#F59E0B]"
                }`}
              >
                {letter}
              </span>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#3B0B12]/55">
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
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50">
                Frequently Asked Questions
              </span>
            </div>

            <p className="font-serif text-lg italic text-[#D94672]">
              A little clarity goes a long way.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.035em] text-[#3B0B12] sm:text-6xl lg:text-[5.4rem]">
              Things you
              <br />
              <span className="italic text-[#E63946]">may wonder.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#3B0B12]/60 sm:text-base sm:leading-8">
              Before becoming part of Kalpataru, there are a few things worth
              knowing. We believe in keeping those answers simple and open.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            FAQ + SIDE NOTE
        ============================================================ */}

        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          {/* FAQ REGISTER */}

          <div className="rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-3 sm:p-5">
            <div className="overflow-hidden rounded-[1.25rem] border border-[#3B0B12]/8">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className={`relative border-b border-[#3B0B12]/10 last:border-b-0 ${
                      isOpen ? "bg-[#FFFAF2]" : "bg-[#FFFDF8]"
                    }`}
                  >
                    {/* Active marker */}

                    <span
                      className={`absolute bottom-0 left-0 top-0 w-1 transition-all duration-500 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      } ${index % 2 === 0 ? "bg-[#E63946]" : "bg-[#F59E0B]"}`}
                    />

                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="group grid w-full grid-cols-[42px_1fr_38px] items-center gap-4 px-5 py-6 text-left sm:grid-cols-[55px_1fr_42px] sm:gap-5 sm:px-7 sm:py-7"
                    >
                      {/* Number */}

                      <span
                        className={`font-serif text-sm italic transition-colors duration-300 ${
                          isOpen
                            ? "text-[#E63946]"
                            : "text-[#3B0B12]/30 group-hover:text-[#E63946]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <span
                        className={`font-serif text-xl leading-[1.15] transition-colors duration-300 sm:text-2xl ${
                          isOpen
                            ? "text-[#E63946]"
                            : "text-[#3B0B12] group-hover:text-[#E63946]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Toggle */}

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-[#E63946] bg-[#E63946] text-white"
                            : "border-[#3B0B12]/15 text-[#3B0B12]/45 group-hover:border-[#E63946] group-hover:text-[#E63946]"
                        }`}
                      >
                        <ChevronDown size={16} strokeWidth={1.4} />
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
                          <div className="grid grid-cols-[42px_1fr] gap-4 px-5 pb-8 sm:grid-cols-[55px_1fr] sm:gap-5 sm:px-7">
                            <div />

                            <div className="max-w-3xl border-l border-[#F59E0B]/60 pl-5 text-sm leading-7 text-[#3B0B12]/65 sm:pl-6">
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
          </div>

          {/* ============================================================
              SIDE NOTE
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#3B0B12] p-7">
                <span className="absolute right-5 top-3 font-serif text-8xl leading-none text-white/[0.035]">
                  ?
                </span>

                <div className="relative">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10">
                    <MessageCircle
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#F59E0B]"
                    />
                  </div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                    Still curious?
                  </p>

                  <h3 className="mt-3 font-serif text-3xl leading-tight text-[#FFFDF8]">
                    We&apos;d rather you
                    <br />
                    <span className="italic text-[#D94672]">ask.</span>
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-white/55">
                    Have something else on your mind? Speak to any admin of
                    Kalpataru.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Start a conversation
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-[#F59E0B]">
                      <ArrowUpRight size={14} strokeWidth={1.4} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E63946]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
                  We&apos;re listening
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            MOBILE CONTACT CARD
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl bg-[#3B0B12] p-6 lg:hidden"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10">
              <MessageCircle
                size={17}
                strokeWidth={1.4}
                className="text-[#F59E0B]"
              />
            </div>

            <div>
              <p className="font-serif text-xl text-[#FFFDF8]">
                Still have a question?
              </p>

              <p className="mt-1 text-sm leading-6 text-white/55">
                Please call or DM any admin of Kalpataru.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            5T — CLOSING MOMENT
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <div className="grid items-end gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#F59E0B]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45">
                  The Kalpataru way
                </span>
              </div>

              <p className="font-serif text-lg italic text-[#D94672]">
                Five simple ideas.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-4xl leading-tight tracking-tight text-[#3B0B12] sm:text-5xl">
                What holds a community
                <span className="italic text-[#E63946]"> together.</span>
              </h3>
            </div>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] sm:grid-cols-5">
            {[
              ["01", "Trust"],
              ["02", "Transparency"],
              ["03", "Teamwork"],
              ["04", "Togetherness"],
              ["05", "Tradition"],
            ].map(([number, word], index) => (
              <div
                key={word}
                className={`relative p-6 sm:p-7 ${
                  index !== 4
                    ? "border-b border-[#3B0B12]/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3B0B12]/25">
                  {number}
                </span>

                <div className="mt-7">
                  <span
                    className={`font-serif text-4xl italic ${
                      index === 0 || index === 3
                        ? "text-[#E63946]"
                        : index === 1 || index === 4
                          ? "text-[#F59E0B]"
                          : "text-[#D94672]"
                    }`}
                  >
                    T
                  </span>

                  <p className="mt-2 font-serif text-lg text-[#3B0B12]">
                    {word}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E63946]/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            <span className="h-px w-8 bg-[#D94672]/35" />
          </div>

          <p className="font-serif text-2xl italic text-[#3B0B12]/65 sm:text-3xl">
            Come with questions.
            <br className="sm:hidden" /> Stay for the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionEight;
