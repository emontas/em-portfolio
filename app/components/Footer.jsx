"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"} className="text-2xl text-white font-semibold">
                <Image 
                    src="/images/logomontas.png"
                    alt="hero image"
                    className="w-auto h-auto"
                    width={70}
                    height={70}
                    />
                </Link>
        <p className="text-slate-600">&copy;2024 - Edgar Montas</p>
      </div>
    </footer>
  );
};

export default Footer;