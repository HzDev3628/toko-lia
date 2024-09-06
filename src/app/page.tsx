import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col w-full border-x border-border/20">
      <div className="flex flex-col px-2.5 sm:px-10 gap-10">
        <div className="w-full flex flex-col items-center border-x">
          <span className="text-lg my-1.5">TOKO</span>
          <div className="w-full h-[353px] bg-[url('/section-1.avif')] flex items-center justify-center text-4xl sm:text-6xl text-center border-y">
            <span>
              We will help you create a successful <br /> path in commercial
              real estate
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start px-5 sm:px-20 pb-10 gap-10">
          <div className="flex items-center w-full justify-between">
            <Link
              href={'/'}
              className="text-3xl sm:text-6xl hover:text-accent-foreground transition-colors duration-300 w-[250px] sm:w-[350px]"
            >
              About us
            </Link>
            <div className="w-full h-[3px] bg-black" />
          </div>
          <span className="text-2xl font-normal max-sm:text-xs">
            In 2023, the company decided to allocate one of its companies to the
            parent structure of the group. The main activity of this company is
            commercial real estate in the Republic of Armenia. This means that
            she will play an important role in managing the group and
            coordinating the activities of other companies. The company, which
            started its activity in 2012, has reached such a level of
            development that it requires the creation of a head office for more
            effective management and development.
          </span>
        </div>
      </div>
      <div className="w-full h-px bg-border/20" />
      <div className="flex flex-col px-8 sm:px-[120px] py-12 gap-10 border-b border-border/20">
        <div className="flex items-center w-full justify-between">
          <Link
            href={'/'}
            className="text-3xl sm:text-6xl hover:text-accent-foreground transition-colors duration-300 w-[300px] sm:w-[480px]"
          >
            Consultations
          </Link>
          <div className="w-full h-[3px] bg-black" />
        </div>
        <span className="text-2xl font-normal max-sm:text-xs">
          Our company provides you with specialized consulting. We will answer
          all your questions, support and accompany you to your goal. We are
          ready to provide you with personalized and high-quality service to
          help you achieve success. Our consultants have extensive experience
          and knowledge in various fields, which allows us to offer you the best
          solutions and strategies. We are ready to be with you at every stage
          of your journey to success.
        </span>
        <div className="flex flex-col items-start text-xs sm:text-2xl font-normal">
          {CONSULTATIONS.map((value, index) => (
            <div key={index}>
              <span className="text-accent-foreground font-medium">
                0{index + 1}{' '}
              </span>
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CONSULTATIONS = [
  'For real estate transactions',
  'On investment issues',
  'Property management and other services',
]
