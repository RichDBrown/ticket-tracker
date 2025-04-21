import Ticket from "./_ui/ticket";
import { db } from "./_firebase/config";
import { collection, getDocs } from "firebase/firestore";
import CenteredHeader from "./_ui/centered-header";
import Link from "next/link";
import Image from "next/image";
import add from "@/public/add.svg";

export default async function TicketsPage() {
  const querySnapshot = await getDocs(collection(db, "tickets"))

  const tickets = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }))

  return (
    <div className="flex flex-col">
      <CenteredHeader />
      <main className="flex flex-col items-center p-cp">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            docId={ticket.id}
            title={ticket.data.title}
            description={ticket.data.description}
            category={ticket.data.category}
            urgency={ticket.data.urgency}
            status={ticket.data.status}
            date={ticket.data.date}
          />
        ))}
      </main>
      <Link href="/new-ticket" className="fixed bottom-1 right-1 z-1 flex items-center justify-center bg-primary-container py-1 pl-1 pr-1.25 rounded-lg shadow-elevation-3 cursor-pointer hover:bg-[#C6C7ED] hover:shadow-elevation-4 active:bg-primary-container active:shadow-elevation-3 transition-all">
        <Image src={add} alt="New ticket" className="w-0.75 h-0.75 mr-1" />
        <p className="text-ll font-med text-on-primary-container">New ticket</p>
      </Link>
    </div>
  )
}