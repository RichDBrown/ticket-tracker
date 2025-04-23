import SelectStatus from "./select-status"

type TicketProps = {
  docId: string
  title: string
  description: string
  category: string
  urgency: string
  status: string
  date: string
}

export default function Ticket({docId, title, description, category, urgency, status, date}: TicketProps) {
  return (
    <div className="p-cp border border-outline-variant rounded-md w-full mb-0.5">
      <h2 className="text-tm font-med mb-0.25">{title}</h2>
      <p className="text-bm mb-2">{description}</p>
      <p className="text-bm text-on-surface-variant">Category: <span className="text-ts font-med text-on-surface">{category}</span></p>
      <p className="text-bm text-on-surface-variant">Urgency: <span className="text-ts font-med text-on-surface">{urgency}</span></p>
      <SelectStatus docId={docId} status={status}/>
      <p className="text-bs text-on-surface-variant">{`Created: ${date}`}</p>
    </div>
  )
}