'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import close from "@/public/close.svg";
import Link from "next/link";

export default function DialogHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`flex items-center justify-between sticky top-0 p-cp md:px-md z-1 ${scrolled ? "bg-surface-container" : "bg-surface"}`}>
      <div className="flex items-center">
        <Link href="/" replace className="cursor-pointer hover:bg-[#DFDFE4] active:bg-[#D2CFD6] p-0.5 rounded-full transition-colors">
          <Image src={close} alt="Go back to previous page." className="h-1 w-1" />
        </Link>
        <h1 className="text-tl ml-1">New ticket</h1>
      </div>
      <button type="submit" className="cursor-pointer hover:bg-[#E3DFEE] active:bg-[#D8D3E6] transition-colors p-0.75 rounded-full">
        <p className="text-ll text-primary font-med">Create</p>
      </button>
    </header>
  )
}