import type { SVGProps } from "react";

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 size-3 shrink-0 text-white" {...props}>
      <path
        d="M6.6 10.8c1.6 3.1 4.3 5.8 7.4 7.4l2.4-2.4c.4-.4 1-.5 1.5-.3 1 .4 2.1.6 3.3.6.8 0 1.5.7 1.5 1.5V21c0 .8-.7 1.5-1.5 1.5C9.9 22.5 1.5 14.1 1.5 3C1.5 2.2 2.2 1.5 3 1.5H7.5c.8 0 1.5.7 1.5 1.5 0 1.1.2 2.3.6 3.3.2.5.1 1.1-.3 1.5l-2.4 2.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconFax(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 size-3 shrink-0 text-white" {...props}>
      <path
        d="M7 3h10v4H7V3zm-2 6h14a2 2 0 012 2v8H3v-8a2 2 0 012-2zm2 4v2h4v-2H7zm6 0v2h4v-2h-4z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="mt-0.5 size-3 shrink-0 text-white" {...props}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

/** Marketing mobile footer — dark columns + legal strip (Figma home mobile) */
export function SiteFooterMarketingMobile() {
  const linkCls =
    "block py-1 text-[14px] font-normal leading-relaxed text-[#B8BCC4] transition-colors hover:text-white";
  const headingCls = "mb-4 font-['Inter',sans-serif] text-[15px] font-bold tracking-wide text-[#E8EAED]";

  return (
    <footer className="w-full bg-[#1B1D21] text-[#B8BCC4]" role="contentinfo">
      <div className="mx-auto w-full max-w-[400px] space-y-10 px-5 py-12">
        <div>
          <h3 className={headingCls}>The Move Process</h3>
          <nav aria-label="Move process">
            <ul className="space-y-3">
              {["Packing Gallery", "Packing Tips", "Moving Tips", "Moving with Children", "Customs Documentation"].map(
                (label) => (
                  <li key={label}>
                    <a href="#" className={linkCls}>
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div>
          <h3 className={headingCls}>Useful Links</h3>
          <nav aria-label="Useful links">
            <ul className="space-y-3">
              {["About us", "International Relocations", "Sitemap", "Shipping Glossary"].map((label) => (
                <li key={label}>
                  <a href="#" className={linkCls}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 className={headingCls}>Contacts</h3>
          <p className="mb-6 text-[14px] leading-relaxed text-[#B8BCC4]">
            UniRelo c/o SKY 2 C FREIGHT SYSTEMS, INC. 1500 Atlantic St., Union City, CA 94587
          </p>
          <ul className="space-y-4">
            <li>
              <a href="tel:18558647356" className="flex items-start gap-3 text-[14px] text-[#B8BCC4] hover:text-white">
                <IconPhone />
                <span>1-855-864-7356</span>
              </a>
            </li>
            <li>
              <a href="tel:18778648329" className="flex items-start gap-3 text-[14px] text-[#B8BCC4] hover:text-white">
                <IconFax />
                <span>1-877-864-8329</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@unirelo.com"
                className="flex items-start gap-3 text-[14px] text-[#B8BCC4] hover:text-white"
              >
                <IconMail />
                <span>info@unirelo.com</span>
              </a>
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-5" aria-label="Social media">
            <a href="#" className="text-white/90 hover:text-white" aria-label="Facebook">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.2V12h2.2V9.8c0-2.18 1.3-3.39 3.28-3.39.95 0 1.95.17 1.95.17v2.14h-1.1c-1.09 0-1.43.68-1.43 1.37V12h2.43l-.39 2.9h-2.04v7.05A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#" className="text-white/90 hover:text-white" aria-label="Twitter">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-white/90 hover:text-white" aria-label="YouTube">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1 31.6 31.6 0 00.5-5.8 31.6 31.6 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            <a href="#" className="text-white/90 hover:text-white" aria-label="Blog">
              <span className="flex size-5 items-center justify-center rounded border border-white/80 text-[11px] font-bold leading-none text-white">
                b
              </span>
            </a>
          </div>
        </div>

        <div>
          <h3 className={headingCls}>Customer Service</h3>
          <a href="#" className={linkCls}>
            Testimonials
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-8">
        <p className="text-center text-[13px] text-[#9CA3AF]">© 2024 UniRelo - All Rights Reserved</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[12px] text-[#9CA3AF]">
          <a href="#" className="hover:text-white">
            Terms and Conditions
          </a>
          <span className="text-white/20" aria-hidden>
            |
          </span>
          <a href="#" className="hover:text-white">
            Bill of Lading
          </a>
          <span className="text-white/20" aria-hidden>
            |
          </span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export interface SiteFooterImageStripProps {
  src: string;
  className?: string;
  imgClassName?: string;
}

/** Full-width screenshot / asset strip (Moving To page desktop + mobile) */
export function SiteFooterImageStrip({ src, className = "", imgClassName = "" }: SiteFooterImageStripProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img alt="" className={`block h-auto w-full object-cover object-top ${imgClassName}`} src={src} />
    </div>
  );
}
