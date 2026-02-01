"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menu = [
    { name: "Tentang Kami", href: "/tentangkami" },
    { name: "Visi dan Misi", href: "/visi-misi" },
    { name: "Produk", href: "/produk" },
    { name: "Kontak Kami", href: "/kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="relative w-full h-[160px]">
        {/* LOGO KIRI → KE HOME */}
        <div className="absolute left-0 top-0 h-full flex items-center pl-6 z-50">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logochemkitremovebg.png"
              alt="CHEM-KIT"
              width={210}
              height={65}
              priority
            />
          </Link>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          {/* GARIS HITAM PANJANG (STANDBY) */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />

          <div className="flex space-x-16 relative">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
          relative pb-3
          text-gray-900 font-medium text-[17px]

          after:absolute after:left-0 after:bottom-0
          after:h-[2px]
          after:bg-red-500
          after:transition-all after:duration-300

          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* LOGO KANAN */}
        <div className="absolute right-0 top-0 w-[320px] pr-6">
          <div className="h-[160px] overflow-hidden flex justify-end items-start">
            <img
              src="/logoremovebg.jpeg"
              alt="CHEM-KIT Icon"
              className="object-contain scale-[2.3] origin-top -translate-y-24 translate-x-10 block"
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
            <Link
              key={item.name}
              href={item.href}
              className="block px-10 py-5 border-b"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
