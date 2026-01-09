import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";

const Slider3 = () => {
  const images = [
    "img/mg.png",
    "img/mg2.png",
    "img/mg3.png",
    "img/mg4.png",
    "img/mg5.png",
    "img/mg6.png",
    "img/mg7.png",
    "img/mg8.png",
    "img/mg9.png",
    "img/mg10.png",
  ];

  const [current, setCurrent] = useState(0);
  const itemsPerView = 3;

  const next = () => {
    setCurrent((prev) =>
      prev + itemsPerView >= images.length ? 0 : prev + itemsPerView
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev - itemsPerView < 0
        ? images.length - itemsPerView
        : prev - itemsPerView
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-[#0e0e0e] py-24 px-4">
        {/* SLIDER */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / itemsPerView}%)`,
            }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full md:w-1/3 px-3 flex-shrink-0">
                <img
                  src={img}
                  alt=""
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>
            ))}
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full
              bg-gradient-to-r from-[#C9A24D] to-[#E6C76A]
              text-black text-2xl font-bold
              shadow-lg
              hover:scale-110 transition
              flex items-center justify-center
            "
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full
              bg-gradient-to-r from-[#E6C76A] to-[#C9A24D]
              text-black text-2xl font-bold
              shadow-lg
              hover:scale-110 transition
              flex items-center justify-center
            "
          >
            ›
          </button>
        </div>

        {/* TEXT */}
        <div className="mt-24 text-center max-w-4xl mx-auto px-4">
          <p className="tracking-[0.35em] text-sm text-[#C9A24D] mb-4">
            VINCET & CYNTHIA <span className="text-gray-300">#VinCyn2025</span>
          </p>

          <h2
            className="
              text-3xl md:text-5xl font-semibold
              bg-gradient-to-r from-[#C9A24D] to-[#E6C76A]
              bg-clip-text text-transparent
            "
          >
            Crafting Moments That Last Forever
          </h2>
        </div>
      </section>
    </>
  );
};

export default Slider3;
