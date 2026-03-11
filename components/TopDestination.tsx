'use client'

import Image from 'next/image'
import { useState } from 'react'

const destinations = [
  { name: 'Maldives', listing: 25, image: '/images/blog-1.jpg' },
  { name: 'Greece', listing: 18, image: '/images/tour-1.jpg' },
  { name: 'London', listing: 30, image: '/images/blog-1.jpg' },
  { name: 'Switzerland', listing: 21, image: '/images/tour-1.jpg' },
  { name: 'Sydney', listing: 15, image: '/images/blog-1.jpg' }
]

export default function TopDestination () {
  const [active, setActive] = useState(0)

  const getPosition = (index: number) => {
    const total = destinations.length

    let diff = index - active

    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) return 'translate-x-0 scale-100 z-20 blur-0'

    if (diff === -1) return '-translate-x-[260px] scale-90 z-10 blur-sm'

    if (diff === 1) return 'translate-x-[260px] scale-90 z-10 blur-sm'

    if (diff === -2) return '-translate-x-[480px] scale-80 z-0 blur-md'

    if (diff === 2) return 'translate-x-[480px] scale-80 z-0 blur-md'

    return 'opacity-0'
  }

  return (
    <section className='py-8 bg-white overflow-hidden'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Heading */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-16'>
          <div className=''>
            <p className='text-2xl text-teal-600 font-[Dancing_Script]'>
              Top Destination
            </p>

            <h2 className='text-4xl font-bold text-gray-800'>
              Top Destination
            </h2>
          </div>

          {/* Tabs */}
          <div className='flex gap-3 mt-6 md:mt-0 flex-wrap'>
            {destinations.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`px-5 py-2 rounded-lg text-sm transition
              ${
                active === index
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Card Stack */}
        <div className='relative flex justify-center items-center h-[520px]'>
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${getPosition(
                index
              )}`}
            >
              <div className='relative w-[340px] h-[500px] rounded-3xl overflow-hidden shadow-xl'>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className='object-cover'
                />

                <div className='absolute inset-0 bg-black/20' />

                {/* Text */}
                <div className='absolute bottom-6 left-6 text-white'>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>

                  <p className='text-sm opacity-80'>{item.listing} Listing</p>
                </div>

                {/* Button */}
                <button className='absolute bottom-6 right-6 border border-white text-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition'>
                  View All
                </button>
              </div>
            </div>
          ))}

          {/* Drag Indicator */}
          <div className='absolute right-[22%] top-1/2 -translate-y-1/2 bg-teal-700 text-white w-24 h-24 rounded-full flex items-center justify-center text-sm tracking-widest shadow-lg'>
            DRAG
          </div>
        </div>
      </div>
    </section>
  )
}
