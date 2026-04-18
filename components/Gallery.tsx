'use client'

import Image from 'next/image'

export default function Gallery() {
  const img = "/images/blog-1.jpg"

  return (
    <section className="py-24 bg-[#f8fbfb] relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-teal-600 text-2xl font-[Dancing_Script]">
            Make Your Tour More Pleasure
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mt-2">
            Recent Gallery
          </h2>
        </div>

        {/* GALLERY */}
       <div className="flex flex-wrap justify-center items-center gap-5">

          {/* LEFT LANDSCAPE */}
          <div className="relative w-[200px] h-[150px] rounded-2xl overflow-hidden items-center justify-center">
            <Image src={img} alt="" fill className="object-cover hover:scale-110 transition duration-300" />
          </div>

          {/* LEFT STACK */}
          <div className="flex flex-col gap-5">
            <div className="relative w-[180px] h-[120px] rounded-2xl overflow-hidden">
              <Image src={img} alt="" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative w-[180px] h-[140px] rounded-2xl overflow-hidden">
              <Image src={img} alt="" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
          </div>

          {/* CENTER PORTRAIT */}
        <div className="relative w-[200px] h-[300px] rounded-2xl overflow-hidden">
            <Image src={img} alt="" fill className="object-cover hover:scale-110 transition duration-300" />
          </div>
          {/* RIGHT STACK */}
          <div className="flex flex-col gap-5">
            <div className="relative w-[180px] h-[140px] rounded-2xl overflow-hidden">
              <Image src={img} alt="" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative w-[180px] h-[120px] rounded-2xl overflow-hidden">
              <Image src={img} alt="" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
          </div>

          {/* RIGHT LANDSCAPE */}
       <div className="flex items-center">
  <div className="relative w-[200px] h-[150px] rounded-2xl overflow-hidden">
    <Image src={img} alt="" fill className="object-cover hover:scale-110 transition duration-300" />
  </div>
</div>

        </div>
      </div>

      {/* FLOATING ICONS */}
      <div className="absolute left-10 top-1/2 text-teal-400 text-3xl opacity-60 hidden lg:block">
        ✈
      </div>

      <div className="absolute right-10 bottom-10 text-teal-400 text-3xl opacity-60 hidden lg:block">
        ⚓
      </div>

    </section>
  )
}