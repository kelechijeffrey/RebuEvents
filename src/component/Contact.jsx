import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0f0f0f] text-[#D4AF37]"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <h1
          className="text-5xl md:text-6xl font-semibold tracking-tight  transform transition-transform duration-1000 ease-in-out
    hover:translate-x-32"
        >
          Contact
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Form */}
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-[#D4AF37]/40 py-2 text-[#D4AF37]
                           focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-[#D4AF37]/40 py-2 text-[#D4AF37]
                           focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-[#D4AF37]/40 py-2 resize-none
                         focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-10 py-3 border border-[#D4AF37]
                       hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            Send Message
          </button>

          {/* Meta Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 text-white">
            <div>
              <p className="uppercase text-xs opacity-70">Location</p>
              <p className="mt-2 font-medium">Owerri, PH</p>
            </div>

            <div>
              <p className="uppercase text-xs opacity-70">Phone</p>
              <a className="mt-2 font-medium">090.561.545.42</a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/rebu_events?igsh=YTU0YTMzaDY1a3Uw"
                className="mt-2 font-medium"
              >
                Instagram
              </a>
            </div>
            <div>
              <p className="uppercase text-xs opacity-70">Email</p>
              <p className="mt-2 font-medium">rebuevents@gmail.com</p>
            </div>
          </div>
        </form>

        {/* Image */}
        <div className="flex justify-start">
          {" "}
          <div className="overflow-hidden w-[750px]">
            {" "}
            <img
              src="./img/phone.png"
              alt=""
              className="w-[750px] h-[750px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
