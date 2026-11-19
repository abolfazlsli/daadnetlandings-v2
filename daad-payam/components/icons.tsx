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
    <path d="M12 21V3" />
    <path d="m5 10 7-7 7 7" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11.5" cy="11.5" r="9" />
    <path d="m20 20 2 2" />
  </svg>
);

export const VerifiedIcon = (p: IconProps) => (
  <svg {...base(p)} stroke="none">
    <path
      fill="#1D8CF0"
      d="m12 1.5 2.4 1.8 3-.2.9 2.9 2.5 1.7-.9 2.9.9 2.9-2.5 1.7-.9 2.9-3-.2L12 19.7l-2.4-1.8-3 .2-.9-2.9-2.5-1.7.9-2.9-.9-2.9 2.5-1.7.9-2.9 3 .2L12 1.5Z"
    />
    <path d="m8.3 10.8 2.5 2.5 4.9-4.9" stroke="#fff" strokeWidth={1.8} fill="none" />
  </svg>
);

export const CommentIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5c5 0 9 3.4 9 7.8s-4 7.7-9 7.7c-1.2 0-2.4-.2-3.5-.6L3.5 20l1.3-4C3.7 14.7 3 13.1 3 11.3 3 6.9 7 3.5 12 3.5Z" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base(p)} stroke="none">
    <path fill="currentColor" d="M12 20.5S3 15 3 8.8A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 9 2.4c0 6.2-9 11.7-9 11.7Z" />
  </svg>
);

export const RepostIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M17 2.5 20.5 6 17 9.5" />
    <path d="M3.5 11V9a3 3 0 0 1 3-3h14" />
    <path d="M7 21.5 3.5 18 7 14.5" />
    <path d="M20.5 13v2a3 3 0 0 1-3 3h-14" />
  </svg>
);

export const BookmarkIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4.5L5 21V4.5a1 1 0 0 1 1-1Z" />
  </svg>
);

export const PlusCircleIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.4}>
    <circle cx="12" cy="12" r="10.5" />
    <path d="M12 7v10M7 12h10" />
  </svg>
);

export const UserCircleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3.2" />
    <path d="M6.2 18.8a6.5 6.5 0 0 1 11.6 0" />
  </svg>
);

/* community card icons */
export const ChipIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="6" width="12" height="12" rx="3" />
    <path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    <path d="m12.6 8.8-2 3.4h3l-2 3" />
  </svg>
);

export const OpenBookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 5.5c3-1 6-1 9 1v13c-3-2-6-2-9-1v-13Z" />
    <path d="M21 5.5c-3-1-6-1-9 1v13c3-2 6-2 9-1v-13Z" />
    <path d="M5.5 9.5h3.5M5.5 12.5h3.5" />
  </svg>
);

export const MindIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 21v-3h2.5a2 2 0 0 0 2-2v-2.5l1.8-.6-1.8-3.4A7 7 0 1 0 7 15.6V21" />
    <path d="M12.5 7.5c-1.4-.9-3.5.1-3.2 1.9-1.5.6-1 2.8.6 2.7.3 1.3 2 1.4 2.6.4 1.3.6 2.7-.7 2.2-2 1.2-1-.1-3-2.2-3Z" />
  </svg>
);

export const PresentationIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 4h18" />
    <path d="M4.5 4v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4" />
    <path d="m8 12 2.5-3 2.5 2 3-4" />
    <path d="m9 21 3-5 3 5" />
  </svg>
);

/* stats icons */
export const DocIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3H8a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V9l-6-6Z" />
    <path d="M14 3v3a3 3 0 0 0 3 3h3" />
    <path d="M8.5 13h6M8.5 16.5h3.5" />
  </svg>
);

export const UsersFrameIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.5 7V4.5a2 2 0 0 1 2-2H7M17 2.5h2.5a2 2 0 0 1 2 2V7M21.5 17v2.5a2 2 0 0 1-2 2H17M7 21.5H4.5a2 2 0 0 1-2-2V17" />
    <circle cx="7.5" cy="9" r="1.6" />
    <circle cx="12" cy="9" r="1.6" />
    <circle cx="16.5" cy="9" r="1.6" />
    <path d="M5 16a2.8 2.8 0 0 1 5 0M9.5 16a2.8 2.8 0 0 1 5 0M14 16a2.8 2.8 0 0 1 5 0" />
    <path d="M5 16h14" />
  </svg>
);

export const GridIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="7" cy="7" r="3.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
    <circle cx="17" cy="17" r="3.5" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 2.6 5.5 5.9.8-4.3 4.1 1.1 5.9L12 16.4l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.8L12 3Z" />
  </svg>
);

export const CommunityIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="7.5" cy="4.5" r="2" />
    <circle cx="16.5" cy="4.5" r="2" />
    <circle cx="12" cy="10" r="2" />
    <path d="M3.5 11c1.2-1.4 2.6-2 4-2M20.5 11c-1.2-1.4-2.6-2-4-2" />
    <path d="M7 14.5c1.3-1.2 3-1.8 5-1.8s3.7.6 5 1.8" />
    <ellipse cx="12" cy="18.5" rx="3" ry="2.2" />
  </svg>
);

/** Red speech-bubble logo mark. */
export const ChatLogo = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 48" aria-hidden {...p}>
    <path fill="#FB0200" d="M40 2c12 0 22 7 22 17s-10 17-22 17c-3 0-5.5-.4-8-1.2L22 40l3-8c-4-3-7-7.5-7-13C18 9 28 2 40 2Z" />
    <circle cx="31" cy="19" r="3" fill="#fff" />
    <circle cx="40" cy="19" r="3" fill="#fff" />
    <circle cx="49" cy="19" r="3" fill="#fff" />
    <path
      fill="none"
      stroke="#FB0200"
      strokeWidth={2.4}
      strokeLinecap="round"
      d="M16 24c-6 1.5-10 5.5-10 10.5 0 2.5 1 4.8 2.7 6.6L6 46l6-2.5c1.6.5 3.3.8 5 .8"
    />
  </svg>
);

/** Hand-drawn underline swash under the final CTA subtitle. */
export const Swash = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 30" fill="none" stroke="#c8c8c8" strokeLinecap="round" aria-hidden {...p}>
    <path d="M6 6c120-4 330-6 468-2" strokeWidth={2.5} />
    <path d="M100 18c90-8 230-10 270-6" strokeWidth={3} />
    <path d="M110 24c80-6 170-8 220-3" strokeWidth={2} />
  </svg>
);
