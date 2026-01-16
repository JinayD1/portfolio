import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jinay Desai - Portfolio',
  description: 'First-Year computer science student at UWaterloo',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

