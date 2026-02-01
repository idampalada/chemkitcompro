import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FasilitasTeknologiPage() {
  const fasilitas = [
    {
      title: "Kantor",
      image: "/fasilitas1.png",
      icon: "/iconfas1.png",
    },
    {
      title: "Fasilitas produksi reagen dan rapid test kit",
      image: "/fasilitas2.png",
      icon: "/iconfas2.png",
    },
    {
      title: "Laboratorium Quality Control (QC)",
      image: "/fasilitas3.png",
      icon: "/iconfas3.png",
    },
    {
      title: "Sistem penyimpanan dan distribusi",
      image: "/fasilitas4.png",
      icon: "/iconfas4.png",
    },
  ];

  return (
    <div className={`min-h-screen bg-white ${lora.className}`}>
      <Navbar />

      <main className="pt-[160px]">
        <section className="w-full bg-[#EEEEFC]">
          <div className="max-w-[1600px] mx-auto px-10 py-20">
            {/* Title */}
            <h1 className="text-center text-3xl font-semibold text-gray-900 mb-20">
              Fasilitas & Teknologi
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {fasilitas.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-[28px] overflow-hidden shadow-lg"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-[360px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/70" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="mb-4"
                    />

                    <p className="text-gray-800 font-medium leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
