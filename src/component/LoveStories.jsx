import React from "react";
import { Link } from "react-router-dom";

export default function LoveStories() {
  return (
    <section
      id="love-stories"
      className="min-h-screen px-6 py-20"
      style={{
        backgroundColor: "#F6F4EF",
        backgroundSize: "90px 90px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-right">
          <p className="tracking-[0.3em] text-sm text-gray-500">LOVE STORIES</p>
          <h1
            className="
              font-semibold text-5xl md:text-7xl text-[#D4AF37] mb-6
              transform transition-transform duration-1000 ease-in-out
              hover:translate-x-32
            "
          >
            LOVE STORIES
          </h1>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* CARD 1 */}
          <div className="group">
            <div className="overflow-hidden relative">
              <img
                src="/img/couple.png"
                alt="Tochukwu and Chiamaka"
                className="
                  w-full h-[420px] object-cover
                  transform transition-all duration-700 ease-out
                  group-hover:scale-110
                "
              />

              <Link
                to="/stories2"
                className="
                  absolute bottom-6 left-1/2 -translate-x-1/2
                  px-6 py-2 text-sm tracking-wide
                  bg-white text-black
                  transition-all duration-500
                "
              >
                Read Story +
              </Link>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-[0.3em] text-gray-500">
                LOVE STORIES
              </p>
              <h3 className="text-lg font-serif mt-2">Tochukwu and Chiamaka</h3>
              <p className="text-sm text-gray-500 mt-1">#Tochi2025</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group">
            <div className="overflow-hidden relative">
              <img
                src="/img/bg4.png"
                alt="Sonia & Emmanuel"
                className="
                  w-full h-[420px] object-cover
                  transform transition-all duration-700 ease-out
                  group-hover:scale-110
                "
              />

              <Link
                to="/stories1"
                className="
                  absolute bottom-6 left-1/2 -translate-x-1/2
                  px-6 py-2 text-sm tracking-wide
                  bg-white text-black
                  transition-all duration-500
                "
              >
                Read Story +
              </Link>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-[0.3em] text-gray-500">
                LOVE STORIES
              </p>
              <h3 className="text-lg font-serif mt-2">Sonia & Emmanuel</h3>
              <p className="text-sm text-gray-500 mt-1">#SEloveaffair</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
