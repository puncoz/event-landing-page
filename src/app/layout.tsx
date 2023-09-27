import "@/assets/globals.css"
import type { Metadata } from "next"
import React, { FunctionComponent, ReactNode } from "react"

export const metadata: Metadata = {
  title: "Builder.io Velocity",
  description: "AI Launch Event",
}

type Props = {
  children: ReactNode
}

const RootLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
    {children}
    </body>
    </html>
  )
}

export default RootLayout
