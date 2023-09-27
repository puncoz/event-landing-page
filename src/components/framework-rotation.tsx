import * as Svgs from "@/assets/svgs"
import { type Framework } from "@/utils/framework.utils"
import { cn } from "@/utils/tailwind.utils"
import Image from "next/image"
import React, { FunctionComponent } from "react"

type Props = {
  framework: Framework
}
const FrameworkRotation: FunctionComponent<Props> = ({ framework }) => {
  return (
    <div className="w-[80px] h-[80px] -mt-2 align-middle inline-flex relative">
      {Object.entries(Svgs).map(([name, src], index) => (
        <Image key={name}
               src={src}
               alt={name}
               width="80"
               height="80"
               className={cn(
                 "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300",
                 framework === name
                   ? "opacity-100 transform-none"
                   : index > Object.keys(Svgs).indexOf(framework)
                     ? "opacity-0 -translate-y-2"
                     : "opacity-0 translate-y-2",
               )}/>
      ))}
    </div>
  )
}

export default FrameworkRotation
