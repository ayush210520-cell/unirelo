import { Link, useLocation } from "react-router-dom";
import { imgPhone } from "../../figmaImageUrls";
import { MenuIcon } from "../icons/MenuIcon";
import {
  NAV_CHEVRON_MOVING,
  NAV_CHEVRON_SERVICES,
  SITE_LOGO_DEFAULT,
  SITE_PHONE_HREF,
} from "../../constants/site";

export type SiteHeaderVariant = "desktop" | "mobile-moving" | "mobile-marketing";

export interface SiteHeaderProps {
  /** Root <header> classes — layout/positioning (e.g. absolute + offsets) */
  className?: string;
  variant: SiteHeaderVariant;
  /** Override logo (e.g. Figma export URL on legacy home page) */
  logoSrc?: string;
  /** Figma “Group” logo crop (home desktop/mobile) */
  logoFramed?: boolean;
  onMenuClick?: () => void;
}

function DesktopNav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "";
  const isMoving = pathname.includes("moving-to-india");

  return (
    <div className="flex min-w-0 flex-1 justify-center px-2">
      <nav
        className="flex h-[44px] shrink-0 items-center gap-[19px] rounded-full border border-[#D5D8DD] bg-white px-3"
        aria-label="Primary"
      >
        <Link
          to="/"
          className={`flex h-[30px] items-center justify-center rounded-[15px] px-3.5 font-['Inter',sans-serif] text-[12px] leading-none ${
            isHome ? "bg-[#34519E] font-normal text-white" : "text-[#0A0A0A]"
          }`}
        >
          Home
        </Link>
        <div className="flex h-[30px] items-center gap-1">
          <span className="font-['Inter',sans-serif] text-[12px] leading-none text-[#0A0A0A]">Services</span>
          <span className="relative flex size-3 shrink-0 items-center justify-center">
            <img alt="" className="size-3" src={NAV_CHEVRON_SERVICES} />
          </span>
        </div>
        <Link
          to="/moving-to-india"
          className={`flex h-[30px] items-center gap-1 rounded-[15px] px-2 ${isMoving ? "bg-[#34519E]" : ""}`}
        >
          <span
            className={`font-['Inter',sans-serif] text-[12px] leading-none ${isMoving ? "text-white" : "text-[#0A0A0A]"}`}
          >
            Moving To
          </span>
          <span className="relative flex size-3 shrink-0 items-center justify-center">
            <img
              alt=""
              className={`size-3 ${isMoving ? "brightness-0 invert" : ""}`}
              src={NAV_CHEVRON_MOVING}
            />
          </span>
        </Link>
        <span className="font-['Inter',sans-serif] text-[12px] leading-none text-[#0A0A0A]">About Us</span>
      </nav>
    </div>
  );
}

function DesktopCallPill() {
  return (
    <a
      href={SITE_PHONE_HREF}
      className="flex h-[44px] shrink-0 items-center rounded-[59px] border border-[#D5D8DD] bg-white pl-2 pr-1"
    >
      <span className="whitespace-nowrap pl-2 pr-1 font-['Inter',sans-serif] text-[12px] text-black">Call Us Now</span>
      <span className="flex h-[38.5px] w-[39.4px] items-center justify-center overflow-hidden rounded-full bg-[#34519E]">
        <img alt="" className="size-full object-contain" src={imgPhone} />
      </span>
    </a>
  );
}

function LogoLink({ logoSrc, framed }: { logoSrc: string; framed: boolean }) {
  if (framed) {
    return (
      <Link to="/" className="relative block h-[46px] w-[118px] shrink-0">
        <span className="absolute inset-[15.22%_0.41%_15.22%_0] block">
          <img alt="UniRelo" className="block size-full max-w-none object-contain" src={logoSrc} />
        </span>
      </Link>
    );
  }
  return (
    <Link to="/" className="block h-[46px] w-[118px] shrink-0">
      <img alt="UniRelo" className="h-full w-full object-contain object-left" src={logoSrc} />
    </Link>
  );
}

/**
 * Single site header: desktop (logo + centered nav + call) or mobile variants (logo + call + menu).
 * Positioning stays in `className` so Figma absolute frames stay accurate per page.
 */
export function SiteHeader({
  className = "",
  variant,
  logoSrc = SITE_LOGO_DEFAULT,
  logoFramed = false,
  onMenuClick,
}: SiteHeaderProps) {
  if (variant === "desktop") {
    return (
      <header className={`flex items-center ${className}`}>
        <LogoLink logoSrc={logoSrc} framed={logoFramed} />
        <DesktopNav />
        <DesktopCallPill />
      </header>
    );
  }

  if (variant === "mobile-moving") {
    return (
      <header
        className={`sticky top-0 z-50 flex w-full items-center justify-between bg-white px-[18px] py-[18px] shadow-[0_2px_4px_rgba(131,131,131,0.25)] ${className}`}
        aria-label="Site header"
      >
        <LogoLink logoSrc={logoSrc} framed={logoFramed} />
        <div className="flex items-center gap-4">
          <a
            href={SITE_PHONE_HREF}
            className="flex items-center gap-[11px] rounded-full border border-[#D5D8DD] py-1 pl-3 pr-1"
          >
            <span className="font-['Inter',sans-serif] text-[12px] font-semibold text-[#34519E]">Call Us Now</span>
            <span className="flex size-8 items-center justify-center overflow-hidden rounded-full bg-[#34519E]">
              <img alt="" className="size-5 object-contain brightness-0 invert" src={imgPhone} />
            </span>
          </a>
          <button type="button" className="text-[#0A0A0A]" aria-label="Open menu" onClick={onMenuClick}>
            <MenuIcon />
          </button>
        </div>
      </header>
    );
  }

  /* mobile-marketing — home mobile Figma */
  return (
    <header
      className={`sticky top-0 z-50 flex w-full items-center justify-between border-b border-[#E8EAED] bg-white px-5 py-[18px] ${className}`}
      aria-label="Site header"
    >
      <LogoLink logoSrc={logoSrc} framed={logoFramed} />
      <div className="flex items-center gap-3">
        <a
          href={SITE_PHONE_HREF}
          className="flex h-9 items-center rounded-full border border-[#D5D8DD] bg-white pl-2.5 pr-0.5 shadow-sm"
        >
          <span className="pr-1.5 text-[12px] font-medium leading-none text-[#25376A]">Call Us Now</span>
          <span className="flex size-[34px] items-center justify-center rounded-full bg-[#34519E]">
            <img alt="" className="size-4 object-contain brightness-0 invert" src={imgPhone} />
          </span>
        </a>
        <button type="button" className="-mr-1 p-1 text-[#25376A]" aria-label="Open menu" onClick={onMenuClick}>
          <MenuIcon stroke="#25376A" />
        </button>
      </div>
    </header>
  );
}
