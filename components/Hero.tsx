import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[78vh] md:min-h-[92vh] overflow-visible pb-24 md:pb-28">
      <Image
        src="/images/hero-main.jpg"
        alt="Travel hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 md:pt-36">
        <p className="font-dancing-script text-white/90 text-xl md:text-3xl">
          Get unforgettable pleasure with us
        </p>

        <h1 className="mt-3 text-white font-semibold text-4xl md:text-6xl leading-[1.07]">
          <span className="block">Natural Wonder</span>
          <span className="block mt-2 md:mt-3">Of The World</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-8 py-4 transition-colors"
          >
            Explore Tours
            <FaArrowRight />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium px-8 py-4 transition-colors ring-1 ring-white/35"
          >
            Our Services
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Overlapping search bar */}
      <div className="absolute left-1/2 bottom-0 z-20 w-full -translate-x-1/2 translate-y-1/2 px-4">
        <div className="mx-auto max-w-5xl rounded-[18px] bg-white shadow-xl ring-1 ring-black/10">
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div className="flex-1 px-6 py-5 md:py-4">
              <p className="text-xs font-semibold text-slate-800">Destination</p>
              <div className="mt-2 flex items-center gap-2 text-slate-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <input
                  className="w-full text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search Location"
                />
              </div>
            </div>

            <div className="hidden md:block w-px bg-slate-200" />

            <div className="flex-1 px-6 py-5 md:py-4">
              <p className="text-xs font-semibold text-slate-800">Type</p>
              <select className="mt-2 w-full text-sm outline-none bg-transparent text-slate-600">
                <option>Adventure</option>
                <option>Family</option>
                <option>Honeymoon</option>
              </select>
            </div>

            <div className="hidden md:block w-px bg-slate-200" />

            <div className="flex-1 px-6 py-5 md:py-4">
              <p className="text-xs font-semibold text-slate-800">Duration</p>
              <select className="mt-2 w-full text-sm outline-none bg-transparent text-slate-600">
                <option>7 days</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>8+ Days</option>
              </select>
            </div>

            <div className="px-6 pb-6 md:pb-0 md:pl-3 md:pr-4 md:flex md:items-center">
              <button className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-[#1fb1c3] hover:bg-[#19a5b5] text-white text-sm font-medium px-8 py-3 transition-colors shadow-sm">
                <FaSearch className="text-white/90" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

