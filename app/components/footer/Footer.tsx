"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Durga Puja", href: "#durga-puja" },
  { label: "Our Community", href: "#community" },
  { label: "Activities", href: "#activities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const principles = [
  "Trust",
  "Transparency",
  "Teamwork",
  "Togetherness",
  "Tradition",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#2b1718] text-[#f5ead5]">
      {/* ============================================================
          ATMOSPHERE
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Warm centre */}
        <div className="absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 rounded-full bg-[#7d1f2a]/20 blur-[120px]" />

        {/* Subtle architectural lines */}
        <div className="absolute inset-y-0 left-[8%] w-px bg-[#d7bd8d]/8" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-[#d7bd8d]/8" />

        {/* Fine top glow */}
        <div className="absolute left-0 right-0 top-0 h-px bg-[#d7bd8d]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ============================================================
            MAIN IDENTITY
        ============================================================ */}

        <div className="grid gap-16 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:py-28">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-6">
              {/* Logo */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#d7bd8d]/35 p-1">
                <div className="h-full w-full overflow-hidden rounded-full bg-[#f1e5ce]">
                  <Image
                    src="/logo.png"
                    alt="Kalpataru Cultural Association"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-1">
                <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#d7bd8d]/70">
                  Kalpataru Cultural Association
                </p>

                <h2 className="mt-3 font-serif text-4xl leading-none text-[#fff7e8] sm:text-5xl">
                  Where Bengal
                  <br />
                  <span className="italic text-[#d7bd8d]">comes together.</span>
                </h2>
              </div>
            </div>

            <p className="mt-9 max-w-xl text-sm leading-8 text-[#f5ead5]/65">
              A community-driven initiative dedicated to promoting Bengali art
              and culture, creating meaningful connections and keeping our
              heritage alive across generations.
            </p>

            {/* 5T */}
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
              {principles.map((principle, index) => (
                <div key={principle} className="flex items-center gap-2">
                  <span className="font-serif text-sm italic text-[#d7bd8d]">
                    T
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.18em] text-[#f5ead5]/55">
                    {principle}
                  </span>

                  {index !== principles.length - 1 && (
                    <span className="ml-1 text-[#d7bd8d]/25">·</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="mb-7 text-[9px] font-medium uppercase tracking-[0.3em] text-[#d7bd8d]/70">
              Explore
            </p>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-[#d7bd8d]/10 py-4 transition-colors duration-300 hover:border-[#d7bd8d]/35"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-serif text-[10px] italic text-[#d7bd8d]/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-[#f5ead5]/75 transition-colors duration-300 group-hover:text-[#fff7e8]">
                      {item.label}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.2}
                    className="text-[#d7bd8d]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d7bd8d]"
                  />
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* ============================================================
            CONTACT STRIP
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid border-y border-[#d7bd8d]/15 sm:grid-cols-3"
        >
          <a
            href="https://maps.google.com/maps?q=18.477260,73.923824&z=15"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-b border-[#d7bd8d]/15 px-2 py-7 sm:border-b-0 sm:border-r sm:px-7"
          >
            <MapPin
              size={16}
              strokeWidth={1.2}
              className="shrink-0 text-[#d7bd8d]/70"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#d7bd8d]/50">
                Visit us
              </p>

              <p className="mt-1 text-xs leading-5 text-[#f5ead5]/75 transition-colors group-hover:text-[#fff7e8]">
                Handewadi Road, Hadapsar
                <br />
                Pune 411028
              </p>
            </div>
          </a>

          <a
            href="tel:9970502036"
            className="group flex items-center gap-4 border-b border-[#d7bd8d]/15 px-2 py-7 sm:border-b-0 sm:border-r sm:px-7"
          >
            <Phone
              size={16}
              strokeWidth={1.2}
              className="shrink-0 text-[#d7bd8d]/70"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#d7bd8d]/50">
                Call us
              </p>

              <p className="mt-1 text-xs text-[#f5ead5]/75 transition-colors group-hover:text-[#fff7e8]">
                9970502036
              </p>

              <p className="text-xs text-[#f5ead5]/75 transition-colors group-hover:text-[#fff7e8]">
                9328257355
              </p>
            </div>
          </a>

          <a
            href="mailto:kalpataruculturalfoundation@gmail.com"
            className="group flex items-center gap-4 px-2 py-7 sm:px-7"
          >
            <Mail
              size={16}
              strokeWidth={1.2}
              className="shrink-0 text-[#d7bd8d]/70"
            />

            <div className="min-w-0">
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#d7bd8d]/50">
                Write to us
              </p>

              <p className="mt-1 break-all text-xs text-[#f5ead5]/75 transition-colors group-hover:text-[#fff7e8]">
                kalpataruculturalfoundation@gmail.com
              </p>
            </div>
          </a>
        </motion.div>

        {/* ============================================================
            FINAL LINE
        ============================================================ */}

        <div className="flex flex-col gap-7 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] uppercase tracking-[0.22em] text-[#f5ead5]/35">
            © {new Date().getFullYear()} Kalpataru Cultural Association
          </p>

          <p className="font-serif text-sm italic text-[#d7bd8d]/55">
            Culture. Community. Connection.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-3 self-start text-[8px] uppercase tracking-[0.2em] text-[#f5ead5]/45 transition-colors hover:text-[#fff7e8] sm:self-auto"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d7bd8d]/20 transition-all duration-300 group-hover:border-[#d7bd8d]/50">
              <ArrowUp
                size={13}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
