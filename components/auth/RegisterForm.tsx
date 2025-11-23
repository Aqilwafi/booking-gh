"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const nama_lengkap = formData.get("nama") as string;
    const no_hp = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // TODO: Call your login API or server action
    console.log("Login attempt:", { nama_lengkap, no_hp, email, password });

    setLoading(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border">
     
      <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
      

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Nama Lengkap */}
        <div>
          <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Tasha Mirelle"
          />
        </div>
        {/* Nama Lengkap */}
        <div>
          <label className="block text-sm font-medium mb-1">No. Handphone</label>
          <input
            type="number"
            name="phone"
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. +62 xxx..."
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Sign Up"}
        </button>
      </form>

      {/* Links */}
      <p className="text-center text-sm mt-4">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Masuk
        </Link>
      </p>
      <p className="text-center text-sm mt-2">
        <Link href="/" className="text-gray-600 hover:underline">
          ← Kembali ke beranda
        </Link>
      </p>
    </div>
  );
}
