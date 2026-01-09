import React from "react";

import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";

export default function WeddingGallerySlider() {
  const images = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png",
    "img/img4.png",
    "img/bg5.png",
    "img/img6.png",
    "img/img7.png",
    "img/img8.png",
    "img/img9.png",
    "img/bg4.png",
  ];

  const [current, setCurrent] = useState(0);
  const itemsPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) =>
      prev + itemsPerView >= images.length ? 0 : prev + itemsPerView
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev - itemsPerView < 0
        ? images.length - itemsPerView
        : prev - itemsPerView
    );
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* IMAGE SLIDER */}
      <section className="bg-white py-20 px-4">
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / itemsPerView}%)`,
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2
                       bg-black/60 text-white w-10 h-10 rounded-full
                       flex items-center justify-center hover:bg-black"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2
                       bg-black/60 text-white w-10 h-10 rounded-full
                       flex items-center justify-center hover:bg-black"
          >
            ›
          </button>
        </div>
      </section>

      {/* LOVE STORY */}
      <section className="bg-[#F6F4EF] px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] text-sm text-gray-500 mb-4">
              OUR LOVE STORY
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#D4AF37] mb-6">
              SONIA & EMANNUEL <span className="italic block text-2xl md:text-4xl ">#SEloveaffair</span>
            </h1>
            <p className="italic text-gray-600">
              Written by Emmanuel.
            </p>
          </div>

          {/* FULL STORY — NOTHING REMOVED */}
          <div className="space-y-8 text-gray-700 leading-8 text-lg">
            <p>
              Meeting Sonia was once a silent prayer in my heart, but standing
              here today and calling her my wife is God’s promise fulfilled.
            </p>

            <p>
              I saw Sonia long before I ever spoke to her. Back in the
              university, we were in the same department, though I was a year
              ahead of her. I admired her quietly from a distance, too shy and
              unsure to approach her. So I did what courage would allow me to do
              at the time—I searched for her on Facebook and sent her a friend
              request. She accepted.
            </p>

            <p>
              On the 16th of October 2017, in my final days at the university, I
              sent her a message. She never replied… and I walked away believing
              that maybe she was never meant to be mine. But God already knew
              better.
            </p>

            <p>
              Life took me to Abuja for my NYSC, and by God’s grace, I was
              retained at my place of service. One faithful day, a friend of
              mine—whom I served with in the Sacred Heart of Jesus and
              Immaculate Heart of Mary association back in school, and who also
              worked with me as an EXCO—called me, asking if I could help his
              sister find an NYSC placement in Abuja.
            </p>

            <p>
              I agreed without hesitation, unaware that God was about to
              reintroduce the woman I once admired from afar—this time, into my
              life.
            </p>

            <p>
              In 2019, I received a call from an unknown number. The moment I
              heard her voice, something shifted. It was soft, warm, and
              familiar. She introduced herself, and suddenly, there she
              was—Sonia. I saved her number immediately, knowing deep in my
              heart that this time, I would not let destiny slip away.
            </p>

            <p>
              She got her placement at my workplace, and slowly, our paths began
              to intertwine. We talked about work, dreams, and the future.
              During her breaks, she would come to my office, and we would sit,
              talk, laugh, and share meals. Without even realizing it, she was
              becoming a part of my everyday life—and my heart.
            </p>

            <p>
              I remember messaging her on Instagram one day, and she asked why I
              was chatting her there. I told her, “This is where I will ask you
              out.” She responded with an emoji, but my heart was already
              serious.
            </p>

            <p>
              I liked every picture she posted—even the old ones—because I
              wanted to celebrate every part of her life, even the moments
              before I knew her. When she noticed and asked why, I jokingly said
              I would unlike them. She said, “Don’t you dare.” In that moment, I
              knew—I wanted to spend my life making her smile like that.
            </p>

            <p>
              When I finally asked if she was single and jokingly asked her to
              be my girlfriend, she thought I wasn’t serious. But on June 24th,
              2020, I spoke from the deepest part of my soul.
            </p>

            <p>
              I told her my greatest fear was marrying the wrong person—that all
              I wanted was a woman who would be my peace, my laughter, my safe
              place, someone who would love me and believe in me even when I
              struggled to believe in myself. She told me her fear was the same.
              And in that moment, I realized—we were searching for each other.
            </p>

            <p>
              I told her, “I am here. If you stay with me, I will not let you
              down.” When I asked her to be my girlfriend and she said yes,
              something in my heart settled. That was the first time I told her
              I loved her—and when she said it back, I knew I had found my home.
            </p>

            <p>
              A year later, I had to leave the country. Distance tested us, but
              it never broke us. We chose each other every single day. We prayed
              together before sleeping, trusted each other through the
              uncertainty, and held on to love even when it was hard.
            </p>

            <p>
              Sonia is joy in human form. She laughs easily, loves deeply, and
              carries light wherever she goes. Even in difficult moments, she
              finds a way to lift me up, to remind me of hope.
            </p>

            <p>
              Today, I stand here saying “I do” to my best friend, my prayer
              warrior, my answered prayer.
            </p>

            <p className="text-center font-semibold text-[#D4AF37] text-xl pt-10">
              And today, before God and everyone here, I choose you.
              <br />
              Always.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
