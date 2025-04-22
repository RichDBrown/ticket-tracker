'use server'

import { db } from "./config"
import { addDoc, collection, doc, DocumentData, getDocs, query, updateDoc, where } from "firebase/firestore"

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

export async function getAllTickets() {
  const querySnapshot = await getDocs(collection(db, "tickets"))
  const tickets: Array<{ id: string; data: DocumentData }> = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data()
  }))
  return tickets
}

export async function getOpenTickets() {
  const q = query(collection(db, "tickets"), where("status", "==", "Open"))

  const querySnapshot = await getDocs(q)
  const tickets: Array<{ id: string; data: DocumentData }> = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data()
  }))
  return tickets
}

export async function getInProgressTickets() {
  const q = query(collection(db, "tickets"), where("status", "==", "In progress"))

  const querySnapshot = await getDocs(q)
  const tickets: Array<{ id: string; data: DocumentData }> = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data()
  }))
  return tickets
}

export async function getResolvedTickets() {
  const q = query(collection(db, "tickets"), where("status", "==", "Resolved"))

  const querySnapshot = await getDocs(q)
  const tickets: Array<{ id: string; data: DocumentData }> = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data()
  }))
  return tickets
}