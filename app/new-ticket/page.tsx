import { redirect } from "next/navigation";
import { createTicket } from "../_lib/_firebase/actions";
import DialogHeader from "./_components/dialog-header";

async function submitForm(formData: FormData) {
  'use server'
  await createTicket(formData)
  redirect('/')
}

export default function NewTicketPage() {
  return (
    <main>
      <form action={submitForm}>
        <DialogHeader />
        <section className="flex flex-col p-cp">
          <label className="w-full text-bs text-on-surface-variant">
            Issue title*
            <input name="title" required className="block w-full text-bl text-on-surface my-0.25 border border-outline rounded-xs p-1 focus:outline-primary" />
          </label>
          <p className="text-bs text-on-surface-variant ml-1 mb-1">*required</p>
          <label className="w-full text-bs text-on-surface-variant">
            Description
            <textarea name="description" rows={3} className="block w-full text-bl text-on-surface my-0.25 border border-outline rounded-xs p-1 focus:outline-primary" />
          </label>
          <div className="h-1" />
          <label className="w-full text-bs text-on-surface-variant">
            Category
            <select name="category" className="block w-full text-bl text-on-surface my-0.25 border border-outline rounded-xs p-1 focus:outline-primary">
              <option>Hardware</option>
              <option>Software</option>
              <option>Network</option>
              <option>Other</option>
            </select>
          </label>
          <div className="h-1" />
          <label className="w-full text-bs text-on-surface-variant">
            Urgency
            <select name="urgency" className="block w-full text-bl text-on-surface my-0.25 border border-outline rounded-xs p-1 focus:outline-primary">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>
        </section>
      </form>
    </main>
  )
}