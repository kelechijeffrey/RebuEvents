import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "PROJECT", path: "/project" },
    { label: "LOVE STORIES", path: "/love-stories" },
    { label: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* FIXED HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between
          px-6 py-6
          transition-all duration-500
          ${
            scrolled
              ? "bg-black/85 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <img src="/img/logo.png" alt="Logo" className="w-12 h-12" />
          <span className="text-2xl font-semibold opacity-80">RebuEvents</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-xs tracking-widest text-white">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-400 opacity-100"
                    : "opacity-70 hover:opacity-100 hover:text-yellow-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-6 text-white text-lg md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Spacer so content doesn’t hide behind fixed navbar */}
      <div className="h-[88px]" />
    </>
  );
};

export default Hero;
