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

export const UserIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.8 19a5.5 5.5 0 0 1 10.4 0" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11.5" cy="11.5" r="9" />
    <path d="m20 20 2 2" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21.5s-7.5-6.5-7.5-12a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12Z" />
    <circle cx="12" cy="9.5" r="2.6" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m15 6-6 6 6 6" />
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
    <path d="M12 21V3" />
    <path d="m5 10 7-7 7 7" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 10h1.5M13.5 10H15M9 14h1.5M13.5 14H15" />
    <path d="M10 21v-3h4v3" />
  </svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="7" width="19" height="13.5" rx="3" />
    <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
    <path d="M2.5 12.5c5.8 2.6 13.2 2.6 19 0" />
    <path d="M12 13v2" />
  </svg>
);

export const PlusCircleIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.4}>
    <circle cx="12" cy="12" r="10.5" />
    <path d="M12 7v10M7 12h10" />
  </svg>
);

/** Head-with-network mark on the floating "مهارت" badge. */
export const SkillIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5a6.5 6.5 0 0 0-4.6 11.1L8.5 17h7l1.1-2.4A6.5 6.5 0 0 0 12 3.5Z" />
    <path d="M9.5 20.5h5" />
    <circle cx="12" cy="7.5" r="1.3" />
    <circle cx="9" cy="11" r="1.3" />
    <circle cx="15" cy="11" r="1.3" />
    <circle cx="12" cy="13.6" r="1.3" />
    <path d="m11.2 8.5-1.4 1.5M12.8 8.5l1.4 1.5M9.9 11.8l1.3 1M14.1 11.8l-1.3 1" />
    <path d="M3 9.5h1.5M19.5 9.5H21M5 4.5l1 1M19 4.5l-1 1" />
  </svg>
);

/** Hand-drawn question mark doodle. */
export const QuestionDoodle = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 80 125" fill="none" stroke="#111" strokeWidth={3} strokeLinecap="round" aria-hidden {...p}>
    <path d="M10 30C8 10 30 2 48 6c20 5 28 25 18 42-8 14-24 18-26 40" />
    <path d="M20 34C18 18 34 12 47 15c14 4 18 18 11 30-7 12-22 18-24 43" />
    <path d="M10 30c3 4 7 5 10 4" />
    <path d="M40 88c-2 0-6-1-6-1" />
    <ellipse cx="35" cy="108" rx="9" ry="9" />
    <ellipse cx="34" cy="109" rx="6" ry="6" />
  </svg>
);
