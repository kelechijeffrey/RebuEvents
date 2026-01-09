import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen text-white scroll-mt-20"
      style={{
        backgroundColor: "#0f0f0f",
        backgroundImage: `
          linear-gradient(to right, rgba(212,175,55,0.18) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(212,175,55,0.18) 1px, transparent 1px)
        `,
        backgroundSize: "90px 90px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex flex-col md:flex-row w-full justify-between gap-10 px-6 py-20">
        {/* Image */}
        <div className="overflow-hidden md:ml-20">
          <img
            src="/img/boss.png"
            alt="Founder"
            className="w-[550px] h-[650px] object-cover transition-transform duration-800 ease-out hover:scale-110"
          />
        </div>

        {/* Text Content */}
        <div className="md:flex-1 flex flex-col justify-end text-start max-w-xl">
          <h1 className="font-semibold text-5xl md:text-7xl text-[#D4AF37] mb-12 transform transition-transform duration-1000 ease-in-out hover:translate-x-32">
            About Us
          </h1>

          <p className="text-gray-400 mb-4">(Meet Our Founder)</p>

          <p
            className={`font-light text-gray-200 mb-8 leading-relaxed transition-all duration-[1000ms] ease-out ${
              showText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[80px]"
            }`}
          >
            At Rebu Events, we don't just plan events — we create unforgettable
            experiences that leave a lasting imprint on hearts and memories.
          </p>

          <p
            className={`font-light text-gray-200 mb-8 leading-relaxed transition-all duration-[1000ms] ease-out delay-200 ${
              showText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[80px]"
            }`}
          >
            From intimate soirées to grand affairs, our team ensures that every
            element reflects your unique story and vision.
          </p>

          {/* Centered Luxury CTA */}
          <Link
            to="/read-more"
            className="
              mt-12 mx-auto
              inline-flex items-center justify-center gap-3
              px-10 py-4
              text-base md:text-lg font-semibold tracking-wide
              rounded-full

              border border-[#D4AF37]
              text-[#D4AF37]

              transition-all duration-300 ease-out
              hover:bg-[#D4AF37]
              hover:text-black
              hover:-translate-y-1
              hover:shadow-[0_10px_40px_rgba(212,175,55,0.35)]
            "
          >
            Read more about us <span className="text-xl">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
