"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    name: "Tes Kit Formalin",
    code: "C-K.F-001-50",
    image: "/produk1.jpeg",
    slides: [
      "/produk1.jpeg",
      "/spesifikasi1produk1.png",
      "/spesifikasi2produk1.png",
      "/spesifikasi3produk1.png",
    ],
  },
  {
    name: "Tes Kit Boraks",
    code: "C-K.B-002-50",
    image: "/produk2.jpeg",
    slides: [
      "/produk2.jpeg",
      "/spesifikasi1produk2.png",
      "/spesifikasi2produk2.png",
      "/spesifikasi3produk2.png",
    ],
  },
  {
    name: "Tes Kit Rhodamin-B",
    code: "C-K.RB-003-50",
    image: "/produk3.jpeg",
    slides: [
      "/produk3.jpeg",
      "/spesifikasi1produk3.png",
      "/spesifikasi2produk3.png",
      "/spesifikasi3produk3.png",
    ],
  },
  {
    name: "Tes Kit Metanil Yellow",
    code: "C-K.MY-004-75",
    image: "/produk4.jpeg",
    slides: [
      "/produk4.jpeg",
      "/spesifikasi1produk4.png",
      "/spesifikasi2produk4.png",
      "/spesifikasi3produk4.png",
    ],
  },
  {
    name: "Tes Kit Garam Beryodium",
    code: "C-K.I005.100",
    image: "/produk5fix.png",
    slides: [
      "/produk5fix.png",
      "/spesifikasi1produk5.png",
      "/spesifikasi2produk5.png",
      "/spesifikasi3produk5.png",
    ],
  },
  {
    name: "Tes Kit Nitrit NO2",
    code: "C-K.N006.50",
    image: "/produk6fix.png",
    slides: [
      "/produk6fix.png",
      "/spesifikasi1produk6.png",
      "/spesifikasi2produk6.png",
      "/spesifikasi3produk6.png",
    ],
  },
  {
    name: "Tes Kit Peroksida H2O2",
    code: "C-K.P007.50",
    image: "/produk7fix.png",
    slides: [
      "/produk7fix.png",
      "/spesifikasi1produk7.png",
      "/spesifikasi2produk7.png",
      "/spesifikasi3produk7.png",
    ],
  },
  {
    name: "Tes Kit Uji Ayam Tiren",
    code: "C-K.AT008.100",
    image: "/produk8.jpeg",
    slides: [
      "/produk8.jpeg",
      "/spesifikasi1produk8.png",
      "/spesifikasi2produk8.png",
      "/spesifikasi3produk8.png",
    ],
  },
];

export default function ProdukPage() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState<string[]>([]);

  const next = () => setSlide((s) => (s + 1) % activeSlides.length);

  const prev = () =>
    setSlide((s) => (s === 0 ? activeSlides.length - 1 : s - 1));
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, next, prev]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-[160px]">
        <section className="w-full bg-[#EEEEFC]">
          <div className="max-w-[1600px] mx-auto px-10 py-16">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-12">
              Daftar Produk
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {products.map((product, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveSlides(product.slides);
                    setSlide(0);
                    setOpen(true);
                  }}
                  className="
                    bg-[#f8f8f8]
                    rounded-2xl
                    p-6
                    text-center
                    shadow-sm
                    transition
                    cursor-pointer
                    hover:shadow-md
                  "
                >
                  <div className="relative w-full h-[180px] mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover bg-gray-200 rounded-lg"
                      priority
                    />
                  </div>

                  <h3 className="text-gray-800 font-medium leading-snug">
                    {product.name}
                  </h3>

                  {product.code && (
                    <p className="text-gray-600 text-sm mt-1">{product.code}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* MODAL PREVIEW */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-6 text-white text-4xl z-50"
          >
            ‹
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-6 text-white text-4xl z-50"
          >
            ›
          </button>

          {/* IMAGE */}
          <div className="relative w-[90vw] h-[85vh] z-40">
            <Image
              src={activeSlides[slide]}
              alt="Preview Produk"
              fill
              className="object-contain"
            />
          </div>

          {/* DOT */}
          <div className="absolute bottom-6 flex gap-2 z-50">
            {activeSlides.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === slide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
