import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex items-center min-h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Halaman tidak ditemukan.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">Silahkan kembali ke Beranda.</p>
			<a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-blue-600 dark:text-gray-50">Kembali ke Beranda</a>
		</div>
	</div>
</section>
  );
}
