'use client'

import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

export default function PlanTrip () {
  return (
    <section className='py-24 bg-[#f7f7f7]'>
      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center'>
        {/* LEFT IMAGES */}
        <div className='relative flex gap-6'>
          {/* Tall Arch Image */}
          <div className='relative w-[260px] h-[420px] overflow-hidden rounded-t-full rounded-b-3xl'>
            <Image
              src='/images/blog-1.jpg'
              alt='travel'
              fill
              className='object-cover'
            />
          </div>

          {/* Right side images */}
          <div className='flex flex-col gap-6'>
            {/* Half circle */}
            <div className='relative w-[260px] h-[180px] overflow-hidden rounded-t-full'>
              <Image
                src='/images/tour-1.jpg'
                alt='travel'
                fill
                className='object-cover'
              />
            </div>

            {/* Bottom rounded */}
            <div className='relative w-[260px] h-[220px] overflow-hidden rounded-b-full rounded-t-3xl'>
              <Image
                src='/images/blog-1.jpg'
                alt='travel'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className='text-teal-600 text-2xl font-[Dancing_Script]'>
            Let's Go Together
          </p>

          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mt-2'>
            Plan Your Trip <br /> With Us
          </h2>

          <p className='text-gray-500 mt-6 leading-relaxed'>
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don't look even slightly.
          </p>

          {/* FEATURES */}
          <div className='mt-8 space-y-6'>
            {/* Feature 1 */}
            <div className='flex gap-4 items-start'>
              <div className='w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 text-white'>
                ✈
              </div>

              <div>
                <h4 className='font-semibold text-lg'>Exclusive Trip</h4>
                <p className='text-gray-500 text-sm'>
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='flex gap-4 items-start'>
              <div className='w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 text-white'>
                👤
              </div>

              <div>
                <h4 className='font-semibold text-lg'>Professional Guide</h4>
                <p className='text-gray-500 text-sm'>
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className='mt-10 inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition'>
            Learn More
            <FaArrowRight className='text-sm' />
          </button>
        </div>
      </div>
    </section>
  )
}
