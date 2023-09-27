"use client"
import NumberRotation from "@/components/number-rotation"
import type { Framework } from "@/utils/framework.utils"
import { cn } from "@/utils/tailwind.utils"
import React, { FunctionComponent } from "react"

type Props = {
  label: string
  value: number
  framework: Framework
}
const TimeUnit: FunctionComponent<Props> = ({ label, value, framework }) => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl font-semibold">
        <NumberRotation number={value}/>
      </div>
      <div className={cn(
        "text-[8px] font-medium",
        {
          "text-purple-300": framework === "qwik",
          "text-sky-300": framework === "safari",
          "text-yellow-300": framework === "chrome",
          "text-teal-300": framework === "tailwind",
          "text-blue-300": framework === "react",
          "text-green-300": framework === "vue",
          "text-orange-300": framework === "svelte",
          "text-red-300": framework === "mobile",
          "text-neutral-300": framework === "desktop",
        },
      )}>
        {label}
      </div>
    </div>
  )
}

export default TimeUnit
