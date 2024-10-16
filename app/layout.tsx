import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Matheus Reinheimer',
  description: 'Matheus Reinheimer personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-950 antialiased`}
      >
        <div className="mb-4 flex p-4">
          <div className="w-full max-w-[304px]">
            <Sidebar />
          </div>
          <main className="container mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
