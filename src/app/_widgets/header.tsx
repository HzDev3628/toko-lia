'use client'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex flex-row  gap-24 items-center px-4 py-1.5 rounded-14 bg-[#ffffff]/50 absolute left-1/2 -translate-x-1/2 top-5">
      <Image
        src="/logo-toko.png"
        alt="Logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      {LINKS.map(({ title, href }) => (
        <Link
          key={href}
          href={href}
          className="text-lg text-popover-foreground font-medium"
        >
          {title}
        </Link>
      ))}
    </header>
  )
}

const LINKS = [
  {
    title: 'About us',
    href: '/about-us',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Contracts',
    href: '/contracts',
  },
]
