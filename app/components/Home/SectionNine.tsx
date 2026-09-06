"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowUpRight, Navigation } from "lucide-react";

const SectionNine = () => {
  return (
    <section
      id="contact"
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
          className="mb-14"
        >
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#E63946]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50">
                  Contact
                </span>
              </div>

              <p className="font-serif text-lg italic text-[#D94672]">
                Come say hello.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.035em] text-[#3B0B12] sm:text-6xl lg:text-[5.4rem]">
                Let&apos;s stay
                <br />
                <span className="italic text-[#E63946]">connected.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#3B0B12]/60 sm:text-base sm:leading-8">
                Whether you have a question about an upcoming event or simply
                want to know more about Kalpataru, we&apos;d be happy to hear
                from you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            CONTACT COMPOSITION
        ============================================================ */}

        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          {/* ============================================================
              CONTACT DETAILS CARD
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              flex
              min-h-155
              flex-col
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

            {/* Decorative Bengali-style mark */}

            <div className="pointer-events-none absolute right-5 top-2 select-none font-serif text-8xl leading-none text-[#E63946]/4.5 transition-transform duration-500 group-hover:scale-110">
              যোগাযোগ
            </div>

            {/* Card intro */}

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E63946]/20 bg-[#E63946]/5">
                <Navigation
                  size={18}
                  strokeWidth={1.3}
                  className="text-[#E63946]"
                />
              </div>

              <span className="font-serif text-sm italic text-[#3B0B12]/35">
                Pune · Maharashtra
              </span>
            </div>

            {/* Address */}

            <div className="relative mt-14">
              <ContactItem icon={MapPin} label="Address">
                <p className="font-serif text-2xl leading-relaxed text-[#3B0B12]">
                  Muhammedwadi Road,
                  <br />
                  Hadapsar,
                  <br />
                  Pune 411028
                </p>
              </ContactItem>
            </div>

            <div className="my-9 h-px w-full bg-[#3B0B12]/10" />

            {/* Phone */}

            <ContactItem icon={Phone} label="Call Us">
              <div className="flex flex-col gap-2">
                <a
                  href="tel:9970502036"
                  className="font-serif text-xl text-[#3B0B12] transition-colors duration-300 hover:text-[#E63946] sm:text-2xl"
                >
                  9970502036
                </a>

                <a
                  href="tel:9328257355"
                  className="font-serif text-xl text-[#3B0B12] transition-colors duration-300 hover:text-[#E63946] sm:text-2xl"
                >
                  9328257355
                </a>
              </div>
            </ContactItem>

            <div className="my-9 h-px w-full bg-[#3B0B12]/10" />

            {/* Email */}

            <ContactItem icon={Mail} label="Email Us">
              <a
                href="mailto:kalpataruculturalfoundation@gmail.com"
                className="break-all font-serif text-lg text-[#3B0B12] transition-colors duration-300 hover:text-[#E63946] sm:text-xl"
              >
                kalpataruculturalfoundation@gmail.com
              </a>
            </ContactItem>

            {/* Closing */}

            <div className="mt-auto pt-12">
              <div className="mb-4 h-px w-10 bg-[#F59E0B]" />

              <p className="font-serif text-lg italic leading-7 text-[#3B0B12]/60">
                We look forward to welcoming you.
              </p>
            </div>
          </motion.div>

          {/* ============================================================
              MAP CARD
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-155
              overflow-hidden
              rounded-[1.75rem]
              border
              border-[#3B0B12]/10
              bg-[#3B0B12]
              p-2
              sm:p-3
            "
          >
            <div className="relative h-full min-h-151 overflow-hidden rounded-[1.4rem]">
              <iframe
                src="https://maps.google.com/maps?q=18.477260,73.923824&z=15&output=embed"
                title="Kalpataru Cultural Association location"
                className="absolute inset-0 h-full w-full border-0 grayscale-20 sepia-8"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map overlay */}

              <div className="pointer-events-none absolute inset-0 bg-[#3B0B12]/4 mix-blend-multiply" />

              {/* Location label */}

              <div className="absolute left-5 top-5 rounded-2xl border border-white/30 bg-[#FFFDF8]/95 px-5 py-4 shadow-lg sm:left-6 sm:top-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E63946]" />

                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                    Find us
                  </p>
                </div>

                <p className="font-serif text-base text-[#3B0B12]">
                  Muhammedwadi · Hadapsar
                </p>
              </div>

              {/* Open maps */}

              <a
                href="https://maps.google.com/maps?q=18.477260,73.923824&z=15"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  absolute
                  bottom-5
                  right-5
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#3B0B12]/10
                  bg-[#FFFDF8]
                  px-4
                  py-3
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#E63946]
                  hover:text-white
                  sm:bottom-6
                  sm:right-6
                "
              >
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#E63946] transition-colors group-hover:text-white">
                  Open in Maps
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.3}
                  className="text-[#E63946] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </a>

              {/* Map coordinate detail */}

              <div className="absolute bottom-5 left-5 hidden rounded-full border border-white/20 bg-[#3B0B12]/80 px-4 py-2 backdrop-blur-sm sm:block sm:bottom-6 sm:left-6">
                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/60">
                  18.477260° N · 73.923824° E
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            QUICK CONTACT STRIP
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-5 grid gap-4 sm:grid-cols-2"
        >
          <a
            href="tel:9970502036"
            className="
              group
              flex
              items-center
              justify-between
              rounded-3xl
              border
              border-[#3B0B12]/10
              bg-[#FFFDF8]
              px-6
              py-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(59,11,18,0.06)]
              sm:px-8
            "
          >
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                Give us a call
              </p>

              <p className="mt-2 font-serif text-xl text-[#3B0B12]">
                9970502036
              </p>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3B0B12]/10 text-[#E63946] transition-all duration-300 group-hover:border-[#E63946] group-hover:bg-[#E63946] group-hover:text-white">
              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>

          <a
            href="mailto:kalpataruculturalfoundation@gmail.com"
            className="
              group
              flex
              items-center
              justify-between
              rounded-3xl
              border
              border-[#3B0B12]/10
              bg-[#FFFDF8]
              px-6
              py-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(59,11,18,0.06)]
              sm:px-8
            "
          >
            <div className="min-w-0">
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                Write to us
              </p>

              <p className="mt-2 break-all font-serif text-lg text-[#3B0B12]">
                kalpataruculturalfoundation@gmail.com
              </p>
            </div>

            <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#3B0B12]/10 text-[#F59E0B] transition-all duration-300 group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#3B0B12]">
              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
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
            Come, be part of the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <Icon size={15} strokeWidth={1.3} className="text-[#E63946]" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/45">
          {label}
        </span>
      </div>

      {children}
    </div>
  );
}

export default SectionNine;
