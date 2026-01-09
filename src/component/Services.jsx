import React from "react";

const services = [
  {
    number: "01",
    title: "Event Planning",
    description:
      "We curate bespoke event concepts with meticulous attention to detail, transforming your vision into an elegant and flawlessly structured experience from start to finish.",
  },
  {
    number: "02",
    title: "Event Coordination",
    description:
      "We orchestrate every element on the day of your event with precision and discretion, ensuring seamless execution while you enjoy an effortless, worry-free celebration.",
  },
  {
    number: "03",
    title: "Vendor Sourcing",
    description:
      "We source and manage an exclusive network of trusted vendors, carefully selected to complement your aesthetic, uphold exceptional standards, and deliver excellence at every touchpoint.",
  },
  {
    number: "04",
    title: "Timeline Management",
    description:
      "We design and oversee refined event timelines that ensure perfect pacing, smooth transitions, and a polished flow throughout your event.",
  },
  {
    number: "05",
    title: "Budget Creation",
    description:
      "We craft strategic, transparent budgets that balance sophistication and value, ensuring every investment contributes meaningfully to an elevated event experience.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen py-24 px-6 md:px-16 bg-[#FAF9F6] text-[#1A1A1A]"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 overflow-hidden">
        <h1
          className="
            text-5xl md:text-7xl font-bold text-[#C9A24D]
            transform transition-transform duration-1000 ease-in-out
            hover:translate-x-24
          "
        >
          Our Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
        {services.map((service) => (
          <div
            key={service.number}
            className="
              border-b border-[#C9A24D]/30 pb-10
              transition-all duration-700 ease-out
              transform translate-y-6 hover:translate-y-0 hover:scale-[1.03]
            "
          >
            <span className="block text-sm tracking-widest mb-4 text-[#C9A24D]">
              .{service.number}
            </span>

            <h3
              className="
                text-2xl md:text-3xl font-semibold mb-6
                transition-transform duration-500 ease-out
                hover:translate-x-2
              "
            >
              {service.title}
            </h3>

            <p className="leading-relaxed max-w-xl text-[#5F5F5F]">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-20">
        <a
          href="https://wa.me/2349056154542"
          className="
            inline-flex items-center gap-2 rounded-full
            border border-[#C9A24D]
            px-10 py-4 text-lg font-semibold
            text-[#C9A24D]
            transition-all duration-300
            hover:bg-[#C9A24D] hover:text-[#1A1A1A]
          "
        >
          Book an Appointment 
        </a>
      </div>
    </section>
  );
};

export default Services;
