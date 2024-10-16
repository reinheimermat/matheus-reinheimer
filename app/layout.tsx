import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'

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
        <div className="relative md:mb-4 md:flex md:p-4">
          <div className="hidden md:block md:w-full md:max-w-[calc(209px+16px)] lg:max-w-[calc(25%+24px)] xl:max-w-[304px]">
            <Sidebar />
          </div>
          <div className="md:hidden">
            <Header />
          </div>
          <main className="container mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
