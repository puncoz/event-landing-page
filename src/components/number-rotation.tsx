"use client"
import { cn } from "@/utils/tailwind.utils"
import React, { FunctionComponent } from "react"

type Props = {
  number: number
}
const NumberRotation: FunctionComponent<Props> = ({ number }) => {
  const numbers = Array.from({ length: 60 }, (_, i) => i)

  return (
    <div className="relative h-10 w-10">
      {numbers.map((num) => (
        <div key={num}
             className={cn(
               "w-full h-full absolute transition-all duration-200",
               number === num
                 ? "opacity-100 transform-none"
                 : number > num
                   ? "opacity-0 -translate-y-2"
                   : "opacity-0 translate-y-2",
             )}>
          {num.toString().padStart(2, "0")}
        </div>
      ))}
    </div>
  )
}

export default NumberRotation
