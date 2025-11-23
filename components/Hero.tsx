"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/home_kanan.jpeg",
  "/images/home_kiri.jpeg",
  "/images/gh1.jpeg",
  "/images/gh2.jpeg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Slide wrapper */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms]
              ${i === currentIndex ? "opacity-100" : "opacity-0"}
            `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
          Find Trusted Guesthouses Across South Jakarta
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 drop-shadow-lg max-w-2xl">
          Discover and book guesthouses with confidence. Join D'Guest of H to list your property.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="guesthouse"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Search Guesthouses
          </a>

          <a
            href="/login"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-100 transition text-sm sm:text-base"
          >
            Join Now
          </a>
        </div>
      </div>

    </section>
  );
}
