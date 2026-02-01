"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[300px] overflow-hidden text-white">
      {/* Background */}
      <img
        src="/footerr.png"
        alt="Footer Chemkit"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto h-full px-10 flex items-start py-12 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full">
          {/* LEFT */}
          <div className="max-w-[600px]">
            <Image
              src="/logoputihchetkimremovebg.png"
              alt="Logo Chemkit"
              width={180}
              height={60}
              className="-mb-3.5"
            />

            <p className="text-sm leading-relaxed text-gray-200 text-justify">
              PT. Chemkit Multi Guna terus berinovasi dan meningkatkan kualitas
              produk untuk menjadi mitra terpercaya dalam penyediaan solusi
              rapid tes kit kimia yang handal dan akurat serta ramah lingkungan.
              Dengan semangat profesionalisme dan integritas, kami siap
              mendukung kemajuan layanan makanan yang aman dan bermutu menuju
              masyarakat sehat di Indonesia.
            </p>
          </div>

          {/* MIDDLE - KONTAK KAMI */}
          <div className="mt-12 md:mt-6 md:pl-10">
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>

            <ul className="text-sm space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-white/80">
                  <FaMapMarkerAlt size={14} />
                </span>
                <span>
                  Serua Indah VI, Serua Residence Blok A1-B1, Pamulang Timur,
                  <br />
                  Pamulang, Tangerang Selatan 15417
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-white/80">
                  <FaPhoneAlt size={14} />
                </span>
                <span>085282208799</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-white/80">
                  <FaEnvelope size={14} />
                </span>
                <span>chemkit@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* RIGHT - INFORMASI */}
          <div className="mt-12 md:mt-6 md:pl-10 group">
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 relative inline-block">
              Informasi
              {/* underline */}
              <span
                className="
        absolute
        left-0
        -bottom-1
        h-[1px]
        w-8
        bg-white
        transition-all
        duration-300
        group-hover:w-full
      "
              />
            </h3>

            {/* List */}
            <ul className="text-sm text-gray-200 space-y-2 mt-4">
              <li>
                <Link
                  href="/fasilitas-teknologi"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <span className="text-white/80">{">"}</span>
                  <span>Fasilitas & Teknologi</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/komitmen-mutu-kepatuhan"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <span className="text-white/80">{">"}</span>
                  <span>Komitmen Mutu & Kepatuhan</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/mitra-pelanggan"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <span className="text-white/80">{">"}</span>
                  <span>Mitra & Pelanggan</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
