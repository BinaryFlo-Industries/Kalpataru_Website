"use client";

import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="fixed left-0 top-1/2 z-50 -translate-y-1/2">
      <div className="flex flex-col overflow-hidden rounded-r-2xl border border-l-0 border-[#3b0b12]/10 bg-[#fffaf2]/90 p-1.5 shadow-[0_12px_35px_rgba(59,11,18,0.12)] backdrop-blur-md">
        {/* Facebook */}
        <Link
          href="https://www.facebook.com/share/15DySAQMax/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Kalpataru on Facebook"
          className="group flex h-11 w-11 items-center justify-center rounded-xl text-[#3b0b12]/60 transition-all duration-300 hover:bg-[#e63946] hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M14 8h3V5h-3c-2.76 0-5 2.24-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-.55.45-1 1-1Z" />
          </svg>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/kalpataru_cultural_association?igsh=MWVnMnM3YTVwMTNlcw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Kalpataru on Instagram"
          className="group flex h-11 w-11 items-center justify-center rounded-xl text-[#3b0b12]/60 transition-all duration-300 hover:bg-[#e63946] hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />

            <circle cx="12" cy="12" r="4" />

            <circle
              cx="17.5"
              cy="6.5"
              r="0.8"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
