"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";

const SectionThree = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      await axios.post("/api/join-us", formData);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
      });
    } catch (error) {
      console.error("Join Us submission failed:", error);

      setError(
        "Something went wrong while sending your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="join-form"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Decorative vertical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[7%] hidden w-px bg-[#9b7448]/12 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[7%] hidden w-px bg-[#9b7448]/12 lg:block"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* LEFT — Invitation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9b7448]/60" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#765842] sm:text-xs">
                The next step
              </span>
            </div>

            <h2 className="mt-7 font-serif text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.045em] text-[#2b1718]">
              We&apos;d love to
              <span className="block italic text-[#5a2528]">hear from</span>
              you.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-8 text-[#75645a] sm:text-base">
              If Kalpataru feels like a community you would like to be part of,
              tell us a little about yourself and what brings you here.
            </p>

            <div className="mt-10 border-l border-[#9b7448]/40 pl-5">
              <p className="font-serif text-lg italic leading-8 text-[#5a2528]">
                “There is something beautiful about finding a little piece of
                home, wherever life takes you.”
              </p>
            </div>

            {/* Contact alternatives */}
            <div className="mt-12 border-t border-[#9b7448]/20 pt-7">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8b735e]">
                Prefer to speak directly?
              </p>

              <div className="mt-5 space-y-4">
                <a
                  href="tel:+919970502036"
                  className="group flex items-center gap-3 text-sm text-[#4d4039] transition-colors hover:text-[#5a2528]"
                >
                  <Phone
                    size={15}
                    strokeWidth={1.3}
                    className="text-[#9b7448]"
                  />

                  <span>99705 02036</span>
                </a>

                <a
                  href="mailto:kalpataruculturalfoundation@gmail.com"
                  className="group flex items-center gap-3 text-sm text-[#4d4039] transition-colors hover:text-[#5a2528]"
                >
                  <Mail
                    size={15}
                    strokeWidth={1.3}
                    className="text-[#9b7448]"
                  />

                  <span className="break-all">
                    kalpataruculturalfoundation@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="border border-[#9b7448]/35 p-2">
              <div className="relative border border-[#9b7448]/20 bg-[#fff9e7]/35 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                {/* Corner details */}
                <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#9b7448]/70" />
                <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#9b7448]/70" />
                <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[#9b7448]/70" />
                <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[#9b7448]/70" />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-10">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#765842]">
                          Join the community
                        </p>

                        <h3 className="mt-3 font-serif text-3xl tracking-tight text-[#2b1718] sm:text-4xl">
                          Tell us about yourself.
                        </h3>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-7">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#765842]"
                          >
                            Your name
                          </label>

                          <div className="relative">
                            <User
                              size={16}
                              strokeWidth={1.2}
                              className="absolute left-0 top-3.5 text-[#9b7448]"
                            />

                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              className="w-full border-b border-[#9b7448]/30 bg-transparent py-3 pl-7 pr-2 font-serif text-lg text-[#2b1718] outline-none placeholder:text-[#9b7448]/45 focus:border-[#5a2528]"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#765842]"
                          >
                            Email address
                          </label>

                          <div className="relative">
                            <Mail
                              size={16}
                              strokeWidth={1.2}
                              className="absolute left-0 top-3.5 text-[#9b7448]"
                            />

                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              className="w-full border-b border-[#9b7448]/30 bg-transparent py-3 pl-7 pr-2 font-serif text-lg text-[#2b1718] outline-none placeholder:text-[#9b7448]/45 focus:border-[#5a2528]"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#765842]"
                          >
                            Phone number
                          </label>

                          <div className="relative">
                            <Phone
                              size={16}
                              strokeWidth={1.2}
                              className="absolute left-0 top-3.5 text-[#9b7448]"
                            />

                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              className="w-full border-b border-[#9b7448]/30 bg-transparent py-3 pl-7 pr-2 font-serif text-lg text-[#2b1718] outline-none placeholder:text-[#9b7448]/45 focus:border-[#5a2528]"
                            />
                          </div>
                        </div>

                        {/* Reason */}
                        <div>
                          <label
                            htmlFor="reason"
                            className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#765842]"
                          >
                            Why do you want to join us?
                          </label>

                          <textarea
                            id="reason"
                            name="reason"
                            required
                            rows={5}
                            value={formData.reason}
                            onChange={handleChange}
                            placeholder="Tell us a little about what brings you to Kalpataru..."
                            className="w-full resize-none border-b border-[#9b7448]/30 bg-transparent px-0 py-3 font-serif text-lg leading-8 text-[#2b1718] outline-none placeholder:text-[#9b7448]/45 focus:border-[#5a2528]"
                          />
                        </div>

                        {/* Error */}
                        <AnimatePresence>
                          {error && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-sm leading-6 text-[#8a3f3f]"
                            >
                              {error}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Submit */}
                        <div className="pt-3">
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={!isSubmitting ? { y: -2 } : undefined}
                            whileTap={
                              !isSubmitting ? { scale: 0.98 } : undefined
                            }
                            className="group inline-flex w-full items-center justify-center gap-3 bg-[#5a2528] px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#fff9e7] transition-colors duration-300 hover:bg-[#2b1718] disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {isSubmitting ? (
                              <ScaleLoader
                                height={18}
                                width={3}
                                radius={2}
                                margin={2}
                                color="#fff9e7"
                              />
                            ) : (
                              <>
                                Send your message
                                <ArrowRight
                                  size={16}
                                  strokeWidth={1.3}
                                  className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                              </>
                            )}
                          </motion.button>
                        </div>

                        <p className="text-center text-[10px] leading-5 text-[#8b735e]">
                          Your details will only be used to get in touch with
                          you regarding your interest in joining Kalpataru.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    /* Success state */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex min-h-140 flex-col items-center justify-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-full border border-[#9b7448]/50 bg-[#5a2528] text-[#fff9e7]"
                      >
                        <Check size={25} strokeWidth={1.4} />
                      </motion.div>

                      <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#765842]">
                        Message received
                      </p>

                      <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#2b1718] sm:text-5xl">
                        Welcome to the
                        <span className="block italic text-[#5a2528]">
                          conversation.
                        </span>
                      </h3>

                      <p className="mt-6 max-w-md text-sm leading-8 text-[#75645a]">
                        Thank you for reaching out to Kalpataru. We have
                        received your message and will get in touch with you
                        soon.
                      </p>

                      <div className="mt-9 h-px w-16 bg-[#9b7448]/50" />

                      <p className="mt-6 font-serif text-base italic text-[#5a2528]">
                        Where Bengal comes together.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Archival notation */}
            <div className="mt-5 flex items-center justify-between px-1 text-[9px] uppercase tracking-[0.2em] text-[#8b735e]">
              <span>Kalpataru</span>
              <span>Join the community</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom WhatsApp note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:mt-24 sm:flex-row"
        >
          <MessageCircle
            size={17}
            strokeWidth={1.2}
            className="text-[#9b7448]"
          />

          <p className="text-xs leading-6 text-[#75645a]">
            You can also reach us directly on WhatsApp at{" "}
            <a
              href="https://wa.me/919970502036"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#5a2528] underline decoration-[#9b7448]/40 underline-offset-4 transition-colors hover:text-[#2b1718]"
            >
              99705 02036
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
