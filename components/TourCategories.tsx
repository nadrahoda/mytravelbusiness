"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { title: "Cruises", subtitle: "Read More", imageSrc: "/images/tour-1.jpg" },
  {
    title: "Hiking",
    subtitle: "Read More",
    imageSrc: "/images/about-team.jpg",
  },
  {
    title: "Airbirds",
    subtitle: "Read More",
    imageSrc: "/images/destination-paris.jpg",
  },
  {
    title: "Wildlife",
    subtitle: "Read More",
    imageSrc: "/images/blog-1.jpg",
  },
  {
    title: "Walking",
    subtitle: "Read More",
    imageSrc: "/images/about-team.jpg",
  },
  // second set
  {
    title: "Desert Safari",
    subtitle: "Read More",
    imageSrc: "/images/blog-1.jpg",
  },
  {
    title: "City Lights",
    subtitle: "Read More",
    imageSrc: "/images/destination-paris.jpg",
  },
  {
    title: "Island Escape",
    subtitle: "Read More",
    imageSrc: "/images/tour-1.jpg",
  },
  {
    title: "Cultural Trails",
    subtitle: "Read More",
    imageSrc: "/images/about-team.jpg",
  },
  {
    title: "Snow Adventures",
    subtitle: "Read More",
    imageSrc: "/images/blog-1.jpg",
  },
  // third set
  {
    title: "Forest Retreat",
    subtitle: "Read More",
    imageSrc: "/images/about-team.jpg",
  },
  {
    title: "Romantic Getaway",
    subtitle: "Read More",
    imageSrc: "/images/destination-paris.jpg",
  },
  {
    title: "Lake Cruises",
    subtitle: "Read More",
    imageSrc: "/images/tour-1.jpg",
  },
  {
    title: "Historic Cities",
    subtitle: "Read More",
    imageSrc: "/images/destination-paris.jpg",
  },
  {
    title: "Jungle Safari",
    subtitle: "Read More",
    imageSrc: "/images/blog-1.jpg",
  },
  // fourth set
  {
    title: "Road Trips",
    subtitle: "Read More",
    imageSrc: "/images/tour-1.jpg",
  },
  {
    title: "Family Fun",
    subtitle: "Read More",
    imageSrc: "/images/about-team.jpg",
  },
  {
    title: "Mountain Views",
    subtitle: "Read More",
    imageSrc: "/images/blog-1.jpg",
  },
  {
    title: "City Weekends",
    subtitle: "Read More",
    imageSrc: "/images/destination-paris.jpg",
  },
  {
    title: "Photography Tours",
    subtitle: "Read More",
    imageSrc: "/images/about-team.jpg",
  },
];

export default function TourCategories() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-20 md:pt-24 pb-14 md:pb-20">
        <TourCategoriesCarousel />
      </div>
    </section>
  );
}

function TourCategoriesCarousel() {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const [page, setPage] = useState<number>(0);

  const start = page * itemsPerPage;
  const currentItems = categories.slice(start, start + itemsPerPage);

  // Arc effect for the 5 visible cards:
  // outer cards lowest, center card highest, forming a clear circular arc
  const slotStyles = [
    // far left
    "md:translate-y-8 md:-rotate-[12deg] md:scale-95",
    // left of center
    "md:translate-y-1 md:-rotate-[5deg] md:scale-[1.03]",
    // center
    "md:-translate-y-2 md:scale-115 md:shadow-2xl mx-8",
    // right of center
    "md:translate-y-1 md:rotate-[5deg] md:scale-[1.03]",
    // far right
    "md:translate-y-8 md:rotate-[12deg] md:scale-95",
  ];

  return (
    <>
      <div className="text-center">
        <p className="font-dancing-script text-sky-500 text-xl">
          Wonderful Place For You
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
          Tour Categories
        </h2>
      </div>

      <div className="mt-16 flex items-center justify-center">
        <div className="flex w-full max-w-5xl items-end justify-center gap-4">
          {currentItems.map((c, index) => (
            <Link
              key={`${c.title}-${start + index}`}
              href="#"
              className={`group relative flex w-[160px] md:w-[190px] lg:w-[210px] overflow-hidden rounded-[26px] bg-slate-100 ring-1 ring-black/5 transition-all duration-300 md:origin-bottom ${slotStyles[index] ?? ""}`}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={c.imageSrc}
                  alt={c.title}
                  fill
                  sizes="210px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 pb-4 text-center">
                <div className="text-sm font-semibold text-white">
                  {c.title}
                </div>
                <div className="mt-1 text-xs text-white/80">{c.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => setPage(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === page ? "bg-sky-500" : "bg-slate-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}


