// components/GH1Features.tsx
export default function GH1Features() {
  const features = [
    "Free Wi-Fi",
    "Air Conditioner",
    "24/7 Room Service",
    "Breakfast Included",
    "Swimming Pool Access",
  ];

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Fasilitas Kamar</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {features.map((feat, idx) => (
          <li key={idx}>{feat}</li>
        ))}
      </ul>
    </div>
  );
}
