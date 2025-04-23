'use client'

import { useEffect, useState } from "react";
import FAB from "./fab";

export default function NavigationRail() {
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
    <nav className={`hidden lg:block fixed top-0 left-0 z-2 h-full px-0.75 pt-2.75 transition-colors ${scrolled ? "bg-surface-container" : "bg-surface"}`}>
      <FAB />
    </nav>
  )
}