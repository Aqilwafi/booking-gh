// components/GH1Slider.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gh1.jpeg",
  "/images/gh2.jpeg",
  "/images/home_kanan.jpeg",
  "/images/home_kiri.jpeg",
];

export default function GH1Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-xl">
      <Image
        src={images[current]}
        alt={`GH1 Slide ${current + 1}`}
        fill
        className="object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
