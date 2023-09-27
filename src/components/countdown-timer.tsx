import TimeUnit from "@/components/time-unit"
import { calculateTimeToEvent } from "@/utils/countdown.utils"
import type { Framework } from "@/utils/framework.utils"
import React, { FunctionComponent, useEffect, useState } from "react"

type Props = {
  framework: Framework
}
const CountdownTimer: FunctionComponent<Props> = ({ framework }) => {
  const [countDown, setCountDown] = useState(calculateTimeToEvent())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown(calculateTimeToEvent())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex gap-[10px] text-center">
      <TimeUnit framework={framework} value={countDown.days} label="DAYS"/>
      <TimeUnit framework={framework} value={countDown.hours} label="HOURS"/>
      <TimeUnit framework={framework} value={countDown.minutes} label="MINUTES"/>
      <TimeUnit framework={framework} value={countDown.seconds} label="SECONDS"/>
    </div>
  )
}

export default CountdownTimer
