import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "DaaS App",
  description: "Created by harundev.com",
  generator: "harundev.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
