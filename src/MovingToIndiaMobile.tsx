import { imgArrowRight } from "./figmaImageUrls";
import { SiteFooterMarketingMobile } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import {
  ACCORDION,
  FIGMA_CTA_ORANGE,
  I,
  NAV_CHEVRON_MOVING,
  RESOURCE_ROWS,
} from "./movingToIndiaConstants";

/** Figma iPhone 17 — node 395:5639 (402×~6412), flow layout */

const SUPPORT_CARDS = [
  { n: "01", title: "Door‑to‑door packing, shipping and delivery" },
  { n: "02", title: "Customs clearance & documentation support" },
  { n: "03", title: "Secure storage at origin & destination" },
  { n: "04", title: "Dedicated move coordinator" },
] as const;

/** Figma mobile order: only first step has body copy */
const TIMELINE_MOBILE: { title: string; body?: string }[] = [
  {
    title: "Pre‑move survey & quotation",
    body: "A virtual or in‑home survey to assess volume, packing needs and special items, followed by a clear, all‑inclusive international move quote.",
  },
  { title: "Professional packing & handling" },
  { title: "International transport, tracking & delivery" },
  { title: "Unpacking & basic setup at destination" },
];

function MobileResourcePair({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="flex w-full max-w-[370px] flex-col gap-[14px]">
      <a
        href="#"
        className="relative flex h-[81px] w-full items-center rounded-xl border border-[#D5D8DD] bg-white px-[22px] shadow-sm"
      >
        <span className="max-w-[280px] font-['Inter',sans-serif] text-[16px] font-bold leading-[2.06] tracking-[-0.016em] text-[#25376A]">
          {top}
        </span>
        <img alt="" className="absolute right-6 top-[31px] size-5" src={`${I}/arrow-external.svg`} />
      </a>
      <a
        href="#"
        className="relative flex h-[81px] w-full items-center rounded-xl border border-[#D5D8DD] bg-white px-[22px] shadow-sm"
      >
        <span className="max-w-[280px] font-['Inter',sans-serif] text-[16px] font-bold leading-[2.06] tracking-[-0.016em] text-[#25376A]">
          {bottom}
        </span>
        <img alt="" className="absolute right-6 top-[31px] size-5" src={`${I}/arrow-external.svg`} />
      </a>
    </div>
  );
}

export interface MovingToIndiaMobileProps {
  openAcc: number;
  setOpenAcc: (i: number) => void;
}

