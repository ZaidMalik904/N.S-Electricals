import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "light" | "image";
  showSubtitle?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LogoIcon({
  className = "w-10 h-10",
  alt = "N.S Electrical's Logo",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <div className={`relative shrink-0 overflow-hidden rounded-full shadow-sm ${className}`}>
      <Image
        src="/images/logo.png"
        alt={alt}
        width={160}
        height={160}
        priority
        className="w-full h-full object-contain select-none"
      />
    </div>
  );
}

export function LogoIconLight({
  className = "w-10 h-10",
  alt = "N.S Electrical's Logo",
}: {
  className?: string;
  alt?: string;
}) {
  return <LogoIcon className={className} alt={alt} />;
}

export default function Logo({
  variant = "default",
  showSubtitle = true,
  className = "",
  size = "md",
}: LogoProps) {
  const iconSizeClass =
    size === "sm"
      ? "w-10 h-10"
      : size === "lg"
        ? "w-16 h-16 sm:w-18 sm:h-18"
        : "w-12 h-12 sm:w-13 sm:h-13";

  const subtitleSizeClass =
    size === "sm" ? "text-[8px]" : size === "lg" ? "text-[11px]" : "text-[9px] sm:text-[10px]";

  const isLight = variant === "light";

  if (variant === "image") {
    return (
      <Link href="#home" className={`inline-block group focus:outline-none ${className}`}>
        <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
          <LogoIcon className={iconSizeClass} />
        </div>
      </Link>
    );
  }

  return (
    <Link href="#home" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Real Image Icon */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <LogoIcon className={iconSizeClass} />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center ">
        <div className="flex items-center font-black tracking-tight leading-none">
          <span
            className={isLight ? "text-white" : "text-[#0B192C]"}
            style={{ fontSize: size === "sm" ? "1.5rem" : size === "lg" ? "1.95rem" : "1.55rem" }}
          >
            N.S&nbsp;
          </span>
          <span
            className="text-[#FACC15]"
            style={{ fontSize: size === "sm" ? "1.5rem" : size === "lg" ? "1.95rem" : "1.55rem" }}
          >
            Electrical&apos;s
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`font-bold tracking-wider uppercase whitespace-nowrap ${
                isLight ? "text-gray-300" : "text-[#0B192C]/80"
              } ${subtitleSizeClass}`}
            >
              SAFE POWER | BRIGHTER TOMORROW
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

