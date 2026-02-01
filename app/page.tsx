import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= BANNER ================= */}
      <section className="pt-[160px] overflow-hidden">
        <img
          src="/bannerchemkit.png"
          alt="Banner Chemkit"
          className="w-full h-[400px] object-cover block"
        />
      </section>

      {/* ================= SECTION CONTENT ================= */}
      <main>
        <section className="relative w-full py-28 overflow-hidden -mb-12">
          {/* 🔥 BACKGROUND IMAGE (FIX) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/backgroundhome.png"
              alt="Background Home"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ================= PRODUK UTAMA ================= */}
          <div className="relative z-10 w-full mb-40">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block z-20">
              <div className="relative w-[360px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/rapidd.png"
                  alt="Rapid Test Kit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-10">
              <div
                className="max-w-[720px] bg-white/90 backdrop-blur rounded-2xl p-10 ml-[420px]
  shadow-[0_20px_50px_rgba(0,0,0,0.12)]
  border border-white/40
"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Produk Utama
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>
                    Rapid Test Kit (Tes Kit: Formalin, Boraks, Rhodamin B,
                    Metanil Yellow, Garam Beryodium, Nitrit, Peroksida dan Kit
                    Uji Ayam Tiren)
                  </li>
                  <li>Reagen Kimia & Biokimia Laboratorium</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= LAYANAN ================= */}
          <div className="relative z-10 w-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block z-20">
              <div className="relative w-[360px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/layanan.jpeg"
                  alt="Layanan Chemkit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-10">
              <div
                className="max-w-[720px] bg-white/90 backdrop-blur rounded-2xl p-10 ml-[300px] -mt-[40px]
  shadow-[0_20px_50px_rgba(0,0,0,0.12)]
  border border-white/40
"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Layanan
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Pengembangan produk sesuai kebutuhan pelanggan</li>
                  <li>Konsultasi teknis laboratorium</li>
                  <li>Pelatihan penggunaan produk</li>
                  <li>Dukungan validasi dan aplikasi metode</li>
                  <li>Bimtek Pengujian & Kalibrasi Peralatan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ================= SECTION KEUNGGULAN KAMI ================= */}
      <section className="relative w-full h-[550px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/backgroundhomee.png"
            alt="Background Keunggulan Kami"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-10">
          {/* JUDUL */}
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Keunggulan Kami
          </h3>

          {/* ================= BARIS ATAS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Penerapan Standar Mutu Ketat
              </h4>
              <Image
                src="/checklist.png"
                alt="Checklist Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                Diproduksi dengan sistem manajemen mutu yang terkontrol
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Tim Profesional
              </h4>
              <Image
                src="/group-chat.png"
                alt="Tim Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                Didukung oleh tenaga ahli kimia dan analis laboratorium senior
                yang berpengalaman
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Inovatif & Adaptif
              </h4>
              <Image
                src="/creativity.png"
                alt="Inovasi Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                Responsif terhadap kebutuhan pasar dan perkembangan teknologi
                serta mendukung program Green Laboratorium
              </p>
            </div>
          </div>

          {/* ================= BARIS BAWAH ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-28 max-w-[900px] mx-auto">
            {/* ITEM 4 */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Produk Dalam Negeri
              </h4>
              <Image
                src="/box.png"
                alt="Produk Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                Mendukung TKDN dan kemandirian reagensia kit nasional
              </p>
            </div>

            {/* ITEM 5 */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Distribusi Pelanggan yang Luas
              </h4>
              <Image
                src="/global.png"
                alt="Distribusi Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                Jaringan distribusi yang menjangkau berbagai wilayah di
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
