

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "PROJECT", id: "project" },
    { label: "LOVE STORIES", id: "love-stories" },
    { label: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    setShowHeading(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center scroll-mt-24"
      style={{ backgroundImage: "url('/img/bg5.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* FIXED HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between px-6 py-6
          transition-all duration-500
          ${
            scrolled
              ? "bg-black/80 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <img src="/img/logo.png" alt="Logo" className="w-12 h-12" />
          <span className="text-2xl font-semibold opacity-80">RebuEvents</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-xs tracking-widest text-white">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="opacity-70 hover:opacity-100 hover:text-yellow-400 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/2349056154542"
            className="hover:text-yellow-400 transition"
          >
            BOOK NOW
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-6 text-white text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/2349056154542"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            BOOK NOW
          </a>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-24">
        <div className="max-w-2xl text-center text-white">
          <h1
            className={`text-4xl md:text-5xl font-light leading-tight
              transition-all duration-[1200ms] ease-out
              ${
                showHeading
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[80px]"
              }
            `}
          >
            Crafting Timeless Luxury Celebrations That Speak Elegance
          </h1>

          <a
            href="https://wa.me/2349056154542"
            className="mt-10 inline-flex items-center gap-2 rounded-full
                       border border-white px-8 py-3 text-sm
                       transition hover:bg-[#D4AF37] hover:text-black"
          >
            Book an Appointment <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
