import CenteredHeader from "./_components/centered-header";
import Tickets from "./_components/tickets";
import { getAllTickets, getInProgressTickets, getOpenTickets, getResolvedTickets } from "./_lib/_firebase/actions";
import { Suspense } from "react";
import NavigationRail from "./_components/navigtion-rail";
import ExpandedFAB from "./_components/expanded-fab";

export default async function TicketsPage() {
  const allTickets = getAllTickets()
  const openTickets = getOpenTickets()
  const inProgressTickets = getInProgressTickets()
  const resolvedTickets = getResolvedTickets()

  return (
    <main className="flex flex-col">
      <CenteredHeader />
      <NavigationRail />
      <Suspense>
        <Tickets allTickets={allTickets} openTickets={openTickets} inProgressTickets={inProgressTickets} resolvedTickets={resolvedTickets} />
      </Suspense>
      <ExpandedFAB />
    </main>
  )
}