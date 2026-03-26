import type { SVGProps } from "react";

export function MenuIcon({ className, stroke = "currentColor", ...props }: SVGProps<SVGSVGElement> & { stroke?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
