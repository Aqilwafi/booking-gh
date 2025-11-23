type Guesthouse = {
  name: string;
  description?: string;
  address?: string;
  imageUrl: string;
  link: string;
};

const guesthouses: Guesthouse[] = [
  { name: "47 Guesthouse", description: "Self-catering, B&B ...", imageUrl: "/images/gh1.jpeg", link: "/guesthouse/47" },
  { name: "Four Guesthouse Brits", description: "Guest House, B&B ...", imageUrl: "/images/gh2.jpeg", link: "/guesthouse/four" },
];

export default function FeaturedGuesthouses() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">Featured Guesthouses</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {guesthouses.map((gh) => (
          <a key={gh.name} href={gh.link} className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img src={gh.imageUrl} alt={gh.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{gh.name}</h3>
              <p className="mt-2 text-gray-600">{gh.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
