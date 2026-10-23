import type { CSSProperties } from "react";
import { ArrowIcon, Sparkle } from "./Decor";

const MEMBERS = [
  {
    color: "#F5E600",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
    alt: "Stylist in yellow",
    h: 420,
  },
  {
    color: "#F2C4CF",
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&q=80",
    alt: "Stylist in pink",
    h: 350,
  },
  {
    color: "#5F8AA5",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    alt: "Stylist in blue",
    h: 450,
  },
  {
    color: "#E8183C",
    src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&q=80",
    alt: "Stylist in red",
    h: 360,
  },
];

export default function Team() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 pb-16 lg:pb-24">
      <div className="relative overflow-hidden rounded-[32px] bg-ink px-6 pt-12 text-white sm:rounded-[48px] sm:px-10 lg:px-16 lg:pt-20">
        <Sparkle className="left-[260px] top-[330px] hidden lg:block" size={26} color="#fff" />
        <Sparkle className="right-[80px] top-[280px] hidden lg:block" size={18} color="#fff" />
        <Sparkle className="right-[60px] top-[300px] hidden lg:block" size={34} color="#fff" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="font-display text-[38px] font-semibold leading-[1.15] sm:text-[54px]">
              Meet Our
              <br />
              <span className="flex items-center gap-4 sm:gap-6">
                Team
                <a
                  href="#contact"
                  className="inline-flex items-center gap-5 rounded-full border-[3px] border-white px-5 py-2 font-body text-[18px] font-medium hover:bg-white hover:text-ink sm:gap-8 sm:px-7"
                >
                  <ArrowIcon size={20} />
                  Book
                </a>
              </span>
            </h2>
          </div>
          <p className="max-w-[470px] text-[16px] font-medium leading-[1.4] text-white sm:text-[20px] lg:pt-4">
            Lorem ipsum dolor sit amet consectetur, ddfdfft jkl io Diam elementum ipsum sit lectus
            pellentesque vitae. Magna
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 items-end gap-3 sm:gap-5 md:grid-cols-4 lg:mt-20">
          {MEMBERS.map((m) => (
            <div
              key={m.src}
              className="arch relative h-[calc(var(--h)*0.6)] w-full overflow-hidden sm:h-[calc(var(--h)*0.8)] lg:h-(--h)"
              style={{ background: m.color, "--h": `${m.h}px` } as CSSProperties}
            >
              <img
                src={m.src}
                alt={m.alt}
                width={270}
                height={m.h}
                className="absolute inset-x-0 bottom-0 h-[84%] w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
