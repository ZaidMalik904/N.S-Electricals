import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light" | "image";
  showSubtitle?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer White Badge Circle with Dark & Gold Borders */}
      <circle cx="100" cy="100" r="95" fill="#FFFFFF" stroke="#0B192C" strokeWidth="8" />
      <circle cx="100" cy="100" r="88" stroke="#FACC15" strokeWidth="5" fill="none" />

      {/* Top Gold & Dark Arc Swoosh */}
      <path
        d="M 98 32 C 148 30, 178 52, 164 82 C 158 92, 144 98, 134 94"
        stroke="#FACC15"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />

      {/* Curved Plug Wire */}
      <path
        d="M 32 104 C 30 142, 68 160, 142 148"
        stroke="#0B192C"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Plug Head & Pins */}
      <g transform="translate(142, 126) rotate(15)">
        <rect x="0" y="0" width="20" height="24" rx="4" fill="#0B192C" />
        <rect x="20" y="4" width="10" height="4" rx="1.5" fill="#0B192C" />
        <rect x="20" y="16" width="10" height="4" rx="1.5" fill="#0B192C" />
      </g>

      {/* Letter 'N' (Solid Navy) */}
      <path
        d="M 46 64 V 126 H 64 V 92 L 86 126 H 98 V 64 H 80 V 96 L 60 64 H 46 Z"
        fill="#0B192C"
      />

      {/* Letter 'S' (Solid Gold/Yellow) */}
      <path
        d="M 148 76 C 145 64, 134 58, 118 58 C 100 58, 92 68, 92 80 C 92 102, 144 96, 144 116 C 144 126, 132 132, 116 132 C 98 132, 88 120, 86 108 H 104 C 106 115, 112 118, 118 118 C 127 118, 128 112, 128 108 C 128 92, 78 96, 78 76 C 78 60, 94 46, 118 46 C 142 46, 150 62, 150 76 H 148 Z"
        fill="#FACC15"
      />

      {/* Central Lightning Bolt */}
      <polygon
        points="102,40 85,92 100,92 90,144 122,85 104,85"
        fill="#FDE047"
        stroke="#FFFFFF"
        strokeWidth="3"
      />
    </svg>
  );
}

export function LogoIconLight({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer White Badge Circle */}
      <circle cx="100" cy="100" r="95" fill="#FFFFFF" stroke="#FACC15" strokeWidth="8" />
      <circle cx="100" cy="100" r="88" stroke="#0B192C" strokeWidth="5" fill="none" />

      {/* Top Gold & Dark Arc Swoosh */}
      <path
        d="M 98 32 C 148 30, 178 52, 164 82 C 158 92, 144 98, 134 94"
        stroke="#FACC15"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />

      {/* Curved Plug Wire */}
      <path
        d="M 32 104 C 30 142, 68 160, 142 148"
        stroke="#0B192C"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Plug Head & Pins */}
      <g transform="translate(142, 126) rotate(15)">
        <rect x="0" y="0" width="20" height="24" rx="4" fill="#0B192C" />
        <rect x="20" y="4" width="10" height="4" rx="1.5" fill="#0B192C" />
        <rect x="20" y="16" width="10" height="4" rx="1.5" fill="#0B192C" />
      </g>

      {/* Letter 'N' */}
      <path
        d="M 46 64 V 126 H 64 V 92 L 86 126 H 98 V 64 H 80 V 96 L 60 64 H 46 Z"
        fill="#0B192C"
      />

      {/* Letter 'S' */}
      <path
        d="M 148 76 C 145 64, 134 58, 118 58 C 100 58, 92 68, 92 80 C 92 102, 144 96, 144 116 C 144 126, 132 132, 116 132 C 98 132, 88 120, 86 108 H 104 C 106 115, 112 118, 118 118 C 127 118, 128 112, 128 108 C 128 92, 78 96, 78 76 C 78 60, 94 46, 118 46 C 142 46, 150 62, 150 76 H 148 Z"
        fill="#FACC15"
      />

      {/* Central Lightning Bolt */}
      <polygon
        points="102,40 85,92 100,92 90,144 122,85 104,85"
        fill="#FDE047"
        stroke="#FFFFFF"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function Logo({
  variant = "default",
  showSubtitle = true,
  className = "",
  size = "md",
}: LogoProps) {
  const iconSizeClass =
    size === "sm" ? "w-9 h-9" : size === "lg" ? "w-14 h-14" : "w-11 h-11";
  const titleSizeClass =
    size === "sm"
      ? "text-lg"
      : size === "lg"
      ? "text-2xl sm:text-3xl"
      : "text-xl sm:text-2xl";
  const subtitleSizeClass =
    size === "sm" ? "text-[8px]" : size === "lg" ? "text-[11px]" : "text-[9px] sm:text-[10px]";

  const isLight = variant === "light";

  return (
    <Link href="#home" className={`inline-flex items-center gap-2.5 group focus:outline-none ${className}`}>
      {/* Icon */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <LogoIcon className={iconSizeClass} />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center font-black tracking-tight leading-none">
          <span className={isLight ? "text-white" : "text-[#0B192C]"} style={{ fontSize: size === "sm" ? "1.1rem" : size === "lg" ? "1.75rem" : "1.35rem" }}>
            N.S&nbsp;
          </span>
          <span className="text-[#FACC15]" style={{ fontSize: size === "sm" ? "1.1rem" : size === "lg" ? "1.75rem" : "1.35rem" }}>
            Electrical&apos;s
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-2.5 h-[1.5px] bg-[#FACC15]" />
            <span
              className={`font-bold tracking-wider uppercase whitespace-nowrap ${
                isLight ? "text-gray-300" : "text-[#0B192C]/80"
              } ${subtitleSizeClass}`}
            >
              SAFE POWER | BRIGHTER TOMORROW
            </span>
            <span className="w-2.5 h-[1.5px] bg-[#FACC15]" />
          </div>
        )}
      </div>
    </Link>
  );
}
