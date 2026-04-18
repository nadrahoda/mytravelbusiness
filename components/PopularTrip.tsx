'use client'

import Image from 'next/image'
import { FaStar, FaArrowRight } from 'react-icons/fa'

const tours = [
  {
    title: 'Greece Tour Package',
    image: '/images/blog-1.jpg',
    price: '$980.00',
  },
  {
    title: 'Italy Tour Package',
    image: '/images/tour-1.jpg',
    price: '$890.00',
  },
  {
    title: 'Dubai Tour Package',
    image: '/images/blog-1.jpg',
    price: '$870.00',
  },
  {
    title: 'Switzerland',
    image: '/images/tour-1.jpg',
    price: '$980.00',
  },
]

export default function PopularTour() {
  return (
    <section className="py-24 bg-[#eaf6f6] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-teal-600 text-2xl font-[Dancing_Script]">
            Best Place for You
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mt-2">
            Most Popular Tour
          </h2>

          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden group hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="font-semibold text-lg text-gray-800">
                  {tour.title}
                </h3>

                {/* RATING */}
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-400 text-xs" />
                  ))}
                  <span className="ml-1">(4.8 Rating)</span>
                </div>

                {/* PRICE */}
                <p className="mt-3 text-xl font-semibold text-gray-800">
                  {tour.price}
                  <span className="text-sm font-normal text-gray-500">
                    /Person
                  </span>
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-5">
                  <span className="text-sm text-gray-500">
                    ⏱ 7 Days
                  </span>

                  <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-gray-300 hover:bg-teal-600 hover:text-white transition">
                    Book Now
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

      

      </div>
    </section>
  )
}