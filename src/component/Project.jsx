import React from "react";

const Project = () => {
  return (
    <>
      {/* VIDEO FEATURE */}
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
        <div className="absolute inset-0 bg-black/20" />
      </section>
    </>
  );
};

export default Project;
