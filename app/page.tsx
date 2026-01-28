"use client";

import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Visi dan Misi", href: "#visi" },
    { name: "Produk & Layanan", href: "#produk" },
    { name: "Kontak Kami", href: "#kontak" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="relative w-full h-[160px]">
          {/* LOGO KIRI */}
          <div className="absolute left-0 top-0 h-full flex items-center pl-6 z-50">
            <Image
              src="/logochemkitremovebg.png"
              alt="CHEM-KIT"
              width={210}
              height={65}
              priority
            />
          </div>

          <nav
            className="hidden lg:flex absolute left-1/2 top-1/2 
  -translate-x-1/2 -translate-y-1/2 z-50"
          >
            {/* GARIS HITAM PANJANG (STANDBY) */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />

            {/* MENU ITEM */}
            <div className="flex space-x-16 relative">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
          relative pb-3
          text-gray-900 font-medium text-[17px]
          after:absolute after:left-0 after:bottom-0
          after:h-[2px] after:w-0 after:bg-red-500
          after:transition-all after:duration-300
          hover:after:w-full
        "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* LOGO KANAN */}
          <div className="absolute right-0 top-0 w-[320px] pr-6">
            <div className="h-[160px] overflow-hidden flex justify-end items-start">
              <Image
                src="/logoremovebg.jpeg"
                alt="CHEM-KIT Icon"
                width={320}
                height={320}
                className="object-contain scale-[2.3] origin-top -translate-y-24 translate-x-10"
                priority
              />
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-10 py-5 border-b"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ================= BANNER ================= */}
      <section className="pt-[160px] relative overflow-hidden">
        <div className="relative w-full h-[500px]">
          <Image
            src="/bannerchemkit.png"
            alt="Banner Chemkit"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main>
        <section
          id="tentang"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-gray-300">
            [ Tentang Kami Section ]
          </h2>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative w-full h-[300px] overflow-hidden text-white">
        {/* Background Image */}
        <Image
          src="/footer.png"
          alt="Footer Chemkit"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto h-full px-10 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {/* LEFT */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Penutup</h3>
              <p className="text-sm leading-relaxed text-gray-200">
                PT. Chemkit Multi Guna terus berinovasi dan meningkatkan
                kualitas produk untuk menjadi mitra terpercaya dalam penyediaan
                solusi rapid tes kit kimia yang handal dan akurat serta ramah
                lingkungan.
                <br />
                <br />
                Dengan semangat profesionalisme dan integritas, kami siap
                mendukung kemajuan layanan makanan yang aman dan bermutu menuju
                masyarakat sehat di Indonesia.
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
              <ul className="text-sm space-y-3 text-gray-200">
                <li>
                  <strong>Alamat :</strong>
                  <br />
                  Serua Indah VI, Serua Residence Blok A1-B1, Pamulang Timur,
                  Pamulang
                  <br />
                  Tangerang Selatan 15417
                </li>
                <li>
                  <strong>Telepon :</strong> 085282208799
                </li>
                <li>
                  <strong>Email :</strong> chemkit@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
