export default function AboutUs() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col w-full border-x border-border/20 px-2.5 lg:px-10">
        <div className="w-full flex flex-col items-center border-x">
          <span className="text-lg my-1.5">TOKO</span>
          <div className="w-full h-[253px] bg-[url('/about-us.png')] flex items-center justify-start text-4xl sm:text-6xl text-center border-y text-background px-20">
            <span>ABOUT US</span>
          </div>
        </div>

        <div className="flex flex-col items-center px-2.5 py-10 sm:p-20 pb-10 gap-12 border-x border-b">
          <h3 className="text-2xl lg:text-4xl text-accent-foreground text-center">
            The emergence of the TOKO company
          </h3>
          <span className="text-2xl font-normal">
            The group of companies, specializing in commercial real estate in
            the Republic of Armenia, was established in 2012. The company's main
            asset was a large office building in the Arabkir district of the
            city of Yerevan, Republic of Armenia. The operation of the building
            and renting out office spaces was the group's main activity. In
            2023, there was an operational necessity to separate one of the
            companies into the main structure of the group. Thus, the company
            LLC "TOKO" was created. The company quickly grew and cemented itself
            as the new golden standard in commercial construction. Today we
            continue to build on that legacy and strive for excellence at
            everything we do.
          </span>
        </div>
        <div className="flex flex-col items-center px-5 py-10 sm:p-20 pb-10 gap-12 border-x border-b">
          <h3 className="text-2xl lg:text-4xl text-accent-foreground text-center">
            Why TOKO?
          </h3>
          <span className="text-2xl font-normal">
            The company's name was coined in such a way that it was written and
            read in Latin letters in the main languages of the world in the same
            way and simply . That's how the name «TOKO» appeared, and only later
            it turned out that it was also the well-known name of the rare TOKO
            bird, the image of which formed the basis of the company's logo.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1024px] w-full flex flex-col gap-5 my-[100px]">
        <div className="w-full flex flex-col items-start p-[30px] rounded-20 bg-accent-foreground text-white">
          <h3 className="text-xl">John Gould</h3>
          <span className="font-light">
            A member of the Linnean Society of London and vice-president of the
            Zoological Society, 19th century <br /> <br />{' '}
            <span className="font-inter">
              «A toucan (toko) is a symbol of good luck if it looks with its
              left eye. Toucan represents communication and talent. The bright
              appearance and large beak symbolize a strong desire to be seen and
              heard.»
            </span>
          </span>
        </div>
        <div className="w-full flex flex-col items-start p-[30px] rounded-20 bg-black text-white">
          The company is not engaged in trading operations (export/import) and
          focuses exclusively on its core business.
        </div>
      </div>
    </section>
  )
}
