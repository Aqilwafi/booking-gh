"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // === STATE LOGIN DUMMY === //
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // ubah jadi true untuk testing

  // === SCROLL LISTENER === //
  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  // === DINAMIS STYLE === //
  const activeStyle = transparent
    ? scrolled
      ? "bg-white shadow-md text-black"
      : "bg-transparent text-white"
    : "bg-white shadow-md text-black";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${activeStyle}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* === LOGO & TEXT === */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/next.svg"
            alt="Logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <span className="font-bold text-xl tracking-wide">
            D'Guest of H
          </span>
        </Link>

        {/* === DESKTOP MENU === */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          <Link href="/accommodation" className="hover:opacity-70 transition">
            Accommodation
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition">
            Contact Us
          </Link>

          {/* LOGIN AREA (DESKTOP) */}
          {isLoggedIn ? (
            <Link href="/profile" className="hover:opacity-70 transition">
              Profile
            </Link>
          ) : (
            <Link
              href="/login"
              className={`px-4 py-2 rounded transition ${
                scrolled || !transparent
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              Join Now
            </Link>
          )}
        </div>

        {/* === MOBILE MENU TOGGLE === */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {open && (
        <div
          className={`md:hidden px-4 pb-4 space-y-3 transition-all duration-300
            ${
              scrolled || !transparent
                ? "bg-white text-black shadow-md"
                : "bg-black/70 text-white backdrop-blur-sm py-4"
            }
          `}
        >
          <Link href="/accommodation" onClick={() => setOpen(false)} className="block">
            Accommodation
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            About Us
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            Contact Us
          </Link>

          {/* LOGIN AREA (MOBILE) */}
          {isLoggedIn ? (
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="block"
            >
              Profile
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded bg-blue-600 text-white text-center"
            >
              Join Now
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
