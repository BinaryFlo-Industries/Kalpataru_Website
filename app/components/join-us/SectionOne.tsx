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

const SectionOne = () => {
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
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14 lg:mb-16"
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#E63946]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50">
                  Join Kalpataru
                </span>
              </div>

              <p className="font-serif text-lg italic text-[#D94672]">
                Come be part of it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#3B0B12] sm:text-6xl lg:text-[5.5rem]">
                We&apos;d love to
                <br />
                <span className="italic text-[#E63946]">hear from you.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#3B0B12]/60 sm:text-base sm:leading-8">
                If Kalpataru feels like a community you would like to be part
                of, tell us a little about yourself and what brings you here.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Invitation card */}
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
              min-h-140
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
            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 top-0 h-1 bg-[#E63946]"
            />

            {/* Background Bengali mark */}
            <div className="pointer-events-none absolute -right-5 top-4 select-none font-serif text-[7rem] leading-none text-[#E63946]/4.5 transition-transform duration-500 group-hover:scale-105">
              সাথে
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E63946]/20 bg-[#E63946]/5">
                <MessageCircle
                  size={19}
                  strokeWidth={1.4}
                  className="text-[#E63946]"
                />
              </div>

              <p className="mt-12 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                A little invitation
              </p>

              <h3 className="mt-3 max-w-md font-serif text-3xl leading-tight tracking-[-0.02em] text-[#3B0B12] sm:text-4xl">
                A community is built
                <span className="italic text-[#E63946]">
                  {" "}
                  one person at a time.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#3B0B12]/60">
                Whether you have grown up around Bengali culture or are simply
                curious to discover more, there is always room at Kalpataru.
              </p>
            </div>

            {/* Quote */}
            <div className="relative mt-auto pt-12">
              <div className="mb-5 h-px w-10 bg-[#F59E0B]" />

              <p className="max-w-sm font-serif text-lg italic leading-8 text-[#3B0B12]/65">
                “There is something beautiful about finding a little piece of
                home, wherever life takes you.”
              </p>
            </div>

            {/* Direct contact */}
            <div className="relative mt-10 border-t border-[#3B0B12]/10 pt-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
                Prefer to speak directly?
              </p>

              <div className="mt-5 space-y-4">
                <a
                  href="tel:+919970502036"
                  className="group/contact flex items-center gap-3 text-sm text-[#3B0B12]/70 transition-colors duration-300 hover:text-[#E63946]"
                >
                  <Phone
                    size={15}
                    strokeWidth={1.3}
                    className="text-[#E63946]"
                  />

                  <span>99705 02036</span>

                  <ArrowRight
                    size={13}
                    strokeWidth={1.3}
                    className="opacity-0 transition-all duration-300 group-hover/contact:translate-x-1 group-hover/contact:opacity-100"
                  />
                </a>

                <a
                  href="mailto:kalpataruculturalfoundation@gmail.com"
                  className="group/contact flex items-center gap-3 text-sm text-[#3B0B12]/70 transition-colors duration-300 hover:text-[#E63946]"
                >
                  <Mail
                    size={15}
                    strokeWidth={1.3}
                    className="text-[#E63946]"
                  />

                  <span className="break-all">
                    kalpataruculturalfoundation@gmail.com
                  </span>

                  <ArrowRight
                    size={13}
                    strokeWidth={1.3}
                    className="hidden shrink-0 opacity-0 transition-all duration-300 group-hover/contact:translate-x-1 group-hover/contact:opacity-100 sm:block"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-[#3B0B12]/10
              bg-[#FFFDF8]
              p-7
              sm:p-9
              lg:p-10
            "
          >
            {/* Top accent */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 top-0 h-1 bg-[#F59E0B]"
            />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-10">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                          Join the community
                        </p>

                        <h3 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-[#3B0B12] sm:text-4xl">
                          Tell us about yourself.
                        </h3>
                      </div>

                      <span className="hidden font-serif text-sm italic text-[#3B0B12]/30 sm:block">
                        01 / 01
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/45"
                      >
                        Your name
                      </label>

                      <div className="relative">
                        <User
                          size={16}
                          strokeWidth={1.2}
                          className="absolute left-0 top-3.5 text-[#E63946]"
                        />

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="
                            w-full
                            border-b
                            border-[#3B0B12]/15
                            bg-transparent
                            py-3
                            pl-7
                            pr-2
                            font-serif
                            text-lg
                            text-[#3B0B12]
                            outline-none
                            placeholder:text-[#3B0B12]/25
                            transition-colors
                            duration-300
                            focus:border-[#E63946]
                          "
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/45"
                      >
                        Email address
                      </label>

                      <div className="relative">
                        <Mail
                          size={16}
                          strokeWidth={1.2}
                          className="absolute left-0 top-3.5 text-[#E63946]"
                        />

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="
                            w-full
                            border-b
                            border-[#3B0B12]/15
                            bg-transparent
                            py-3
                            pl-7
                            pr-2
                            font-serif
                            text-lg
                            text-[#3B0B12]
                            outline-none
                            placeholder:text-[#3B0B12]/25
                            transition-colors
                            duration-300
                            focus:border-[#E63946]
                          "
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/45"
                      >
                        Phone number
                      </label>

                      <div className="relative">
                        <Phone
                          size={16}
                          strokeWidth={1.2}
                          className="absolute left-0 top-3.5 text-[#E63946]"
                        />

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="
                            w-full
                            border-b
                            border-[#3B0B12]/15
                            bg-transparent
                            py-3
                            pl-7
                            pr-2
                            font-serif
                            text-lg
                            text-[#3B0B12]
                            outline-none
                            placeholder:text-[#3B0B12]/25
                            transition-colors
                            duration-300
                            focus:border-[#E63946]
                          "
                        />
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label
                        htmlFor="reason"
                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/45"
                      >
                        Why do you want to join us?
                      </label>

                      <textarea
                        id="reason"
                        name="reason"
                        required
                        rows={4}
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Tell us a little about what brings you to Kalpataru..."
                        className="
                          w-full
                          resize-none
                          border-b
                          border-[#3B0B12]/15
                          bg-transparent
                          px-0
                          py-3
                          font-serif
                          text-lg
                          leading-8
                          text-[#3B0B12]
                          outline-none
                          placeholder:text-[#3B0B12]/25
                          transition-colors
                          duration-300
                          focus:border-[#E63946]
                        "
                      />
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-sm leading-6 text-[#E63946]"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { y: -2 } : undefined}
                        whileTap={!isSubmitting ? { scale: 0.985 } : undefined}
                        className="
                          group
                          inline-flex
                          w-full
                          items-center
                          justify-center
                          gap-3
                          rounded-full
                          bg-[#E63946]
                          px-6
                          py-4
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#3B0B12]
                          hover:shadow-[0_12px_30px_rgba(59,11,18,0.12)]
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >
                        {isSubmitting ? (
                          <ScaleLoader
                            height={18}
                            width={3}
                            radius={2}
                            margin={2}
                            color="#ffffff"
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

                    <p className="text-center text-[9px] leading-5 text-[#3B0B12]/40">
                      Your details will only be used to get in touch with you
                      regarding your interest in joining Kalpataru.
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
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E63946] text-white"
                  >
                    <Check size={25} strokeWidth={1.4} />
                  </motion.div>

                  <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E63946]">
                    Message received
                  </p>

                  <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#3B0B12] sm:text-5xl">
                    Welcome to the
                    <span className="block italic text-[#E63946]">
                      conversation.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-8 text-[#3B0B12]/60">
                    Thank you for reaching out to Kalpataru. We have received
                    your message and will get in touch with you soon.
                  </p>

                  <div className="mt-9 h-px w-16 bg-[#F59E0B]" />

                  <p className="mt-6 font-serif text-base italic text-[#3B0B12]/60">
                    Where Bengal comes together.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:mt-20 sm:flex-row"
        >
          <MessageCircle
            size={17}
            strokeWidth={1.2}
            className="text-[#E63946]"
          />

          <p className="text-xs leading-6 text-[#3B0B12]/55">
            You can also reach us directly on WhatsApp at{" "}
            <a
              href="https://wa.me/919970502036"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#3B0B12] underline decoration-[#E63946]/30 underline-offset-4 transition-colors duration-300 hover:text-[#E63946]"
            >
              99705 02036
            </a>
            .
          </p>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E63946]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            <span className="h-px w-8 bg-[#E63946]/30" />
          </div>

          <p className="font-serif text-2xl italic text-[#3B0B12]/60 sm:text-3xl">
            There&apos;s always room for one more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionOne;
