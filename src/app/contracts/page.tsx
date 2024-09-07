'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContractsPage() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col w-full border-x border-border/20 px-2.5 lg:px-10">
        <div className="w-full flex flex-col items-center border-x">
          <Link href={'/'} className="text-lg my-1.5">
            TOKO
          </Link>
          <div className="w-full h-[130px] sm:h-[200px] lg:h-[353px] flex items-center justify-center text-4xl sm:text-6xl text-center border-y relative">
            <Image
              width={1440}
              height={353}
              className="w-full h-[130px] sm:h-[200px] lg:h-[353px]"
              src={'/contracts.png'}
              alt="Image Hero"
            />
            <span className="absolute left-20 text-background">CONTACTS</span>
          </div>
        </div>

        <div className="flex flex-col items-start px-2.5 py-10 sm:p-20 pb-10 gap-12 border-x border-b">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-2xl lg:text-4xl text-accent-foreground text-center">
              We would be happy to answer your questions!
            </h3>
            <DotLottieReact
              src="https://lottie.host/2a042050-d6a0-4838-aa31-649390c9dd0b/m0Sp4IkG88.json"
              loop
              autoplay
              className="max-w-[150px] w-full"
            />
          </div>
          <div className="flex flex-col items-start w-full text-2xl">
            <span>
              <span className="text-accent-foreground">Visit us: </span>
              Azatutyan street 14,8 0014 Yerevan, Armenia
            </span>
            <span className="text-accent-foreground mt-7">Get in touch:</span>
            <span>
              <span className="text-accent-foreground">Call us: </span>
              +374 44 777815
            </span>
            <span>
              <span className="text-accent-foreground">Write to us: </span>
              office@toko.am
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
