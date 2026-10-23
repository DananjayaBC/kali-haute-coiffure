import { CircleText } from "./Decor";

const SERVICE_IMGS = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80",
    alt: "Hair styling",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80",
    alt: "Hair wash",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
    alt: "Men's haircut",
  },
];

const CARD_IMG = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80";

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1200px] px-6 pt-10 pb-16 lg:pb-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <h2 className="font-display text-[36px] font-semibold text-ink sm:text-[44px] md:shrink-0">Our Services</h2>
        <p className="max-w-[380px] text-[14px] font-medium leading-[1.8] text-ink-soft md:pt-1">
          Lorem ipsum dolor sit amet consectetur, ddfdfft jkl io Diam elementum ipsum sit lectus
          pellentesque vitae. Magna
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:mt-16 lg:flex lg:items-center lg:justify-center lg:gap-0">
        {SERVICE_IMGS.map((img, i) => (
          <div
            key={img.src}
            className={`relative aspect-[3/5] w-full max-w-[300px] shrink-0 overflow-hidden rounded-full lg:h-[500px] lg:w-[300px] ${
              i === 0 ? "" : "lg:ml-[-30px]"
            }`}
            style={{ zIndex: 3 - i }}
          >
            <img
              src={img.src}
              alt={img.alt}
              width={300}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Black pill card */}
        <div
          className="relative flex aspect-[3/5] w-full max-w-[300px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-full bg-ink text-center text-white lg:ml-[-30px] lg:h-[500px] lg:w-[300px]"
          style={{ zIndex: 0 }}
        >
          <div className="pt-4">
            <CircleText
              id="services"
              text="• HAIR STYLE AND MAKEUP "
              size={150}
              bg="transparent"
              fontSize={12.5}
              spin={false}
            >
              <span className="block h-[62px] w-[62px] overflow-hidden rounded-full">
                <img src={CARD_IMG} alt="" width={62} height={62} className="h-full w-full object-cover" />
              </span>
            </CircleText>
          </div>
          <h3 className="font-display mt-2 text-[24px] font-semibold leading-[1.25]">
            Hair Style
            <br />
            And
            <br />
            Makeup
          </h3>
          <a
            href="#services"
            className="mt-9 rounded-full bg-tan px-8 py-3 text-[13px] text-white hover:bg-gold"
          >
            see more
          </a>
        </div>
      </div>
    </section>
  );
}
