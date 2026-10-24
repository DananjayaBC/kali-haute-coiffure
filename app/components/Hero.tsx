import { ArrowIcon, CircleText, PillBadge, Sparkle, Squiggle, Star } from "./Decor";

const HERO_IMG = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&q=80";
const AVATAR_IMG = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80";
const BADGE_IMG = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-[1200px] px-6 pt-6 pb-14 lg:pt-10 lg:pb-20">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_440px]">
        {/* Left: heading */}
        <div className="relative pt-8 lg:pt-16">
          <Sparkle className="left-10 top-12 hidden lg:block" size={30} />
          <Sparkle className="left-[610px] top-[110px] hidden lg:block" size={34} />
          <Star className="left-[570px] top-[520px] hidden lg:block" size={32} />
          <Squiggle className="left-[450px] top-[285px] hidden lg:block" />

          <h1 className="font-display text-[50px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[72px] md:text-[88px] lg:text-[100px]">
            <span className="flex items-center gap-4 sm:gap-6">
              Salon
              <PillBadge img={BADGE_IMG} />
            </span>
            <span className="block">Apsa</span>
          </h1>

          <div className="mt-8 flex items-start gap-5 sm:gap-6 lg:mt-10">
            <div className="h-[132px] w-[92px] shrink-0 overflow-hidden rounded-full">
              <img
                src={AVATAR_IMG}
                alt=""
                width={92}
                height={132}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="max-w-[300px] pt-4 text-[14px] font-medium leading-[1.55] text-ink-soft">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has b
            </p>
          </div>
        </div>

        {/* Right: arch photo + rotating badge */}
        <div className="relative flex flex-col items-center">
          <Sparkle className="right-0 top-6 hidden lg:block" size={30} />
          <div className="relative w-full max-w-[390px] lg:mt-16">
            <div className="aspect-[39/59] w-full overflow-hidden rounded-full">
              <img
                src={HERO_IMG}
                alt="Salon Apsa"
                width={390}
                height={590}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-0 top-[280px] sm:top-[380px] lg:left-[-55px] lg:top-[336px]">
              <CircleText id="hero" text="CONTACT ME • SALON APSA • " size={150}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink">
                  <ArrowIcon />
                </span>
              </CircleText>
            </div>
          </div>

          <h2 className="font-display mt-9 text-center text-[20px] font-semibold uppercase tracking-wide text-ink sm:text-[24px]">
            Officially Open Now!
          </h2>
          <p className="mt-2 flex items-center gap-3 text-center text-[12px] tracking-wide text-ink-soft">
            <span className="h-[2px] w-9 shrink-0 bg-ink" />
            2346 LAKESHORE RD W, OAKVILLE
            <span className="h-[2px] w-9 shrink-0 bg-ink" />
          </p>
          <a
            href="tel:+19055825111"
            className="mt-5 rounded-full bg-ink px-9 py-3.5 text-[16px] text-white hover:bg-ink-soft"
          >
            Call us
          </a>
        </div>
      </div>
    </section>
  );
}
