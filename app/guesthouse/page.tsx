import Navbar from '@/components/Navbar';
import RoomCategories from './components/RoomCategories';
import Footer from '@/components/Footer';

export default function GuesthousePage() {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <Navbar />
      <main className="flex-1 bg-white">
         <RoomCategories />
      </main>
      <Footer />
    </div>
  );
}
