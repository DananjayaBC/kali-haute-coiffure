import type { CSSProperties, ReactNode } from "react";

type DecorProps = {
  className?: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
};

/** Four-point sparkle star */
export function Sparkle({ className = "", size = 22, color = "#111", style }: DecorProps) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
    >
      <path d="M12 0C12.6 6.8 17.2 11.4 24 12c-6.8.6-11.4 5.2-12 12-.6-6.8-5.2-11.4-12-12C6.8 11.4 11.4 6.8 12 0Z" />
    </svg>
  );
}

/** Five-point solid star */
export function Star({ className = "", size = 22, color = "#111", style }: DecorProps) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
    >
      <path d="M12 1.5l3.1 7 7.6.7-5.8 5.1 1.8 7.5L12 17.8l-6.7 4 1.8-7.5L1.3 9.2l7.6-.7L12 1.5Z" />
    </svg>
  );
}

/** Hand-drawn gold squiggle arrow doodle */
export function Squiggle({
  className = "",
  style,
  flip = false,
}: {
  className?: string;
  style?: CSSProperties;
  flip?: boolean;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
      width="110"
      height="80"
      viewBox="0 0 110 80"
      fill="none"
      stroke="#c9a063"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 6c-6 10-4 24 8 24s14-20 2-20c-12 0-8 26 8 32 14 5 38-6 60 4" />
      <path d="M78 36l14 10-10 12" />
    </svg>
  );
}

/** Outlined pill badge with arrow + small round image (used inline next to headings) */
export function PillBadge({
  img,
  light = false,
  className = "",
}: {
  img: string;
  light?: boolean;
  className?: string;
}) {
  const border = light ? "border-white" : "border-ink";
  const text = light ? "text-white" : "text-ink";
  const hole = light ? "bg-[#111]" : "bg-cream";
  return (
    <span
      className={`inline-flex items-center gap-4 rounded-full border-[3px] ${border} ${text} pl-7 pr-2.5 py-2.5 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h15" />
        <path d="M13 6l6 6-6 6" />
      </svg>
      <span className="relative block h-12 w-12 overflow-hidden rounded-full">
        <img src={img} alt="" width={48} height={48} className="h-full w-full object-cover" />
        <span className={`absolute inset-0 m-auto h-5 w-5 rounded-full ${hole}`} />
      </span>
    </span>
  );
}

/** Circular Salon Apsa logo */
export function Logo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden rounded-full ring-1 ring-[#3a3a3a] ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/salon-apsa-logo.jpg"
        alt="Salon Apsa"
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

/** Circular rotating text ring using SVG textPath */
export function CircleText({
  text,
  id,
  size = 150,
  color = "#fff",
  bg = "#111",
  fontSize = 11.5,
  className = "",
  children,
  spin = true,
}: {
  text: string;
  id: string;
  size?: number;
  color?: string;
  bg?: string;
  fontSize?: number;
  className?: string;
  children?: ReactNode;
  spin?: boolean;
}) {
  const pathId = `ring-${id}`;
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full ${className}`}
      style={{ width: size, height: size, background: bg }}
    >
      <svg
        className={`absolute inset-0 ${spin ? "spin-slow" : ""}`}
        viewBox="0 0 100 100"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <defs>
          <path id={pathId} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text
          fill={color}
          fontSize={fontSize}
          fontWeight="700"
          letterSpacing="1.6"
          fontFamily="var(--font-poppins), Poppins, sans-serif"
        >
          <textPath href={`#${pathId}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </span>
  );
}

/** Arrow icon used in buttons/badges */
export function ArrowIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
