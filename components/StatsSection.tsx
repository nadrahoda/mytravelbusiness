'use client'

export default function StatsSection() {
  const stats = [
    { value: '12', label: 'Years Experience' },
    { value: '97%', label: 'Retention Rate' },
    { value: '8K', label: 'Tour Completed' },
    { value: '19K', label: 'Happy Travellers' },
  ]

  return (
    <section className="py-28 bg-[#f8fbfb] relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* STATS */}
        <div className="flex flex-wrap justify-center items-center gap-12">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center 
              w-[220px] h-[220px] rounded-full 
              border border-teal-400/40 
              ${index % 2 === 0 ? 'mt-10' : 'mb-10'}
              `}
            >

              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-teal-400/30"></div>

              {/* Inner Circle */}
              <div className="w-[180px] h-[180px] rounded-full bg-[#dfeff1] flex flex-col items-center justify-center text-center">

                <h3 className="text-3xl font-semibold text-gray-800">
                  {item.value}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.label}
                </p>

              </div>

              {/* Small Dot */}
              <div className="absolute w-3 h-3 bg-teal-500 rounded-full bottom-4 right-4 shadow-md"></div>

            </div>
          ))}

        </div>
      </div>

      {/* FLOATING ICONS */}

      {/* Hot Air Balloons */}
      <div className="absolute left-10 top-16 text-teal-400 text-3xl opacity-60 hidden lg:block">
        🎈
      </div>

      <div className="absolute left-20 top-32 text-teal-400 text-xl opacity-50 hidden lg:block">
        🎈
      </div>


      {/* Palm Trees */}
      <div className="absolute left-10 bottom-0 text-4xl hidden lg:block">
        🌴
      </div>

    </section>
  )
}