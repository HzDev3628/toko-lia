'use client'
import { cn } from '@/lib/utils'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col w-full border-x border-border/20 px-2.5 lg:px-10">
        <div className="w-full flex flex-col items-center border-x">
          <Link
            href={'/'}
            className="text-lg my-1.5 hover:text-accent-foreground transition-colors duration-300"
          >
            TOKO
          </Link>
          <div className="w-full h-[353px] flex items-center justify-center text-4xl sm:text-6xl text-center border-y relative">
            <Image
              objectFit="cover"
              fill
              className="w-full h-[353px]"
              src={'/services.png'}
              alt="Image Hero"
            />
            <span className="absolute left-20 text-background">Services</span>
          </div>
        </div>

        <div className="flex flex-col items-center px-2.5 py-10 sm:p-20 pb-10 gap-12 border-x border-b">
          <h3 className="text-2xl lg:text-4xl text-accent-foreground text-center">
            Our services{' '}
          </h3>
          <span className="text-2xl font-normal">
            Our company has been engaged in commercial real estate for a long
            time and is ready to provide qualified assistance in commercial real
            estate issues and provide you with the most complete range of
            services and professional advice.
          </span>
        </div>
      </div>
      <DotLottieReact
        src="https://lottie.host/51c0a44b-b6e0-46bc-8ace-7e66737827d4/n41o5t6BVZ.json"
        loop
        autoplay
        className="max-w-[600px] w-full mx-auto mt-[100px] mb-14"
      />
      <div className="mx-auto max-w-[1024px] w-full flex flex-col gap-5 my-[100px]">
        {LIST.map((value, index) => (
          <article
            key={value}
            className={cn(
              'w-full rounded-20 p-[30px] text-xl sm:text-3xl',
              index % 2 !== 0
                ? 'bg-accent-foreground'
                : 'bg-black text-[#F0F0F0]',
            )}
          >
            {value}
          </article>
        ))}
      </div>
    </section>
  )
}

const LIST = [
  '01 Office Space Rentals',
  '02 Commercial Space Rentals',
  '03 Industrial Space Rentals',
  '04 Office Space Sales',
  '05 Commercial Space Sales',
  '06 Industrial Space Sales',
]
