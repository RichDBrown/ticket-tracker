'use client'

import { useState, useEffect } from "react";

export default function CenteredHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-center sticky p-cp top-0 z-1 ${scrolled ? "bg-surface-container" : "bg-surface"}`}>
      <h1 className="text-tl">Tickets</h1>
    </header>
  );
}