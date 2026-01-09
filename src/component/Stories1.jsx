import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";

export default function WeddingGallerySlider() {
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

  // ✅ ALWAYS START PAGE FROM TOP
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
              SONIA & EMANNUEL
              <span className="italic block text-2xl md:text-4xl">
                #SEloveaffair
              </span>
            </h1>

            <p className="italic text-gray-600">Written by Emmanuel.</p>
          </div>

          {/* FULL WRITE-UPS */}
          <div className="space-y-8 text-gray-700 leading-8 text-lg">
            <p>
              Meeting Sonia was once a silent prayer in my heart, but standing
              here today and calling her my wife is God’s promise fulfilled.
            </p>

            <p>
              I saw Sonia long before I ever spoke to her. Back in the
              university, we were in the same department, though I was a year
              ahead of her. I admired her quietly from a distance, too shy and
              unsure to approach her.
            </p>

            <p>
              On the 16th of October 2017, in my final days at the university, I
              sent her a message. She never replied… and I walked away believing
              that maybe she was never meant to be mine. But God already knew
              better.
            </p>

            <p>
              Life took me to Abuja for my NYSC, and by God’s grace, I was
              retained at my place of service.
            </p>

            <p>
              In 2019, I received a call from an unknown number. The moment I
              heard her voice, something shifted. It was Sonia.
            </p>

            <p>
              She became part of my everyday life—my laughter, my peace, my
              answered prayer.
            </p>

            <p>
              Distance tested us, but it never broke us. We chose each other
              every single day.
            </p>

            <p className="text-center font-semibold text-[#D4AF37] text-xl pt-10">
              And today, before God and everyone here, I choose you.
              <br />
              Always.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
