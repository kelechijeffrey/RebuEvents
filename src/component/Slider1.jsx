import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";

const Slider1 = () => {
  const images = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png",
    "img/img4.png",
    "img/bg5.png",
    "img/img6.png",
    "img/img7.png",
    "img/img8.png",
    "img/img9.png",
    "img/bg4.png",
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
          <p className="tracking-[0.4em] text-sm text-[#C9A24D] mb-4">
            LOVE STORY
          </p>

          <h2
            className="
              text-3xl md:text-5xl font-semibold
              bg-gradient-to-r from-[#C9A24D] to-[#E6C76A]
              bg-clip-text text-transparent
              leading-tight
            "
          >
            A Journey of Roots, Reunion & Romance
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            Sonia & Emmanuel{" "}
            <span className="text-[#C9A24D]">#SELoveaffair</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Slider1;
