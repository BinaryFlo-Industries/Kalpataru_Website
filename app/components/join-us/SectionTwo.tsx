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

const SectionTwo = () => {
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
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#E63946]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50">
                  Membership contribution
                </span>
              </div>

              <p className="font-serif text-lg italic text-[#D94672]">
                Keep the tradition growing.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#3B0B12] sm:text-6xl lg:text-[5.4rem]">
                Join the
                <br />
                <span className="italic text-[#E63946]">community.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#3B0B12]/60 sm:text-base sm:leading-8">
                Join Kalpataru&apos;s cultural initiatives and the celebrations
                that bring our community together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main payment composition */}
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* QR PAYMENT CARD */}
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
              overflow-hidden
              rounded-[1.75rem]
              border
              border-[#3B0B12]/10
              bg-[#F2C15D]
              p-7
              sm:p-9
              lg:p-10
            "
          >
            {/* Subtle texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage: "url('/images/join-us/golden-texture.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "500px",
              }}
            />

            {/* Soft decorative mark */}
            <div className="pointer-events-none absolute -right-8 -top-3 select-none font-serif text-[9rem] leading-none text-[#3B0B12]/5.5 transition-transform duration-700 group-hover:scale-105">
              ৳
            </div>

            {/* Accent line */}
            <div className="absolute left-0 top-0 h-1 w-full bg-[#E63946]" />

            <div className="relative flex h-full min-h-147.5 flex-col items-center justify-center text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/55">
                Scan to pay
              </p>

              <h3 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-[#3B0B12] sm:text-4xl">
                Membership Contribution
              </h3>

              {/* QR */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="
                  relative
                  mt-8
                  rounded-3xl
                  border
                  border-[#3B0B12]/10
                  bg-[#FFFDF8]
                  p-4
                  shadow-[0_18px_50px_rgba(59,11,18,0.12)]
                  sm:p-5
                "
              >
                <Image
                  src="/images/join-us/qr.png"
                  alt="Kalpataru membership payment QR code"
                  width={256}
                  height={256}
                  className="h-56 w-56 object-contain sm:h-64 sm:w-64"
                />
              </motion.div>

              {/* Amount */}
              <div className="mt-7">
                <span className="font-serif text-4xl tracking-[-0.02em] text-[#3B0B12] sm:text-5xl">
                  ₹7,500
                </span>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/50">
                  Per family
                </p>
              </div>

              <p className="mt-5 max-w-sm text-xs leading-6 text-[#3B0B12]/60">
                Scan the QR code to complete your membership contribution.
              </p>
            </div>
          </motion.div>

          {/* BANK DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              flex
              min-h-147.5
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
              lg:p-10
            "
          >
            {/* Accent */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 top-0 h-1 bg-[#F59E0B]"
            />

            {/* Background Bengali mark */}
            <div className="pointer-events-none absolute -right-4 top-3 select-none font-serif text-[8rem] leading-none text-[#F59E0B]/5.5 transition-transform duration-500 group-hover:scale-105">
              দান
            </div>

            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#F59E0B]/20 bg-[#F59E0B]/5 text-[#F59E0B]">
                <Landmark size={19} strokeWidth={1.3} />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F59E0B]">
                  Alternatively
                </p>

                <h3 className="mt-1 font-serif text-3xl tracking-[-0.02em] text-[#3B0B12]">
                  Bank Transfer
                </h3>
              </div>
            </div>

            <div className="relative my-9 h-px bg-[#3B0B12]/10" />

            {/* Account details */}
            <div className="relative space-y-7">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#3B0B12]/40">
                  Account Name
                </p>

                <p className="mt-2 font-serif text-lg text-[#3B0B12]">
                  Kalpataru Cultural Association
                </p>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#3B0B12]/40">
                  Bank Name
                </p>

                <p className="mt-2 font-serif text-lg text-[#3B0B12]">
                  HDFC Bank
                </p>
              </div>

              {/* Account number */}
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#3B0B12]/40">
                  Account Number
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="break-all font-serif text-lg tracking-[0.08em] text-[#3B0B12] sm:text-xl">
                    {accountNumber}
                  </p>

                  <motion.button
                    type="button"
                    onClick={copyAccountNumber}
                    whileTap={{ scale: 0.94 }}
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#3B0B12]/10
                      px-3
                      py-2
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#3B0B12]/55
                      transition-all
                      duration-300
                      hover:border-[#E63946]
                      hover:bg-[#E63946]
                      hover:text-white
                    "
                  >
                    {copied ? (
                      <>
                        <Check size={13} strokeWidth={1.3} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={13} strokeWidth={1.3} />
                        Copy
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              <div className="grid gap-7 border-t border-[#3B0B12]/10 pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#3B0B12]/40">
                    IFSC Code
                  </p>

                  <p className="mt-2 font-serif text-lg tracking-[0.04em] text-[#3B0B12]">
                    HDFC0008752
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#3B0B12]/40">
                    Branch
                  </p>

                  <p className="mt-2 font-serif text-lg text-[#3B0B12]">
                    NIBM Road, Pune
                  </p>
                </div>
              </div>
            </div>

            {/* Contribution note */}
            <div className="relative mt-auto pt-10">
              <div className="rounded-2xl border border-[#E63946]/10 bg-[#E63946]/4.5 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#E63946]">
                      Membership contribution
                    </p>

                    <p className="mt-1 font-serif text-xl text-[#3B0B12]">
                      ₹7,500 per family
                    </p>
                  </div>

                  <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#E63946]/15 text-[#E63946] sm:flex">
                    <ArrowUpRight size={15} strokeWidth={1.3} />
                  </span>
                </div>
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
          <p className="text-sm leading-8 text-[#3B0B12]/60 sm:text-base">
            Your membership contribution supports our cultural initiatives and
            helps make celebrations such as{" "}
            <span className="font-serif italic text-[#E63946]">
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
          className="
            mx-auto
            mt-14
            max-w-5xl
            rounded-[1.75rem]
            border
            border-[#3B0B12]/10
            bg-[#FFFDF8]
            p-7
            sm:p-9
            lg:p-10
          "
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#E63946]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                  After payment
                </p>
              </div>

              <h3 className="font-serif text-2xl tracking-[-0.02em] text-[#3B0B12] sm:text-3xl">
                Let us know you&apos;re in.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#3B0B12]/60">
                Please share your transaction details with us so that we can
                confirm your membership.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
              <a
                href="https://wa.me/919970502036"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#3B0B12]
                  px-6
                  py-3.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E63946]
                  hover:shadow-[0_12px_30px_rgba(59,11,18,0.12)]
                "
              >
                <MessageCircle size={16} strokeWidth={1.3} />
                WhatsApp us
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <p className="w-full text-center text-[9px] text-[#3B0B12]/40 sm:text-right">
                99705 02036
              </p>
            </div>
          </div>

          {/* Additional WhatsApp numbers */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-[#3B0B12]/10 pt-7 text-[9px] font-medium uppercase tracking-[0.15em] text-[#3B0B12]/40">
            <span>98904 14439</span>
            <span>72766 34085</span>
            <span>99605 20975</span>
          </div>

          {/* Email */}
          <div className="mt-5 text-center">
            <a
              href="mailto:kalpataruculturalfoundation@gmail.com"
              className="font-serif text-sm italic text-[#3B0B12]/60 underline decoration-[#E63946]/25 underline-offset-4 transition-colors duration-300 hover:text-[#E63946]"
            >
              kalpataruculturalfoundation@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E63946]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            <span className="h-px w-8 bg-[#E63946]/30" />
          </div>

          <p className="font-serif text-xl italic text-[#3B0B12]/60 sm:text-2xl">
            Thank you for helping us keep the spirit alive.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
