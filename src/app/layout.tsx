import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetBrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'More popular than',
  description: 'Just another react app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={jetBrains.className}>{children}</body>
    </html>
  )
}
