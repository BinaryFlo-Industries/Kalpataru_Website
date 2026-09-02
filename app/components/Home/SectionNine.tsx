"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowUpRight, Navigation } from "lucide-react";

export default function SectionNine() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12"
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
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#7d1f2a]/50" />

            <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#7d1f2a]/70">
              Contact
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="font-serif text-5xl leading-[0.95] text-[#34251c] sm:text-6xl lg:text-7xl">
              Need help?
              <br />
              <span className="italic text-[#7d1f2a]">Contact us.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#59483a]/70 lg:justify-self-end">
              Whether you have a question about an upcoming event or simply want
              to know more about Kalpataru, we&apos;d be happy to hear from you.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            MAIN CONTACT + MAP COMPOSITION
        ============================================================ */}

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          {/* ============================================================
              CONTACT DETAILS
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col border border-[#8c6b45]/30 bg-[#eee0c4]/35 px-7 py-9 sm:px-10 sm:py-11"
          >
            {/* Small seal */}
            <div className="mb-12 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8c6b45]/30 bg-[#f5e8ce]">
                <Navigation
                  size={18}
                  strokeWidth={1.2}
                  className="text-[#7d1f2a]"
                />
              </div>

              <span className="font-serif text-sm italic text-[#8c6b45]/55">
                Pune · Maharashtra
              </span>
            </div>

            {/* Address */}
            <ContactItem icon={MapPin} label="Address">
              <p className="font-serif text-xl leading-relaxed text-[#34251c] sm:text-2xl">
                Handewadi Road,
                <br />
                Hadapsar,
                <br />
                Pune 411028
              </p>
            </ContactItem>

            <div className="my-9 h-px w-full bg-[#8c6b45]/20" />

            {/* Phone */}
            <ContactItem icon={Phone} label="Call Us">
              <div className="flex flex-col gap-2">
                <a
                  href="tel:9970502036"
                  className="font-serif text-xl text-[#34251c] transition-colors hover:text-[#7d1f2a] sm:text-2xl"
                >
                  9970502036
                </a>

                <a
                  href="tel:9328257355"
                  className="font-serif text-xl text-[#34251c] transition-colors hover:text-[#7d1f2a] sm:text-2xl"
                >
                  9328257355
                </a>
              </div>
            </ContactItem>

            <div className="my-9 h-px w-full bg-[#8c6b45]/20" />

            {/* Email */}
            <ContactItem icon={Mail} label="Email Us">
              <a
                href="mailto:kalpataruculturalfoundation@gmail.com"
                className="break-all font-serif text-lg text-[#34251c] transition-colors hover:text-[#7d1f2a] sm:text-xl"
              >
                kalpataruculturalfoundation@gmail.com
              </a>
            </ContactItem>

            {/* Bottom invitation */}
            <div className="mt-auto pt-12">
              <div className="mb-4 h-px w-10 bg-[#7d1f2a]/50" />

              <p className="font-serif text-lg italic leading-7 text-[#59483a]/75">
                We look forward to welcoming you.
              </p>
            </div>
          </motion.div>

          {/* ============================================================
              MAP
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-130 overflow-hidden border border-[#8c6b45]/30 bg-[#d8c7a7] p-2 sm:min-h-150"
          >
            {/* Map frame */}
            <div className="relative h-full min-h-126 overflow-hidden border border-[#8c6b45]/25 sm:min-h-146">
              <iframe
                src="https://maps.google.com/maps?q=18.477260,73.923824&z=15&output=embed"
                title="Kalpataru Cultural Association location"
                className="absolute inset-0 h-full w-full border-0 grayscale-25 sepia-12"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Gentle map treatment */}
              <div className="pointer-events-none absolute inset-0 bg-[#8c6b45]/6 mix-blend-multiply" />

              {/* Corner label */}
              <div className="absolute left-5 top-5 border border-[#8c6b45]/30 bg-[#f5e8ce]/90 px-4 py-3 backdrop-blur-sm">
                <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#7d1f2a]">
                  Find us
                </p>

                <p className="mt-1 font-serif text-sm text-[#34251c]">
                  Handewadi · Hadapsar
                </p>
              </div>

              {/* Open in maps */}
              <a
                href="https://maps.google.com/maps?q=18.477260,73.923824&z=15"
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute bottom-5 right-5 flex items-center gap-3 border border-[#8c6b45]/30 bg-[#f5e8ce]/95 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-[#fff8eb]"
              >
                <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#7d1f2a]">
                  Open in Maps
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.3}
                  className="text-[#7d1f2a] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            BOTTOM CONTACT STRIP
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid border-y border-[#8c6b45]/25 sm:grid-cols-2"
        >
          <a
            href="tel:9970502036"
            className="group flex items-center justify-between border-b border-[#8c6b45]/20 px-5 py-6 transition-colors hover:bg-[#eee0c4]/30 sm:border-b-0 sm:border-r sm:px-8"
          >
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#8c6b45]/65">
                Give us a call
              </p>

              <p className="mt-2 font-serif text-xl text-[#34251c]">
                9970502036
              </p>
            </div>

            <ArrowUpRight
              size={17}
              strokeWidth={1.2}
              className="text-[#7d1f2a]/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <a
            href="mailto:kalpataruculturalfoundation@gmail.com"
            className="group flex items-center justify-between px-5 py-6 transition-colors hover:bg-[#eee0c4]/30 sm:px-8"
          >
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#8c6b45]/65">
                Write to us
              </p>

              <p className="mt-2 break-all font-serif text-lg text-[#34251c]">
                kalpataruculturalfoundation@gmail.com
              </p>
            </div>

            <ArrowUpRight
              size={17}
              strokeWidth={1.2}
              className="ml-4 shrink-0 text-[#7d1f2a]/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <p className="font-serif text-2xl italic text-[#59483a]/70">
            Come, be part of the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT ITEM
================================================================ */

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
        <Icon size={15} strokeWidth={1.3} className="text-[#7d1f2a]" />

        <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#7d1f2a]/70">
          {label}
        </span>
      </div>

      {children}
    </div>
  );
}
