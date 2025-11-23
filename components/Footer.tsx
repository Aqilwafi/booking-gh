export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} D'Guest of H. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/about" className="hover:text-white">About Us</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
