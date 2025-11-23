import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import GH1Slider from "../components/GH1Slider";
import GH1Features from "../components/GH1Feature";
import GH1BookButton from "../components/GH1BookButton";

export default function GH1Page() {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <Navbar />
      <main className="flex-1 bg-white">
        
        <section className="min-h-screen bg-gray-50 py-16 px-4 text-black">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <h2 className="text-3xl font-bold mb-6">Guesthouse GH1</h2>
          <GH1Slider />
          <GH1Features />
          <GH1BookButton />
        </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
