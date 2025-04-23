import Image from "next/image";
import add from "@/public/add.svg";
import Link from "next/link";

export default function FAB() {
  return (
    <Link href={'/new-ticket'} className="bg-primary-container flex p-1.25 rounded-lg"><Image src={add} alt="New ticket" className="h-0.75 w-0.75" /></Link>
  )
}