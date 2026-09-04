"use client";

import {
  ArrowUpRight,
  Check,
  Copy,
  Landmark,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

const SectionFour = () => {
  const [copied, setCopied] = useState(false);

  const accountNumber = "50200106346784";

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy account number:", error);
    }
  };

  return (
    <section
      id="membership-contribution"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Subtle golden atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bf975b]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#9b7448]/50" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#765842] sm:text-xs">
              Membership contribution
            </span>

            <span className="h-px w-10 bg-[#9b7448]/50" />
          </div>

          <h2 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.045em] text-[#2b1718]">
            Keep the tradition
            <span className="block italic text-[#5a2528]">growing.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#75645a] sm:text-base">
            Your contribution helps support Kalpataru&apos;s cultural
            initiatives and the celebrations that bring our community together.
          </p>
        </motion.div>

        {/* Main payment composition */}
        <div className="mt-16 grid items-stretch gap-8 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* QR PAYMENT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-4xl bg-[#b88b4a] p-6 sm:p-8 lg:p-10"
          >
            {/* Golden texture / atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(
                    circle at 20% 20%,
                    rgba(255,255,255,0.35),
                    transparent 30%
                  ),
                  radial-gradient(
                    circle at 80% 80%,
                    rgba(91,54,22,0.18),
                    transparent 35%
                  )
                `,
              }}
            />

            {/* Decorative lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-5 rounded-3xl border border-[#fff9e7]/20"
            />

            <div className="relative flex h-full flex-col items-center justify-center py-8 text-center sm:py-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#fff9e7]/80">
                Scan to pay
              </p>

              <h3 className="mt-3 font-serif text-3xl tracking-tight text-[#fff9e7] sm:text-4xl">
                Membership Contribution
              </h3>

              {/* QR frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="relative mt-8 rounded-2xl bg-[#fff9e7] p-4 shadow-[0_20px_60px_rgba(70,40,15,0.22)] sm:p-5"
              >
                <div className="absolute -left-2 -top-2 h-6 w-6 border-l border-t border-[#fff9e7]/70" />
                <div className="absolute -right-2 -top-2 h-6 w-6 border-r border-t border-[#fff9e7]/70" />
                <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b border-l border-[#fff9e7]/70" />
                <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b border-r border-[#fff9e7]/70" />

                <Image
                  src="/images/join-us/qr.png"
                  alt="Kalpataru membership payment QR code"
                  width={256}
                  height={256}
                  className="h-56 w-56 object-contain sm:h-64 sm:w-64"
                />
              </motion.div>

              {/* Contribution */}
              <div className="mt-8">
                <span className="font-serif text-4xl text-[#fff9e7] sm:text-5xl">
                  ₹7,500
                </span>

                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#fff9e7]/75">
                  Per family
                </p>
              </div>

              <p className="mt-6 max-w-sm text-xs leading-6 text-[#fff9e7]/75">
                Scan the QR code to complete your membership contribution.
              </p>
            </div>
          </motion.div>

          {/* BANK DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative border border-[#9b7448]/30 p-2"
          >
            <div className="relative h-full border border-[#9b7448]/15 bg-[#fff9e7]/30 px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              {/* Corner details */}
              <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#9b7448]/70" />
              <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#9b7448]/70" />
              <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[#9b7448]/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[#9b7448]/70" />

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#9b7448]/30 text-[#5a2528]">
                  <Landmark size={19} strokeWidth={1.2} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-[#765842]">
                    Alternatively
                  </p>

                  <h3 className="mt-1 font-serif text-3xl text-[#2b1718]">
                    Bank Transfer
                  </h3>
                </div>
              </div>

              <div className="my-9 h-px bg-[#9b7448]/20" />

              {/* Account details */}
              <div className="space-y-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#8b735e]">
                    Account Name
                  </p>

                  <p className="mt-2 font-serif text-lg text-[#2b1718]">
                    Kalpataru Cultural Association
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#8b735e]">
                    Bank Name
                  </p>

                  <p className="mt-2 font-serif text-lg text-[#2b1718]">
                    HDFC Bank
                  </p>
                </div>

                {/* Account number */}
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#8b735e]">
                    Account Number
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <p className="font-serif text-lg tracking-[0.08em] text-[#2b1718] sm:text-xl">
                      {accountNumber}
                    </p>

                    <motion.button
                      type="button"
                      onClick={copyAccountNumber}
                      whileTap={{ scale: 0.94 }}
                      className="flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#765842] transition-colors hover:text-[#5a2528]"
                    >
                      {copied ? (
                        <>
                          <Check size={14} strokeWidth={1.3} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} strokeWidth={1.3} />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#8b735e]">
                      IFSC Code
                    </p>

                    <p className="mt-2 font-serif text-lg tracking-[0.04em] text-[#2b1718]">
                      HDFC0008752
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#8b735e]">
                      Branch
                    </p>

                    <p className="mt-2 font-serif text-lg text-[#2b1718]">
                      NIBM Road, Pune
                    </p>
                  </div>
                </div>
              </div>

              {/* Contribution note */}
              <div className="mt-10 border-l-2 border-[#9b7448]/50 bg-[#bf975b]/8 px-5 py-4">
                <p className="text-xs leading-6 text-[#5c4b40]">
                  Membership contribution:
                  <span className="ml-1 font-semibold text-[#5a2528]">
                    ₹7,500 per family
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Celebration note */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mx-auto mt-16 max-w-4xl text-center lg:mt-20"
        >
          <p className="text-sm leading-8 text-[#75645a] sm:text-base">
            Your membership contribution supports our cultural initiatives and
            helps make celebrations such as{" "}
            <span className="font-serif italic text-[#5a2528]">
              Durga Puja, Lakshmi Puja and Kali Puja
            </span>{" "}
            possible for the community.
          </p>
        </motion.div>

        {/* Payment confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-14 max-w-4xl border-t border-[#9b7448]/20 pt-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b735e]">
                After payment
              </p>

              <h3 className="mt-2 font-serif text-2xl text-[#2b1718] sm:text-3xl">
                Let us know you&apos;re in.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#75645a]">
                Please share your transaction details with us so that we can
                confirm your membership.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-3 sm:items-end">
              <a
                href="https://wa.me/919970502036"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-[#5a2528] bg-[#5a2528] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#fff9e7] transition-colors duration-300 hover:bg-[#2b1718]"
              >
                <MessageCircle size={16} strokeWidth={1.3} />
                WhatsApp us
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <p className="text-[10px] text-[#8b735e]">99705 02036</p>
            </div>
          </div>

          {/* Additional WhatsApp numbers */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.15em] text-[#8b735e]">
            <span>98904 14439</span>
            <span>72766 34085</span>
            <span>99605 20975</span>
          </div>

          {/* Email */}
          <div className="mt-6 text-center">
            <a
              href="mailto:kalpataruculturalfoundation@gmail.com"
              className="font-serif text-sm italic text-[#5a2528] underline decoration-[#9b7448]/40 underline-offset-4 transition-colors hover:text-[#2b1718]"
            >
              kalpataruculturalfoundation@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto h-px w-16 bg-[#9b7448]/45" />

          <p className="mt-6 font-serif text-xl italic text-[#5a2528] sm:text-2xl">
            Thank you for helping us keep the spirit alive.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
