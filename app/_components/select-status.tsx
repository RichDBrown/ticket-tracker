'use client'

import { useState } from "react"
import { updateStatus } from "../_lib/_firebase/actions"

type SelectStatusProps = {
  docId: string,
  status: string
}

export default function SelectStatus({ docId, status }: SelectStatusProps) {
  const [selectedStatus, setSelectedStatus] = useState(status)

  return (
    <label className="text-bm text-on-surface-variant">
      Status:
      <select value={selectedStatus} onChange={e => {
        setSelectedStatus(e.target.value)
        updateStatus(docId, e.target.value)
      }} className="text-on-surface border border-outline rounded-xs p-0.25 ml-0.5 cursor-pointer focus:outline-primary">
        <option>Open</option>
        <option>In progress</option>
        <option>Resolved</option>
      </select>
    </label>
  )
}