import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function VisiMisiPage() {
  return (
    <div className={`min-h-screen bg-white ${lora.className}`}>
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <main className="pt-[160px]">
        <div className="w-full">
          {/* ================= TEXT SECTION + BACKGROUND ================= */}
          <section className="relative w-full bg-[#EEEEFC] overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/backgroundhomee.png"
                alt="Background Visi Misi"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-10 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* VISI */}
                <div>
                  <h2 className="text-4xl font-medium mb-6 text-gray-900">
                    Visi
                  </h2>
                  <p className="text-gray-800 leading-[1.8] text-justify">
                    Menjadi perusahaan dalam negeri untuk industri reagen dan
                    rapid test kit yang berdaya saing global, inovatif, dan
                    berkontribusi nyata terhadap peningkatan kualitas kesehatan
                    masyarakat.
                  </p>
                </div>

                {/* MISI */}
                <div>
                  <h2 className="text-4xl font-medium mb-6 text-gray-900">
                    Misi
                  </h2>
                  <ul className="list-disc pl-5 space-y-3 text-gray-800 leading-[1.8] text-justify">
                    <li>
                      Mengembangkan dan memproduksi reagen serta rapid test kit
                      yang memenuhi standar mutu nasional dan internasional.
                    </li>
                    <li>
                      Menyediakan produk dengan akurasi tinggi, stabilitas baik,
                      serta kemudahan penggunaan dan ramah lingkungan.
                    </li>
                    <li>
                      Mendukung kemandirian industri reagen dan rapid test kit
                      dalam negeri.
                    </li>
                    <li>
                      Memberikan layanan teknis dan purna jual yang profesional
                      dan responsif.
                    </li>
                    <li>
                      Mendorong inovasi berkelanjutan melalui riset dan
                      kolaborasi.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
