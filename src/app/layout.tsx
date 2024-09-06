import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/app/_widgets'

const nippo = localFont({
  src: [
    {
      path: './fonts/Nippo-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Nippo-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Nippo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Nippo-Medium.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nippo',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nippo.className} font-normal antialiased relative`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
