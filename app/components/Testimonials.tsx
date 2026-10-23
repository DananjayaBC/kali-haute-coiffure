import { PillBadge, Sparkle } from "./Decor";

const AVATAR = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80";
const BADGE_IMG = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=200&q=80";

const QUOTE = "Lorem ipsum dolor sit amet consectetur, ddfdfft jkl io Diam elementum ipsum sit lectus pellentesque vitae. Magna";

function QuoteMark() {
  return (
    <span className="font-display block text-[64px] font-bold leading-[0.6] text-white" aria-hidden="true">
      &rdquo;
    </span>
  );
}

function Author() {
  return (
    <div className="mt-auto flex items-end justify-between">
      <p className="text-[14px] font-medium leading-[1.3] text-gold">
        Ollie
        <br />
        Schneider
      </p>
      <span className="block h-14 w-14 overflow-hidden rounded-full">
        <img src={AVATAR} alt="Ollie Schneider" width={56} height={56} className="h-full w-full object-cover" />
      </span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_390px]">
        {/* Left column */}
        <div className="flex flex-col gap-7">
          <div className="relative rounded-[32px] bg-ink px-6 pb-10 pt-10 text-white sm:rounded-[48px] sm:px-10 lg:px-14 lg:pb-16 lg:pt-16">
            <Sparkle className="left-[58px] top-[340px] hidden lg:block" size={30} color="#fff" />
            <div className="flex items-start justify-between gap-6">
              <h2 className="font-display text-[36px] font-semibold leading-[1.1] sm:text-[48px] lg:text-[60px]">
                What Our
                <br />
                Client Say!
              </h2>
              <span className="hidden shrink-0 sm:block">
                <PillBadge img={BADGE_IMG} light className="mt-2 scale-[0.72] origin-top-right" />
              </span>
            </div>
            <p className="mt-8 max-w-[400px] text-[17px] font-medium leading-[1.55] text-white sm:mt-14 sm:ml-32">
              {QUOTE}
            </p>
          </div>

          <div className="relative flex flex-col rounded-[32px] bg-ink px-6 pb-24 pt-12 text-white sm:rounded-[48px] sm:px-10 lg:px-14 lg:pb-10">
            <QuoteMark />
            <p className="mt-8 max-w-[520px] text-[14px] font-medium leading-[1.8]">
              {QUOTE} lorum ipsum dolar site amet consecteture
            </p>
            <span className="absolute bottom-8 right-6 block h-16 w-16 overflow-hidden rounded-full sm:right-10 lg:right-14">
              <img src={AVATAR} alt="Ollie Schneider" width={64} height={64} className="h-full w-full object-cover" />
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-col rounded-[32px] bg-ink px-6 pb-9 pt-12 text-white sm:rounded-[48px] sm:px-10">
            <QuoteMark />
            <p className="mt-8 text-[14px] font-medium leading-[1.8]">{QUOTE}</p>
            <div className="mt-12">
              <Author />
            </div>
          </div>
          <div className="flex flex-1 flex-col rounded-[32px] bg-ink px-6 pb-9 pt-12 text-white sm:rounded-[48px] sm:px-10">
            <QuoteMark />
            <p className="mt-10 text-[17px] font-medium leading-[1.55]">{QUOTE}</p>
            <div className="mt-12">
              <Author />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
