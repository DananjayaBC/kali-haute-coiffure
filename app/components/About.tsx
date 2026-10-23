import { PillBadge, Sparkle, Squiggle, Star } from "./Decor";

const LEFT_IMG = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80";
const RIGHT_IMG = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80";
const BADGE_IMG = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&q=80";

export default function About() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 lg:pb-24">
      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr_300px]">
        {/* Left arch image */}
        <div className="mx-auto h-[440px] w-full max-w-[340px] overflow-hidden rounded-t-full rounded-br-[120px] rounded-bl-none sm:h-[560px] sm:rounded-br-[170px] lg:mx-0 lg:mt-20 lg:h-[700px] lg:w-[340px]">
          <img src={LEFT_IMG} alt="Stylist in the salon" width={340} height={700} className="h-full w-full object-cover" />
        </div>

        {/* Center copy */}
        <div className="relative max-w-[450px] pt-4 lg:pt-24 lg:pl-10">
          <h2 className="font-display text-[48px] font-semibold leading-[1.1] text-ink sm:text-[64px]">
            About
            <br />
            <span className="flex items-center gap-6">
              Us
              <PillBadge img={BADGE_IMG} className="scale-90" />
            </span>
          </h2>
          <p className="mt-8 text-[15px] font-medium leading-[1.7] text-ink-soft lg:mt-10">
            Kali Haute Coiffure was founded in 2010 by hairstylist Khalid Hussain , who has been
            working in the industry for over 15 years. He saw a need for a salon that provided
            personalized, quality services to clients, and decided to start her own business.
            Today, Glamour Coiffure is one of the most well-known and respected salons in the city.
          </p>
          <div className="relative mt-8 flex items-center gap-8">
            <a
              href="tel:+19055825111"
              className="font-display inline-flex rounded-full border-[3px] border-ink px-11 py-3.5 text-[18px] font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Call Us
            </a>
            <Squiggle className="left-[215px] top-[-20px]" flip />
          </div>
          <Star className="left-[-80px] bottom-[-100px] hidden lg:block" size={30} />
        </div>

        {/* Right pill image */}
        <div className="relative">
          <Sparkle className="left-[-60px] top-[10px] hidden lg:block" size={30} />
          <Sparkle className="left-[-30px] top-[480px] hidden lg:block" size={30} />
          <div className="mx-auto h-[470px] w-full max-w-[300px] overflow-hidden rounded-full lg:mx-0 lg:ml-auto lg:w-[300px]">
            <img src={RIGHT_IMG} alt="Stylist portrait" width={300} height={470} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
