import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";

export default function WeddingGallerySlider() {
  const images = [
    "img/photo1.png",
    "img/photo2.png",
    "img/photo3.png",
    "img/photo4.png",
    "img/photo5.png",
    "img/photo6.png",
    "img/photo7.png",
    "img/photo8.png",
    "img/photo9.png",
    "img/couple.png",
  ];

  const [current, setCurrent] = useState(0);
  const itemsPerView = 3;

  // ✅ FORCE PAGE TO LOAD FROM TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* IMAGE SLIDER */}
      <section className="bg-white py-20 px-4">
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / itemsPerView}%)`,
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2
              bg-black/60 text-white w-10 h-10 rounded-full
              flex items-center justify-center hover:bg-black"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2
              bg-black/60 text-white w-10 h-10 rounded-full
              flex items-center justify-center hover:bg-black"
          >
            ›
          </button>
        </div>
      </section>

      {/* LOVE STORY */}
      <section className="bg-[#F6F4EF] px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] text-sm text-gray-500 mb-4">
              OUR LOVE STORY
            </p>

            <h1 className="font-serif text-4xl md:text-6xl text-[#D4AF37] mb-6">
              TOCUKWU & CHIAMAKA
              <span className="italic block text-2xl md:text-4xl">
                #Tochi2025
              </span>
            </h1>

            <p className="italic text-gray-600">Written by Chiamaka.</p>
          </div>

          {/* STORY TEXT */}
          <div className="space-y-8 text-gray-700 leading-8 text-lg">
            <p>
              On the 8th of November, 2022—a day already special as it marked
              the bride’s birthday—her elder brother shared her photos on his
              WhatsApp status to celebrate her.
            </p>

            <p>
              The groom, who had attended the same university as the bride’s
              elder brother, came across the photos and was immediately
              intrigued.
            </p>

            <p>
              In May 2024, they reconnected—and this time, everything felt
              different.
            </p>

            <p>
              What began with a birthday post and a simple message has now
              become a love story worth celebrating—one that led them here
              today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
