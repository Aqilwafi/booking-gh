// components/GH1BookButton.tsx
"use client";

export default function GH1BookButton() {
  const handleBook = () => {
    // bisa diarahkan ke halaman booking, atau integrasi form/booking API
    alert("Booking untuk GH1 berhasil (dummy)");
  };

  return (
    <div className="mt-8">
      <button
        onClick={handleBook}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
      >
        Book Now
      </button>
    </div>
  );
}
