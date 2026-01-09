import React from "react";
import Navbar from "./Navbar.jsx";
export default function WeddingHero() {
  return (
    <>
      <Navbar />
      <section className="group min-h-screen bg-[#f6f4ef] flex items-center px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="w-full h-[520px] overflow-hidden rounded-2xl">
            <img
              src="/img/bg3.png"
              alt="Rebu Events Luxury Experience"
              className="
                w-full h-full object-cover
                transition-transform duration-[1600ms] ease-out
                group-hover:scale-110 group-hover:translate-x-4
                will-change-transform
              "
            />
          </div>

          {/* Editorial Copy */}
          <div className="max-w-xl space-y-6">
            <h1
              className="
                font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900
                transition-all duration-[1200ms] ease-out
                group-hover:tracking-wide group-hover:translate-x-2
              "
            >
              Our clients choose <br />
              <span className="italic block transition-transform duration-[1200ms] group-hover:-translate-x-2">
                Rebu Events
              </span>
            </h1>

            <p
              className="
                text-gray-700 text-lg leading-relaxed
                transition-all duration-[1200ms] ease-out
                group-hover:translate-y-1
              "
            >
              Because we deliver more than an event; we deliver a masterpiece.
              With our signature touch of exquisite design, flawless execution,
              and unparalleled attention to detail, we transform ordinary
              moments into extraordinary milestones.
            </p>

            <p
              className="
                text-gray-600 text-lg leading-relaxed
                transition-all duration-[1400ms] ease-out
                group-hover:translate-y-2
              "
            >
              Whether it’s a lavish destination wedding, a glamorous private
              party, or an exclusive corporate gala, Rebu Events guarantees
              elegance, perfection, and prestige at every turn.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0f0f0f] py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12">
            Why Choose Rebu Events?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="
                  bg-[#171717] rounded-2xl p-10 shadow-lg
                  transition-all duration-700 ease-out
                  hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]
                "
              >
                <ul className="space-y-4 text-gray-400 list-disc list-inside">
                  {i === 0 ? (
                    <>
                      <li>Tailored luxury planning for discerning clients</li>
                      <li>
                        Stress-free execution with end-to-end event management
                      </li>
                      <li>Partnerships with elite vendors and luxury brands</li>
                    </>
                  ) : (
                    <>
                      <li>
                        Creative storytelling through décor, design, and
                        experience
                      </li>
                      <li>
                        A reputation for seamless, sophisticated, and
                        spectacular events
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTIGE / BRAND STATEMENT */}
      <section className="group bg-[#f6f4ef] py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="
              font-serif text-2xl md:text-3xl leading-relaxed text-gray-800
              transition-all duration-[1400ms] ease-out
              group-hover:tracking-wide group-hover:-translate-y-2
            "
          >
            At Rebu Events, we don’t just plan occasions — we craft experiences
            that embody elegance, elevate moments, and leave an indelible mark.
          </p>

          <p
            className="
              mt-6 text-gray-600 text-lg max-w-3xl mx-auto
              transition-all duration-[1600ms] ease-out
              group-hover:translate-y-2
            "
          >
            Every celebration is approached with intention, artistry, and a
            commitment to excellence that defines our legacy of luxury events.
          </p>
        </div>
      </section>
    </>
  );
}
