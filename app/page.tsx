import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedGuesthouses from '@/components/FeaturedGuestHouse';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <Navbar transparent />
      <main className="flex-1">
        <Hero />
        <div className='bg-white'>
          <FeaturedGuesthouses />
        </div>
        
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
