import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

export const BellIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9a6 6 0 1 1 12 0c0 4.2 1.6 6 2 6.5H4c.4-.5 2-2.3 2-6.5Z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </svg>
);

export const ArrowLeftIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 12H4" />
    <path d="m10 6-6 6 6 6" />
  </svg>
);

export const ArrowUpIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20V4" />
    <path d="m6 10 6-6 6 6" />
  </svg>
);

export const ChatIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.5 4.5a6 6 0 0 1 5.6 8.2l.9 2.8-2.9-.8A6 6 0 0 1 8.6 11" />
    <path d="M9.5 9a5.5 5.5 0 0 0-5 7.7L3.6 19.5l2.8-.8A5.5 5.5 0 1 0 9.5 9Z" />
  </svg>
);

export const LawyerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9.5" cy="5" r="2.6" />
    <path d="M4 15.5v-1.5a4 4 0 0 1 4-4h3" />
    <rect x="11" y="13" width="10" height="7.5" rx="1.6" />
    <path d="M14 13v-1.4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V13" />
    <path d="M11 16.5h10" />
    <path d="M3 18.5h6" />
  </svg>
);

export const DocumentIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.5 3H8a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8.5" />
    <path d="M14.5 3v3.2a2.3 2.3 0 0 0 2.3 2.3H20" />
    <path d="M14.5 3 20 8.5" />
    <path d="M8.5 13h4.5" />
    <path d="M8.5 16.5h6.5" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2.5 5.5 13.5h6l-1 8 7.5-11h-6l1-8Z" stroke="#1D2343" />
    <path d="M19 3.5 18 6l2 .3-1.2 2.4" stroke="#FFBB00" />
    <path d="M5.2 17.2 4.4 19l1.6.2-.9 1.8" stroke="#FFBB00" />
  </svg>
);

export const BookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.5 5.5c2.8-1 6-1 9.5 1v13c-3.5-2-6.7-2-9.5-1v-13Z" />
    <path d="M21.5 5.5c-2.8-1-6-1-9.5 1v13c3.5-2 6.7-2 9.5-1v-13Z" />
    <path d="M14.5 9.5h4.5M14.5 12.5h4.5M14.5 15.5h4.5" />
  </svg>
);

export const LayersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </svg>
);

export const SendIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.5 3.5 3.5 10l6.8 2.7L13 19.5l7.5-16Z" />
    <path d="m10.3 12.7 4.7-4.7" />
  </svg>
);

export const PlusCircleIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.4}>
    <circle cx="12" cy="12" r="10.5" />
    <path d="M12 7v10M7 12h10" />
  </svg>
);

/** Hand-drawn looping arrow used in the contact section. */
export const LoopArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 180 150"
    fill="none"
    stroke="currentColor"
    strokeWidth={4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...p}
  >
    <path d="M150 5c25 40 0 95-60 95-25 0-35-25-15-35 22-10 30 25 5 45-20 16-50 15-68 7" />
    <path d="M30 98 10 117l26 15" />
  </svg>
);

/** Scale-of-justice mark used next to the footer logo. */
export const ScaleLogo = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 48" fill="none" aria-hidden {...p}>
    <g stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6v36M20 44h24M10 10h44" />
      <path d="M14 10 6 26h16l-8-16ZM50 10l-8 16h16l-8-16Z" />
    </g>
    <path d="M6 26a8 6 0 0 0 16 0H6ZM42 26a8 6 0 0 0 16 0H42Z" fill="currentColor" />
    <circle cx="32" cy="5" r="3.5" fill="currentColor" />
    <rect x="9" y="12" width="10" height="7" rx="1.5" fill="currentColor" />
    <text x="14" y="17.6" fontSize="5.5" fontWeight="800" textAnchor="middle" fill="#fff" fontFamily="sans-serif">
      AI
    </text>
  </svg>
);
