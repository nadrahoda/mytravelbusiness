'use client'

import Image from 'next/image'
import { FaArrowRight, FaUsers } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

export default function PlanTrip () {
  return (
    <section className='py-24 bg-[#f7f7f7] relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center'>
        {/* LEFT IMAGES */}
        <div className='relative flex gap-6 justify-center lg:justify-start'>
          {/* Tall Arch */}
          <div className='relative w-[220px] sm:w-[260px] h-[360px] sm:h-[420px] overflow-hidden rounded-t-full rounded-b-3xl'>
            <Image
              src='/images/blog-1.jpg'
              alt=''
              fill
              className='object-cover'
            />
          </div>

          {/* Right Stack */}
          <div className='flex flex-col gap-6'>
            <div className='relative w-[200px] sm:w-[260px] h-[150px] sm:h-[180px] overflow-hidden rounded-t-full'>
              <Image
                src='/images/tour-1.jpg'
                alt=''
                fill
                className='object-cover'
              />
            </div>

            <div className='relative w-[200px] sm:w-[260px] h-[180px] sm:h-[220px] overflow-hidden rounded-b-full rounded-t-3xl'>
              <Image
                src='/images/blog-1.jpg'
                alt=''
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className='relative z-10 '>
          <p className='text-teal-600 text-2xl sm:text-3xl font-[Dancing_Script]'>
            Let's Go Together
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight mt-2'>
            Plan Your Trip <br /> With Us
          </h2>

          <p className='text-gray-500 mt-6 leading-relaxed max-w-lg'>
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don't look even slightly.
          </p>

          {/* FEATURES */}
          <div className='mt-8 space-y-6'>
            <div className='flex gap-4 items-start'>
              <div className='w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 text-white text-lg shrink-0'>
                ✈
              </div>
              <div className='max-w-[260px] sm:max-w-xs lg:max-w-[300px]'>
                <h4 className='font-semibold text-lg'>Exclusive Trip</h4>
                <p className='text-gray-500 text-sm'>
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>

            <div className='flex gap-4 items-start'>
              <div className='w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 text-white shrink-0'>
                <FaUsers />
              </div>
              <div className='max-w-[260px] sm:max-w-xs lg:max-w-[300px]'>
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

      {/* RIGHT SIDE DESIGN ELEMENTS */}

      {/* BLUE CIRCLE BACKGROUND */}
      <div className='absolute bottom-0 right-0 w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] bg-[#dff3f4] rounded-full z-0 translate-x-1/4 translate-y-1/4'></div>

      {/* PERSON IMAGE */}
      <div className='absolute bottom-0 right-4 sm:right-10 z-10 hidden lg:block'>
        <Image
          src='/images/person.png' // 👉 replace with your image
          alt='traveler'
          width={320}
          height={420}
          className='object-contain drop-shadow-xl'
        />
      </div>

      {/* FLOATING RATING BADGE */}
      <div className='absolute right-6 sm:right-20 top-1/2 hidden lg:flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-md z-20'>
        <FaStar className='text-yellow-400 text-sm' />
        <span className='text-sm font-medium'>4.9k</span>
      </div>

      {/* FLOATING EMOJI */}
      <div className='absolute bottom-20 right-20 text-2xl hidden lg:block z-20'>
        😍
      </div>
    </section>
  )
}
