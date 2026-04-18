"use client"
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    name: "Andrew Simon",
    role: "Traveller",
    image: "https://i.pravatar.cc/100?img=1",
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living",
  },
  {
    name: "Michel Smith",
    role: "Traveller",
    image: "https://i.pravatar.cc/100?img=2",
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living",
  },
  {
    name: "John Doe",
    role: "Traveller",
    image: "https://i.pravatar.cc/100?img=3",
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-[#eaf6f6] text-center">
      <p className="text-sm text-teal-500 mb-2">Testimonial</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
        What Client Say About Us
      </h2>

      <div className="relative flex items-center justify-center gap-6 overflow-hidden">
        {testimonials.map((item, index) => {
          const isActive = index === active;

          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer transition-all duration-500 rounded-2xl p-6 w-[320px] md:w-[420px] shadow-md bg-white ${
                isActive
                  ? "scale-100 opacity-100 z-10"
                  : "scale-90 opacity-40 "
              }`}
            >
              {/* Header */}
             <div className="flex items-center justify-between mb-4">
  {/* Left: Profile */}
  <div className="flex items-center gap-4">
    <img
      src={item.image}
      alt={item.name}
      className="w-12 h-12 rounded-full object-cover"
    />
    <div className="text-left">
      <h4 className="font-semibold text-gray-800">
        {item.name}
      </h4>
      <p className="text-sm text-gray-500">{item.role}</p>
    </div>
  </div>

  {/* Right: Stars */}
  <div className="flex gap-1 text-yellow-400">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} />
      ))}
  </div>
</div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.text}”
              </p>

              {/* Quote Icon */}
              <div className="mt-6 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-lg">
                  <FaQuoteRight/>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full ${
              active === index ? "bg-teal-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;