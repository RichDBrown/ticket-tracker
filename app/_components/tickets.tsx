'use client'

import { use, useState } from "react";
import FilterChip from "./filter-chip";
import { DocumentData } from "firebase/firestore";
import Ticket from "./ticket";

type TicketProps = {
  allTickets: Promise<{ id: string; data: DocumentData }[]>
  openTickets: Promise<{ id: string; data: DocumentData }[]>
  inProgressTickets: Promise<{ id: string; data: DocumentData }[]>
  resolvedTickets: Promise<{ id: string; data: DocumentData }[]>
}

export default function Tickets({ allTickets, openTickets, inProgressTickets, resolvedTickets }: TicketProps) {
  const [selectedFilter, setSelectedFilter] = useState('')

  let tickets = use(allTickets)

  if (selectedFilter === '') {
    tickets = use(allTickets)
  } else if (selectedFilter === 'Open') {
    tickets = use(openTickets)
  } else if (selectedFilter === 'In progress') {
    tickets = use(inProgressTickets)
  } else if (selectedFilter === 'Resolved') {
    tickets = use(resolvedTickets)
  }

  return (
    <section className="flex flex-col">
      <div className="flex gap-x-0.5 mb-1">
        <FilterChip name="Open" isSelected={selectedFilter} setIsSelected={setSelectedFilter} />
        <FilterChip name="In progress" isSelected={selectedFilter} setIsSelected={setSelectedFilter} />
        <FilterChip name="Resolved" isSelected={selectedFilter} setIsSelected={setSelectedFilter} />
      </div>
      <div className="flex flex-col">
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
      </div>
    </section>
  )
}