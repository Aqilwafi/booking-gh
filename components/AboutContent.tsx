// components/AboutContent.tsx
export default function AboutContent() {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-4 text-black">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
            <h1 className="text-4xl font-bold text-gray-800">About Us - Guest House Yayasan Harmoni</h1>

            <p className="text-gray-700 leading-relaxed">
                Selamat datang di <strong>Guest House Yayasan Harmoni</strong>, sebuah hunian singgah yang dirancang untuk memberikan kenyamanan, ketenangan, dan pelayanan terbaik bagi setiap tamu.
                Dikelola langsung oleh Yayasan Harmoni, fasilitas ini dibangun sebagai bentuk dukungan bagi masyarakat yang membutuhkan tempat inap yang aman, bersih, dan terjangkau.
            </p>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Visi Kami</h2>
                <p className="text-gray-700 leading-relaxed">
                    Menjadi hunian singgah terbaik yang mengutamakan kenyamanan, keramahan, serta kebermanfaatan bagi masyarakat yang membutuhkan fasilitas akomodasi berkualitas.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Misi Kami</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Menyediakan fasilitas penginapan yang bersih, nyaman, dan terjaga.</li>
                    <li>Membangun lingkungan yang aman dan ramah bagi tamu.</li>
                    <li>Mendukung program sosial yayasan dengan menyediakan layanan berbasis kemasyarakatan.</li>
                    <li>Memberikan pengalaman menginap yang menyenangkan melalui pelayanan profesional dan penuh empati.</li>
                </ul>
            </section>


            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Fasilitas Guest House</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Kamar bersih dan ber-AC</li>
                    <li>Kamar mandi dalam</li>
                    <li>Akses Wi-Fi gratis</li>
                    <li>Ruang tamu bersama</li>
                    <li>Area parkir aman</li>
                    <li>Pelayanan ramah dan responsif</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Mengapa Memilih Kami?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Lingkungan tenang dan nyaman</li>
                    <li>Harga terjangkau</li>
                    <li>Lokasi strategis</li>
                    <li>Dikelola yayasan dengan profesionalitas dan kepedulian</li>
                    <li>Cocok untuk tamu umum, keluarga, peserta kegiatan, maupun tamu internal yayasan</li>
                </ul>
            </section>

            <section className="space-y-4 pb-10">
                <h2 className="text-2xl font-semibold text-gray-800">Tentang Yayasan Harmoni</h2>
                <p className="text-gray-700 leading-relaxed">
                    Yayasan Harmoni adalah organisasi sosial yang berfokus pada pengembangan pendidikan, pemberdayaan masyarakat, dan kegiatan sosial lainnya. Guest House ini merupakan bagian dari inisiatif yayasan untuk menyediakan layanan bernilai sosial sekaligus mendukung berbagai program kemanusiaan.
                </p>
            </section>
        </div>
        </section>
    );
}