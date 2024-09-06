export default function ContractsPage() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col w-full border-x border-border/20 px-2.5 lg:px-10">
        <div className="w-full flex flex-col items-center border-x">
          <span className="text-lg my-1.5">TOKO</span>
          <div className="w-full h-[253px] bg-[url('/contracts.png')] flex items-center justify-start text-4xl sm:text-6xl text-center border-y text-[#F0F0F0] px-20 uppercase">
            <span>Services</span>
          </div>
        </div>

        <div className="flex flex-col items-start px-2.5 py-10 sm:p-20 pb-10 gap-12 border-x border-b">
          <h3 className="text-2xl lg:text-4xl text-accent-foreground text-center">
            We would be happy to answer your questions!
          </h3>
          <div className="flex flex-col items-start w-full text-2xl">
            <span>
              <span className="text-accent-foreground">Visit us: </span>
              Azatutyan street 14,8 0014 Yerevan, Armenia
            </span>
            <span className="text-accent-foreground mt-7">Get in touch:</span>
            <span>
              <span className="text-accent-foreground">Call us: </span>
              +374 44 777815
            </span>{' '}
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
