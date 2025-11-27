import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dietify – Your Personal Online Dietician",
  description:
    "Personalized diet plans, expert nutritional guidance, and disease-specific programs crafted just for you.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/fav.png", type: "image/png" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/fav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
