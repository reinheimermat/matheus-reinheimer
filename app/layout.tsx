import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/ui/theme-provider'

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
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-zinc-800 hover:scrollbar-thumb-zinc-700"
    >
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
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
        </ThemeProvider>
      </body>
    </html>
  )
}
