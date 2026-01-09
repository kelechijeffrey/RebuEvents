import React from "react";
import { Link } from "react-router-dom";

const stories = [
  {
    title: "Tochukwu and Chiamaka",
    tag: "#Tochi2025",
    image: "/img/couple.png",
  },
  {
    title: "Sonia & Emmanuel ",
    tag: "#SEloveaffair",
    image: "/img/bg4.png",
  },
];

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
          {stories.map((story, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="
                    w-full h-[420px] object-cover
                    transform transition-all duration-700 ease-out
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0 bg-black/0
                    transition-all duration-700
                    md:group-hover:bg-black/30
                  "
                />

                {/* Read Button */}
                <Link
                  to="/stories2"
                  className="
                    absolute bottom-6 left-1/2 -translate-x-1/2
                    px-6 py-2 text-sm tracking-wide
                    bg-white text-black
                    transition-all duration-500
                    opacity-100 translate-y-0
                    md:opacity-0 md:translate-y-4
                    md:group-hover:opacity-100
                    md:group-hover:translate-y-0
                  "
                >
                  Read +
                </Link>
              </div>

              {/* Text */}
              <div className="mt-6">
                <p className="text-xs tracking-[0.3em] text-gray-500">
                  LOVE STORIES
                </p>
                <h3 className="text-lg font-serif mt-2">{story.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{story.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
