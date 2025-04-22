'use client'

import { Dispatch, SetStateAction } from "react"

type FilterChipProps = {
  name: string
  isSelected: string
  setIsSelected: Dispatch<SetStateAction<string>>
}

export default function FilterChip({ name, isSelected, setIsSelected }: FilterChipProps) {
  const setSelected = () => {
    if (isSelected === name) {
      setIsSelected('')
    } else {
      setIsSelected(name)
    }
    console.log('Selected filter:', name)
  }

  return (
    <button onClick={setSelected} className={`rounded-sm px-1 h-2.5 flex items-center text-ll font-med cursor-pointer ${isSelected === name ? 'text-on-primary-container bg-primary-container' : 'border border-outline-variant hover:bg-[#DFDDE4] active:bg-[#D2D0D7]'}`}>{name}</button>
  )
}