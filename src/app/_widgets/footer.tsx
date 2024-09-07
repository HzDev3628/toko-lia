import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="container flex max-lg:gap-10 flex-col lg:flex-row items-start justify-between pt-10 px-2.5 sm:px-10 pb-20 border-l border-r border-border/20">
      <Link href={'/'} className="w-max flex flex-col items-start gap-2.5">
        <span>(Let's connect)</span>
        <span className="text-xl sm:text-5xl font-medium">+ 374 44 777815</span>
        <span className="text-xl sm:text-5xl font-medium">office@toko.am</span>
      </Link>
      <div className="flex max-sm:flex-col gap-5 sm:gap-10">
        {LINKS.map(({ title, href }) => (
          <Link
            href={href}
            key={href}
            className="text-sm sm:text-lg font-medium"
          >
            {title}
          </Link>
        ))}
      </div>
    </footer>
  )
}

const LINKS = [
  {
    title: 'Home',
    href: '/',
  },
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
