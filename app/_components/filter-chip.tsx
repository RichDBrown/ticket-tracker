'use client'

import Image from "next/image"
import check from "@/public/check.svg"
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
    <button onClick={setSelected} className={`rounded-sm h-2.5 flex items-center text-lm md:text-ll font-med cursor-pointer transition-all ${isSelected === name ? 'pl-0.5 pr-1 text-on-primary-container bg-primary-container hover:shadow-elevation-1' : 'px-1 border border-outline-variant hover:bg-[#DFDDE4] active:bg-[#D2D0D7]'}`}>
      {isSelected === name && <Image src={check} alt="Selected" className="mr-0.5" />}
      <p>{name}</p>
    </button>
  )
}