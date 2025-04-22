import Ticket from "./_components/ticket";
import { db } from "./_lib/_firebase/config";
import { collection, getDocs } from "firebase/firestore";
import CenteredHeader from "./_components/centered-header";
import Link from "next/link";
import Image from "next/image";
import add from "@/public/add.svg";
import Tickets from "./_components/tickets";
import { getAllTickets, getInProgressTickets, getOpenTickets, getResolvedTickets } from "./_lib/_firebase/actions";
import { Suspense } from "react";

export default async function TicketsPage() {
  const allTickets = getAllTickets()
  const openTickets = getOpenTickets()
  const inProgressTickets = getInProgressTickets()
  const resolvedTickets = getResolvedTickets()

  return (
    <div className="flex flex-col">
      <CenteredHeader />
      <main className="flex flex-col items-center px-cp">
        <Suspense>
          <Tickets allTickets={allTickets} openTickets={openTickets} inProgressTickets={inProgressTickets} resolvedTickets={resolvedTickets} />
        </Suspense>
      </main>
      <Link href="/new-ticket" className="fixed bottom-1 right-1 z-1 flex items-center justify-center bg-primary-container py-1 pl-1 pr-1.25 rounded-lg shadow-elevation-3 cursor-pointer hover:bg-[#C6C7ED] hover:shadow-elevation-4 active:bg-primary-container active:shadow-elevation-3 transition-all">
        <Image src={add} alt="New ticket" className="w-0.75 h-0.75 mr-1" />
        <p className="text-ll font-med text-on-primary-container">New ticket</p>
      </Link>
    </div>
  )
}