type Tile = {
  src: string;
  alt: string;
  left: number;
  top: number;
  w: number;
  h: number;
};

const U = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80`;

const TILES: Tile[] = [
  { src: U("photo-1595476108010-b4d1f102b1b1"), alt: "Hairdresser styling hair", left: 0, top: 110, w: 345, h: 345 },
  { src: U("photo-1580618672591-eb180b1a973f"), alt: "Hair detail", left: 365, top: 100, w: 290, h: 700 },
  { src: U("photo-1519699047748-de8e457a634e"), alt: "Woman with purple light", left: 660, top: 0, w: 500, h: 230 },
  { src: U("photo-1492106087820-71f1a00d2b11"), alt: "Barber at work", left: 670, top: 275, w: 220, h: 470 },
  { src: U("photo-1570172619644-dfd03ed5d881"), alt: "Facial mask treatment", left: 905, top: 235, w: 270, h: 470 },
  { src: U("photo-1531746020798-e6953c6e8e04"), alt: "Red-haired woman", left: 0, top: 500, w: 345, h: 640 },
  { src: U("photo-1616394584738-fc6e612e71b9"), alt: "Face treatment", left: 385, top: 820, w: 480, h: 320 },
  { src: U("photo-1512290923902-8a9f81dc236c"), alt: "Eyes and makeup", left: 905, top: 830, w: 270, h: 270 },
];

export default function Gallery() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 pb-16 lg:pb-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <h2 className="font-display text-[36px] font-semibold text-ink sm:text-[44px] md:shrink-0">Our Gallery</h2>
        <p className="max-w-[380px] text-[14px] font-medium leading-[1.8] text-ink-soft md:pt-1">
          Lorem ipsum dolor sit amet consectetur, ddfdfft jkl io Diam elementum ipsum sit lectus
          pellentesque vitae. Magna
        </p>
      </div>

      <div className="relative mt-6 hidden h-[1150px] w-full lg:block">
        {TILES.map((t) => (
          <div
            key={t.src}
            className="absolute overflow-hidden rounded-full"
            style={{ left: t.left, top: t.top, width: t.w, height: t.h }}
          >
            <img src={t.src} alt={t.alt} width={t.w} height={t.h} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* 2-col grid of rounded shapes for small screens */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:hidden">
        {TILES.map((t, i) => (
          <div
            key={t.src}
            className={`w-full overflow-hidden ${
              i % 4 === 0 || i % 4 === 3
                ? "aspect-[3/4] rounded-full"
                : "aspect-[3/4] rounded-[40px] sm:rounded-[64px]"
            }`}
          >
            <img src={t.src} alt={t.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
