"use client"
import { builder, figma, figmaTwo, gradient, square } from "@/assets/svgs"
import CountdownTimer from "@/components/countdown-timer"
import FrameworkRotation from "@/components/framework-rotation"
import { type Framework, frameworks } from "@/utils/framework.utils"
import { cn } from "@/utils/tailwind.utils"
import { Poppins } from "next/font/google"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
})

const HomePage = () => {
  const [framework, setFramework] = useState<Framework>(frameworks[0])
  const [showBg, setShowBg] = useState(false)

  useEffect(() => {
    let currentIndex = 0

    const rotateFrameworks = () => {
      setFramework(frameworks[currentIndex])
      currentIndex = (currentIndex + 1) % frameworks.length
    }

    const intervalId = setInterval(rotateFrameworks, 2000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setShowBg(true)
  }, [])

  return (
    <main className="">
      <div className={cn(
        "fixed inset-0 transition-colors delay-100 duration-700 opacity-25",
        {
          "bg-purple-300": framework === "qwik",
          "bg-sky-300": framework === "safari",
          "bg-yellow-300": framework === "chrome",
          "bg-teal-300": framework === "tailwind",
          "bg-blue-300": framework === "react",
          "bg-green-300": framework === "vue",
          "bg-orange-300": framework === "svelte",
          "bg-red-300": framework === "mobile",
          "bg-neutral-300": framework === "desktop",
        },
      )}/>

      <Image src={gradient}
             alt="gradient background"
             width={1200}
             height={1200}
             role="presentation"
             className="fixed inset-0 h-screen w-screen object-cover"/>

      <div className="fixed inset-0 opacity-30"
           style={{
             backgroundImage: `url(${square.src})`,
             backgroundSize: "30px",
           }}/>

      <div className={cn(
        "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
        showBg ? "opacity-0" : "opacity-100",
      )}/>

      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1 className={`text-5xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}>
            <Image src={figma}
                   alt="Figma logo"
                   className="inline-block mr-8 -mt-2 h-auto"
                   width="50"/>
            to <FrameworkRotation framework={framework}/> will{" "}
            <span className={cn(
              "transition-colors duration-200",
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
            )}>never</span> be the same again
          </h1>

          <p className="mb-8">
            <span className="text-gray-300">
              Join us for an AI launch event by{" "}
            </span>
            <Image src={builder}
                   alt="Builder.io logo"
                   width="100"
                   className="inline-block ml-1 h-auto"/>
            {" + "}
            <Image src={figmaTwo}
                   alt="Figma logo"
                   width="55"
                   className="inline-block ml-1 h-auto"/>
          </p>

          <div className="mb-8">
            <button className={cn(
              "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
              {
                "bg-purple-300": framework === "qwik",
                "bg-sky-300": framework === "safari",
                "bg-yellow-300": framework === "chrome",
                "bg-teal-300": framework === "tailwind",
                "bg-blue-300": framework === "react",
                "bg-green-300": framework === "vue",
                "bg-orange-300": framework === "svelte",
                "bg-red-300": framework === "mobile",
                "bg-neutral-300": framework === "desktop",
              },
            )}>
              Claim Ticket
            </button>
          </div>

          <CountdownTimer framework={framework}/>
        </div>
      </div>
    </main>
  )
}

export default HomePage
