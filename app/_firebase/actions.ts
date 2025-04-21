'use server'

import { db } from "./config"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"

export async function updateStatus(docId: string, status: string) {
  const ticketRef = doc(db, "tickets", docId)
  await updateDoc(ticketRef, {
    status: status,
  })
}

export async function createTicket(formData: FormData) {
  await addDoc(collection(db, "tickets"), {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    urgency: formData.get("urgency"),
    status: "Open",
    date: new Date().toLocaleString()
  })
}