import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      {/* ================= PROJECTS SECTION ================= */}
      <section className="min-h-screen bg-[#0f0f0f] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2
              className="
                text-5xl md:text-7xl font-bold text-[#C9A24D]
                transform transition-transform duration-1000 ease-in-out
                hover:translate-x-24
              "
            >
              Some of Our Projects
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* CARD 1 */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/img/bg4.png"
                alt="Roots, Reunion & Romance"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold">
                  Roots, Reunion & Romance
                </h3>
                <p className="text-sm opacity-80">#SEloveaffair</p>

                <Link
                  to="/slider1"
                  className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
                >
                  View
                </Link>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/img/mg4.png"
                alt="Biggest Wedding"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold">
                  Crafting Moments That Last Forever
                </h3>
                <p className="text-sm opacity-80">#VinCyn2025</p>

                <Link
                  to="/slider3"
                  className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
                >
                  View
                </Link>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/img/file11.png"
                alt="Forever Begins"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold"> Home of Elegance</h3>
                <p className="text-sm opacity-80">#renaissanceluv2025</p>

                <Link
                  to="/slider2"
                  className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO FEATURE ================= */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {/* DESKTOP VIDEO */}
        <video
          src="/vid/vid2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />

        {/* MOBILE VIDEO */}
        <video
          src="/vid/vid3.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </section>
    </>
  );
};

export default Project;