export function MovingToIndiaMobile({ openAcc, setOpenAcc }: MovingToIndiaMobileProps) {
  return (
    <div className="lg:hidden min-h-screen w-full bg-[#d4d4d4]">
      <div className="relative mx-auto w-full max-w-[402px] bg-white pb-0" data-node-id="395:5639">
        <SiteHeader variant="mobile-moving" />

        {/* Hero — padding 56px 28px 39px, column gap 41px, inner text gap 18px */}
        <section className="px-7 pb-[39px] pt-14" aria-label="Hero">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-[18px]">
              <h1 className="font-['Inter',sans-serif] text-[36px] font-bold leading-[1.28] tracking-[-0.023em] text-[#25376A]">
                Relocating to India?
                <br />
                Unirelo will take care of it!
              </h1>
              <p className="font-['Inter',sans-serif] text-[16px] font-medium leading-[1.5] text-[#25376A]">
                Door-to-door international relocation, customs support, and end‑to‑end logistics—made simple.
              </p>
              <button
                type="button"
                className="inline-flex w-fit items-center gap-4 rounded-lg px-6 py-3 font-['Inter',sans-serif] text-[16px] font-semibold tracking-[-0.0195em] text-white"
                style={{ backgroundColor: FIGMA_CTA_ORANGE }}
              >
                Get a Quote
                <img alt="" className="size-5 brightness-0 invert" src={imgArrowRight} />
              </button>
            </div>
            <div className="h-[211px] w-full overflow-hidden rounded-2xl">
              <img alt="" className="size-full object-cover" src={`${I}/hero-main-1a7094.png`} />
            </div>
          </div>
        </section>

        {/* Why relocate — bg #F7F9FA, padding 60 24, gap 22 */}
        <section className="flex flex-col items-center gap-[22px] bg-[#F7F9FA] px-6 py-[60px]" aria-label="Why India">
          <h2 className="w-full max-w-[354px] font-['Inter',sans-serif] text-[40px] font-bold leading-[1.4] tracking-[-0.0205em] text-[#25376A]">
            Why Relocate to India?
          </h2>
          <div className="relative w-full max-w-[354px]">
            <div className="h-[179px] w-full overflow-hidden rounded-2xl">
              <img alt="" className="size-full object-cover" src={`${I}/hero-side.png`} />
            </div>
            <div className="absolute -right-1 top-[120px] z-10 w-[119px] opacity-95">
              <img alt="" className="w-full" src={`${I}/hero-arrow.svg`} />
            </div>
          </div>
          <div className="flex w-full max-w-[354px] gap-[22px]">
            <div className="h-[171px] min-w-0 flex-1 overflow-hidden rounded-2xl">
              <img alt="" className="size-full object-cover" src={`${I}/hero-tile-a-4ef398.png`} />
            </div>
            <div className="h-[171px] min-w-0 flex-1 overflow-hidden rounded-2xl">
              <img alt="" className="size-full object-cover" src={`${I}/hero-tile-b-31298b.png`} />
            </div>
          </div>
          <p className="w-full max-w-[354px] font-['Inter',sans-serif] text-[14px] font-medium leading-[1.5] text-[rgba(37,55,106,0.8)]">
            Relocating from the USA to India can be both a lifestyle upgrade and a strategic move for your family,
            career, and finances. India offers a fast‑growing economy, globally connected cities, and a rich cultural
            landscape, often at a significantly lower cost of living than major US metros. For many returnees and
            expats, that means more support at home, more experiences, and more flexibility with the same (or even lower)
            monthly spend.
          </p>
          <div className="w-full max-w-[354px]">
            {ACCORDION.map((item, i) => {
              const expanded = openAcc === i;
              return (
                <div
                  key={item.title}
                  className={`border-b border-[rgba(37,55,106,0.12)] ${expanded ? "pb-4 pt-1" : ""}`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    onClick={() => setOpenAcc(i)}
                    aria-expanded={expanded}
                  >
                    <span className="max-w-[280px] font-['Encode_Sans',sans-serif] text-[18px] font-semibold leading-[1.25] tracking-[-0.041em] text-[#25376A]">
                      {item.title}
                    </span>
                    <span className="relative size-6 shrink-0">
                      <img
                        alt=""
                        className={`size-6 transition-transform ${expanded ? "rotate-180" : ""}`}
                        src={NAV_CHEVRON_MOVING}
                      />
                    </span>
                  </button>
                  {expanded && item.body ? (
                    <p className="pb-2 font-['Inter',sans-serif] text-[14px] font-medium leading-[1.714] text-[rgba(37,55,106,0.8)]">
                      {item.body}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        {/* How Unirelo supports — gradient, padding 60 24, gap 32 */}
        <section
          className="relative overflow-hidden px-6 py-[60px]"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #BEDBFF 100%)",
          }}
          aria-label="Services"
        >
          <div
            className="pointer-events-none absolute -left-10 top-1/3 size-[280px] rounded-full bg-[#FF6B35] opacity-30 blur-[80px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 top-20 size-[260px] rounded-full bg-[#FF6B35] opacity-20 blur-[80px]"
            aria-hidden
          />
          <h2 className="relative z-10 text-center font-['Inter',sans-serif] text-[40px] font-bold leading-[1.4] tracking-[-0.0205em] text-[#25376A]">
            How Unirelo supports your move to India
          </h2>
          <div className="relative z-10 mx-auto mt-8 flex w-full max-w-[354px] flex-col gap-8">
            {SUPPORT_CARDS.map((c) => (
              <div
                key={c.n}
                className="flex flex-col gap-3 rounded-[24px] border border-[rgba(217,217,217,0.5)] bg-[rgba(217,217,217,0.2)] px-7 py-8 backdrop-blur-md"
              >
                <p className="font-['Inter',sans-serif] text-[48px] font-bold leading-[1.21] tracking-[-0.017em] text-[#FF6B35]">
                  {c.n}
                </p>
                <p className="font-['Encode_Sans',sans-serif] text-[20px] font-bold leading-[1.25] tracking-[-0.041em] text-[#333333]">
                  {c.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works — navy, padding 60 24, gap 32 */}
        <section className="bg-[#34519E] px-6 py-[60px]" aria-label="Process">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center font-['Inter',sans-serif] text-[32px] font-bold leading-[1.21] tracking-[-0.0256em] text-white">
              How it Works
            </h2>
            <p className="max-w-[370px] text-center font-['Inter',sans-serif] text-[16px] font-normal leading-[1.21] text-white/60">
              The Unirelo Relocation Process & Services
            </p>
            <div className="w-full max-w-[334px]">
              {TIMELINE_MOBILE.map((step, idx) => (
                <div key={step.title} className="flex gap-[18px]">
                  <div className="flex w-[22px] shrink-0 flex-col items-center">
                    <img alt="" className="size-[22px] shrink-0" src={`${I}/timeline-dot-${idx + 1}.svg`} />
                    {idx < TIMELINE_MOBILE.length - 1 ? (
                      <div
                        className="mt-1 h-14 w-px shrink-0 bg-gradient-to-b from-white/75 via-white/45 to-white/15"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <div className={`min-w-0 flex-1 ${idx < TIMELINE_MOBILE.length - 1 ? "pb-10" : ""}`}>
                    <p className="font-['Inter',sans-serif] text-[18px] font-bold leading-[1.21] text-[#FFF7F7]">
                      {step.title}
                    </p>
                    {step.body ? (
                      <p className="mt-2 font-['Inter',sans-serif] text-[14px] font-normal leading-[1.5] text-white/80">
                        {step.body}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource centre — padding 60 24, gap 42 */}
        <section className="flex flex-col items-center gap-10 bg-[#F7F9FA] px-6 py-[60px]" aria-label="Resources">
          <div className="flex w-full max-w-[370px] flex-col items-stretch gap-1.5 text-center">
            <p className="font-['Encode_Sans',sans-serif] text-[14px] font-semibold uppercase leading-tight tracking-[0.04em] text-[#DE5C35]">
              From Customs Checklists to Global Freight Trends
            </p>
            <h2 className="font-['Inter',sans-serif] text-[40px] font-bold leading-[1.4] tracking-[-0.0205em] text-[#25376A]">
              Resource Centre
            </h2>
          </div>
          <div className="flex w-full flex-col items-center gap-[18px]">
            <h3 className="w-full max-w-[370px] text-left font-['Inter',sans-serif] text-[22px] font-bold leading-[1.5] tracking-[-0.0117em] text-[#25376A]">
              India Relocation Basics
            </h3>
            <MobileResourcePair top={RESOURCE_ROWS[0].top} bottom={RESOURCE_ROWS[0].bottom} />
            <h3 className="mt-2 w-full max-w-[370px] text-left font-['Inter',sans-serif] text-[22px] font-bold leading-[1.5] tracking-[-0.0117em] text-[#25376A]">
              Life in India - The Land of Diversity
            </h3>
            <MobileResourcePair top={RESOURCE_ROWS[1].top} bottom={RESOURCE_ROWS[1].bottom} />
            <MobileResourcePair top={RESOURCE_ROWS[2].top} bottom={RESOURCE_ROWS[2].bottom} />
          </div>
        </section>

        {/* Kickstart — Figma 411:11955: copy + CTA + truck (no quote form on mobile) */}
        <section className="px-8 pb-10 pt-4" aria-labelledby="kick-mobile-heading">
          <h2
            id="kick-mobile-heading"
            className="font-['Inter',sans-serif] text-[28px] font-bold leading-[1.21] tracking-[-0.029em] text-[#25376A]"
          >
            Kickstart Your Relocation to India With Unirelo
          </h2>
          <p className="mt-5 font-['Inter',sans-serif] text-[14px] font-medium leading-[1.5] text-[rgba(37,55,106,0.8)]">
            There’s no place like home, we assure it stays that way, no matter where you move
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-4 rounded-lg px-6 py-3 font-['Inter',sans-serif] text-[16px] font-semibold tracking-[-0.0195em] text-white"
            style={{ backgroundColor: FIGMA_CTA_ORANGE }}
          >
            Get a Quote
            <img alt="" className="size-5 brightness-0 invert" src={imgArrowRight} />
          </button>
          <div className="mt-8 overflow-hidden rounded-b-[10px]">
            <img alt="" className="h-[213px] w-full object-cover object-center" src={`${I}/truck-mask.png`} />
          </div>
        </section>

        <SiteFooterMarketingMobile />
      </div>
    </div>
  );
}
