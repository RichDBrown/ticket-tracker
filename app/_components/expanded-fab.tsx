import Link from "next/link";
import Image from "next/image";
import add from "@/public/add.svg";

export default function ExpandedFAB() {
  return (
    <Link href="/new-ticket" className="fixed lg:hidden bottom-cp right-cp md:bottom-md md:right-md z-1 flex items-center justify-center bg-primary-container py-1 pl-1 pr-1.25 rounded-lg shadow-elevation-3 cursor-pointer hover:bg-[#C6C7ED] hover:shadow-elevation-4 active:bg-primary-container active:shadow-elevation-3 transition-all">
      <Image src={add} alt="Create new ticket." className="w-0.75 h-0.75 mr-1" />
      <p className="text-ll font-med text-on-primary-container">New ticket</p>
    </Link>
  )
}