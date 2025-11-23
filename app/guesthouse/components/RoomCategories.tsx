// components/RoomCategories.tsx
"use client";

import Image from "next/image";

const rooms = [
  {
    title: "Queen Bed",
    description: "Kamar dengan satu ranjang queen bed, nyaman untuk 2 orang.",
    imageUrl: "/images/gh1.jpeg", // sesuaikan path gambarnya
  },
  {
    title: "Double Single Bed",
    description: "Kamar dengan dua ranjang single, cocok untuk teman atau keluarga.",
    imageUrl: "/images/gh2.jpeg", // sesuaikan path gambarnya
  },
];

export default function RoomCategories() {
  return (
   <section className="min-h-screen bg-gray-50 py-16 px-4 text-black">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8"> 
      <h2 className="text-3xl font-bold mb-6">Kategori Kamar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={room.imageUrl}
                alt={room.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
