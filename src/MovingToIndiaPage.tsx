import { useState } from "react";
import {
  imgArrowRight,
  imgCalendarSvg,
  imgCheckCircle,
  imgDropdownSvg,
  imgLocationSvg,
} from "./figmaImageUrls";
import { SiteFooterImageStrip } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { MovingToIndiaMobile } from "./MovingToIndiaMobile";
import {
  ACCORDION,
  I,
  KICK_ORANGE,
  MARKETING_FOOTER_IMAGE,
  NAV_CHEVRON_MOVING,
  RESOURCE_ROWS,
} from "./movingToIndiaConstants";

/**
 * Desktop: Figma 395:4422 — https://www.figma.com/design/vtwIGM5F7iwx4JmgA3duOh/UniRelo---Website-Revamp?node-id=395-4422
 * Mobile: Figma 395:5639 — https://www.figma.com/design/vtwIGM5F7iwx4JmgA3duOh/UniRelo---Website-Revamp?node-id=395-5639
 */

export default function MovingToIndiaPage() {
  const [openAcc, setOpenAcc] = useState(0);
  const [movingAs, setMovingAs] = useState<"home" | "business">("home");

  return (
    <>
      <MovingToIndiaMobile openAcc={openAcc} setOpenAcc={setOpenAcc} />

      <div className="hidden min-h-screen w-full overflow-x-auto bg-[#d4d4d4] lg:block">
      <div className="relative mx-auto min-h-[4760px] w-[1440px] shrink-0 overflow-hidden bg-white" data-node-id="395:4422">
        {/* Decorative ellipses — hero */}
        <div
          className="pointer-events-none absolute left-[186px] top-[245px] size-[337px] rounded-full bg-[#F05022] opacity-60 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[928px] top-[143px] size-[337px] rounded-full bg-[#34519E] opacity-60 blur-[80px]"
          aria-hidden
        />

        {/* Hero frosted bar */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[766px] w-full bg-[rgba(217,217,217,0.17)] backdrop-blur-[120px]"
          aria-hidden
        />

        {/* Hero copy — Figma: same band as main hero image (not duplicated below) */}
        <div className="absolute left-[101px] top-[120px] z-30 flex w-[1200px] items-start justify-between gap-10">
          <div className="max-w-[620px] shrink-0">
            <h2 className="font-['Inter',sans-serif] text-[48px] font-bold leading-[1.15] tracking-[-0.017em] text-[#25376A]">
              Relocating to <span className="text-[#DE5C35]">India?</span>
              <br />
              Unirelo will take care of it!
            </h2>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-4 rounded-lg bg-[#DE5C35] px-6 py-3 font-['Inter',sans-serif] text-[16px] font-semibold tracking-[-0.0195em] text-white"
            >
              Get a Quote
              <img alt="" className="size-5 brightness-0 invert" src={imgArrowRight} />
            </button>
          </div>
          <p className="max-w-[500px] shrink-0 pt-1 text-right font-['Inter',sans-serif] text-[16px] font-medium leading-[1.5] text-[#25376A]">
            Door-to-door international relocation, customs support, and end‑to‑end logistics—made simple.
          </p>
        </div>

        {/* Trust row — readable on light hero */}
        <div
          className="absolute left-1/2 top-[748px] z-20 flex w-[444px] -translate-x-1/2 items-center justify-center gap-8 text-[#25376A] opacity-80"
          data-node-id="395:4426"
        >
          {(["No Hidden Fees", "Fully Insured", "24/7 Support"] as const).map((label) => (
            <div key={label} className="flex items-center gap-2">
              <img alt="" className="size-5 shrink-0" src={imgCheckCircle} />
              <span className="font-['Helvetica',sans-serif] text-[14px] leading-tight tracking-[-0.01em]">{label}</span>
            </div>
          ))}
        </div>

        {/* Primary hero image (Taj / main) — single use; rounded per Figma */}
        <div className="absolute left-[99px] top-[384px] z-10 h-[382px] w-[1241px] overflow-hidden rounded-[16px] shadow-sm">
          <img alt="" className="size-full object-cover" src={`${I}/hero-main-1a7094.png`} />
        </div>
        <div className="absolute left-[835px] top-[892px] z-10 h-[300px] w-[466px] overflow-hidden rounded-2xl shadow-sm">
          <img alt="" className="size-full object-cover" src={`${I}/hero-side.png`} />
        </div>
        <div className="absolute left-[1088px] top-[1086px] z-10 h-[106px] w-[167px]">
          <img alt="" className="size-full" src={`${I}/hero-arrow.svg`} />
        </div>
        <div className="absolute left-[835px] top-[1208px] z-10 h-[277px] w-[225px] overflow-hidden rounded-2xl shadow-sm">
          <img alt="" className="size-full object-cover" src={`${I}/hero-tile-a-4ef398.png`} />
        </div>
        <div className="absolute left-[1076px] top-[1208px] z-10 h-[277px] w-[225px] overflow-hidden rounded-2xl shadow-sm">
          <img alt="" className="size-full object-cover" src={`${I}/hero-tile-b-31298b.png`} />
        </div>

        {/* Why relocate — copy */}
        <h2 className="absolute left-[135px] top-[904px] z-20 w-[429px] font-['Inter',sans-serif] text-[40px] font-bold leading-[1.4] tracking-[-0.0205em] text-[#25376A]">
          Why Relocate to India?
        </h2>
        <p className="absolute left-[135px] top-[972px] z-20 w-[604px] font-['Inter',sans-serif] text-[14px] font-medium leading-[1.5] text-[rgba(37,55,106,0.8)]">
          Relocating from the USA to India can be both a lifestyle upgrade and a strategic move for your family,
          career, and finances. India offers a fast‑growing economy, globally connected cities, and a rich cultural
          landscape, often at a significantly lower cost of living than major US metros. For many returnees and expats,
          that means more support at home, more experiences, and more flexibility with the same (or even lower) monthly
          spend.
        </p>

        {/* Accordion */}
        <div className="absolute left-[135px] top-[1098px] z-20 w-[570px]" data-node-id="395:4501">
          {ACCORDION.map((item, i) => {
            const expanded = openAcc === i;
            return (
              <div
                key={item.title}
                className={`border-b border-[rgba(37,55,106,0.12)] ${expanded ? "min-h-[115px] pb-4" : "h-[65px]"}`}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between pt-4 text-left"
                  onClick={() => setOpenAcc(i)}
                  aria-expanded={expanded}
                >
                  <span className="max-w-[454px] font-['Encode_Sans',sans-serif] text-[20px] font-bold leading-[1.25] tracking-[-0.041em] text-[#25376A]">
                    {item.title}
                  </span>
                  <span className="relative mt-1 size-6 shrink-0">
                    <img
                      alt=""
                      className={`size-6 transition-transform ${expanded ? "rotate-180" : ""}`}
                      src={NAV_CHEVRON_MOVING}
                    />
                  </span>
                </button>
                {expanded && item.body ? (
                  <p className="mt-3 max-w-[454px] font-['Inter',sans-serif] text-[14px] font-medium leading-[1.714] text-[rgba(37,55,106,0.8)]">
                    {item.body}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Gradient band: title + cards only (CTA + Taj live in hero above — no duplicate) */}
        <div className="absolute left-0 top-[1565px] w-[1440px]">
          <div
            className="pointer-events-none absolute inset-0 min-h-[720px] bg-gradient-to-b from-white to-[#BEDBFF]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[186px] top-[180px] size-[300px] rounded-full bg-[#FF6B35] opacity-25 blur-[90px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[120px] top-[120px] size-[300px] rounded-full bg-[#FF6B35] opacity-20 blur-[90px]"
            aria-hidden
          />

          <div className="relative z-10 px-[101px] pb-14 pt-20">
            <h2 className="mx-auto max-w-[800px] text-center font-['Inter',sans-serif] text-[40px] font-bold leading-[1.4] tracking-[-0.0205em] text-[#25376A]">
              How Unirelo supports your move to India
            </h2>
            <div className="mx-auto mt-12 flex w-[1170px] flex-row justify-between gap-[30px]">
              {(
                [
                  { title: "Door‑to‑door packing, shipping and delivery", n: "01" },
                  { title: "Customs clearance & documentation support", n: "02" },
                  { title: "Secure storage at origin & destination", n: "03" },
                  { title: "Dedicated move coordinator", n: "04" },
                ] as const
              ).map((c) => (
                <div
                  key={c.n}
                  className="flex h-[395px] w-[270px] flex-col justify-between rounded-[24px] border border-[rgba(217,217,217,0.5)] bg-[rgba(217,217,217,0.2)] p-7 backdrop-blur-md"
                >
                  <p className="font-['Encode_Sans',sans-serif] text-[48px] font-bold leading-[1.21] tracking-[-0.017em] text-[#FF6B35]">
                    {c.n}
                  </p>
                  <p className="font-['Encode_Sans',sans-serif] text-[20px] font-bold leading-[1.25] tracking-[-0.041em] text-[#333333]">
                    {c.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resource accent (orange) */}
        <div className="absolute left-[121px] top-[2227px] z-10 h-[106px] w-[167px]">
          <img alt="" className="size-full" src={`${I}/resource-illustration.svg`} />
        </div>

        {/* How it works — navy panel */}
        <div className="absolute left-0 top-[2333px] h-[768px] w-full bg-[#34519E]" data-node-id="395:4558" />
        <div
          className="pointer-events-none absolute left-[716.5px] top-[2536px] h-[464.5px] w-px bg-gradient-to-b from-transparent via-white/70 to-transparent"
          aria-hidden
        />

        <h2 className="absolute left-1/2 top-[2433px] w-[370px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[32px] font-bold leading-[1.21] tracking-[-0.0256em] text-white">
          How it Works
        </h2>
        <p className="absolute left-1/2 top-[2488px] w-[370px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-normal leading-[1.21] text-white/60">
          The Unirelo Relocation Process & Services
        </p>

        {/* Timeline illustration */}
        <div className="absolute left-[135px] top-[2901px] z-10 h-[200px] w-[279px]">
          <img alt="" className="size-full" src={`${I}/how-it-works-illustration.svg`} />
        </div>

        {/* Step copy + dots */}
        <div className="absolute left-[293px] top-[2581.5px] w-[370px] text-right">
          <p className="font-['Inter',sans-serif] text-[18px] font-bold leading-[1.21] text-[#FFF7F7]">Pre‑move survey & quotation</p>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] font-normal leading-[1.5] text-white/80">
            A virtual or in‑home survey to assess volume, packing needs and special items, followed by a clear,
            all‑inclusive international move quote.
          </p>
        </div>
        <img alt="" className="absolute left-[706px] top-[2581.5px] size-[22px]" src={`${I}/timeline-dot-1.svg`} />

        <div className="absolute left-[193px] top-[2774.5px] w-[470px]">
          <p className="text-right font-['Inter',sans-serif] text-[18px] font-bold leading-[1.21] text-[#FFF7F7]">
            International transport, tracking & delivery
          </p>
          <p className="ml-[100px] mt-4 text-right font-['Inter',sans-serif] text-[14px] font-normal leading-[1.5] text-white/80">
            Coordination of door‑to‑door moves from your US address to your new home in India, with shipment tracking
            and proactive updates at key milestones.
          </p>
        </div>
        <img alt="" className="absolute left-[706px] top-[2774.5px] size-[22px]" src={`${I}/timeline-dot-3.svg`} />

        <div className="absolute left-[770px] top-[2677.5px] w-[370px]">
          <p className="font-['Inter',sans-serif] text-[18px] font-bold leading-[1.21] text-[#FFF7F7]">Professional packing & handling</p>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] font-normal leading-[1.5] text-white/80">
            Export‑grade packing, labelling and crating for fragile, bulky and high‑value items, aligned with Indian
            customs and carrier requirements.
          </p>
        </div>
        <img alt="" className="absolute left-[706px] top-[2677.5px] size-[22px]" src={`${I}/timeline-dot-2.svg`} />

        <div className="absolute left-[770px] top-[2875.5px] w-[370px]">
          <p className="font-['Inter',sans-serif] text-[18px] font-bold leading-[1.21] text-[#FFF7F7]">
            Unpacking & basic setup at destination
          </p>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] font-normal leading-[1.5] text-white/80">
            At destination, Unirelo’s partners handle unloading, unpacking, placement of major items and removal of
            packing debris to help you settle in faster.
          </p>
        </div>
        <img alt="" className="absolute left-[706px] top-[2875.5px] size-[22px]" src={`${I}/timeline-dot-4.svg`} />

        {/* Resource centre */}
        <div className="absolute left-[135px] top-[3201px] flex w-[1199px] items-end justify-between gap-8">
          <div>
            <p className="font-['Encode_Sans',sans-serif] text-[14px] font-semibold uppercase leading-[1.1] tracking-[0.04em] text-[#DE5C35]">
              From Customs Checklists to Global Freight Trends
            </p>
            <h2 className="mt-4 font-['Inter',sans-serif] text-[40px] font-bold leading-[1.4] tracking-[-0.0205em] text-[#25376A]">
              Resource Centre
            </h2>
          </div>
        </div>

        <h3 className="absolute left-[135px] top-[3342px] font-['Inter',sans-serif] text-[22px] font-bold leading-[1.5] tracking-[-0.0117em] text-[#25376A]">
          India Relocation Basics
        </h3>
        <h3 className="absolute left-[549px] top-[3342px] font-['Inter',sans-serif] text-[22px] font-bold leading-[1.5] tracking-[-0.0117em] text-[#25376A]">
          Life in India - The Land of Diversity
        </h3>

        {[135, 549, 935].map((left, col) => (
          <div key={left} className="absolute top-[3405px] w-[370px]" style={{ left }}>
            <ResourcePair top={RESOURCE_ROWS[col].top} bottom={RESOURCE_ROWS[col].bottom} />
          </div>
        ))}

        {/* Kickstart — screenshot: left copy, right card overlapping full-width truck (rounded bottom) */}
        <section
          className="absolute left-[135px] top-[3720px] z-10 w-[1170px]"
          aria-labelledby="kickstart-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-[88px] h-[520px] overflow-hidden rounded-b-[28px]">
            <img
              alt=""
              className="h-full w-full object-cover object-center"
              src={`${I}/truck-mask.png`}
            />
          </div>

          <div className="relative z-20 flex min-h-[560px] flex-row items-start justify-between gap-10 pb-6">
            <div className="max-w-[540px] shrink-0 pt-4">
              <h2
                id="kickstart-heading"
                className="font-['Inter',sans-serif] text-[40px] font-bold leading-[1.28] tracking-[-0.02em] text-[#25376A]"
              >
                Kickstart Your Relocation to India With{" "}
                <span className="text-[#E06236]" style={{ color: KICK_ORANGE }}>
                  Unirelo
                </span>
              </h2>
              <p className="mt-5 max-w-[440px] font-['Inter',sans-serif] text-[15px] font-medium leading-[1.55] text-[#6B7280]">
                There’s no place like home, we assure it stays that way, no matter where you move
              </p>
            </div>

            <KickstartQuoteForm
              accent={KICK_ORANGE}
              className="relative z-30 w-[428px] shrink-0 shadow-[0_28px_90px_rgba(37,55,106,0.2)]"
              movingAs={movingAs}
              setMovingAs={setMovingAs}
            />
          </div>
        </section>

        <SiteFooterImageStrip
          src={MARKETING_FOOTER_IMAGE}
          className="absolute -left-[15px] top-[4344px] w-[1470px]"
          imgClassName="object-cover"
        />

        <SiteHeader variant="desktop" className="absolute left-[135px] top-[10px] z-50 flex h-[46px] w-[1170px] items-center" />
      </div>
      </div>
    </>
  );
}

function KickstartQuoteForm({
  movingAs,
  setMovingAs,
  className = "",
  accent = "#E06236",
}: {
  movingAs: "home" | "business";
  setMovingAs: (v: "home" | "business") => void;
  className?: string;
  accent?: string;
}) {
  return (
    <div className={`w-[428px] rounded-2xl border border-[#E4E6E8] bg-white p-8 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-['Inter',sans-serif] text-[22px] font-bold leading-[1.5] tracking-[-0.0117em] text-[#25376A]">
          Where are you moving?
        </h3>
        <span className="mt-1 flex h-6 shrink-0 items-center rounded-[18px] bg-[#E4E6E8] px-3 font-['Helvetica',sans-serif] text-[10px] font-medium uppercase tracking-[0.06em] text-[#0A353B]">
          STEP 1/2
        </span>
      </div>

      <div className="relative mt-6 rounded-[10px] border border-[#E4E6E8] bg-white px-5 py-4">
        <div className="flex items-start gap-2">
          <img alt="" className="mt-0.5 size-3 shrink-0 opacity-70" src={imgLocationSvg} />
          <div className="min-w-0">
            <p className="pl-0.5 font-['Helvetica',sans-serif] text-[10px] font-medium uppercase tracking-[0.08em] text-[#6B7280]">
              Origin
            </p>
            <p className="font-['Helvetica',sans-serif] text-[14px] text-[#6C8689]">City, Port, Zip Code </p>
          </div>
        </div>
        <div className="my-3 h-px w-full bg-[#E4E6E8]" />
        <div className="flex items-start gap-2">
          <img alt="" className="mt-0.5 size-3 shrink-0 opacity-70" src={imgLocationSvg} />
          <div className="min-w-0">
            <p className="pl-0.5 font-['Helvetica',sans-serif] text-[10px] font-medium uppercase tracking-[0.08em] text-[#6B7280]">
              Destination
            </p>
            <p className="font-['Helvetica',sans-serif] text-[14px] text-[#6C8689]">City, Port, Zip Code </p>
          </div>
        </div>
        <img alt="" className="absolute right-[22px] top-[40px] h-2 w-2 opacity-60" src={imgDropdownSvg} />
        <div className="absolute right-3 top-[36px] flex size-10 items-center justify-center">
          <img alt="" className="size-10 max-w-none" src={`${I}/swap-route.svg`} />
        </div>
      </div>

      <div className="relative mt-4 flex min-h-[69px] items-start rounded-[10px] border border-[#E4E6E8] bg-white px-5 py-3">
        <div className="min-w-0 flex-1">
          <p className="pl-0.5 font-['Helvetica',sans-serif] text-[10px] font-medium uppercase tracking-[0.08em] text-[#6B7280]">Moving On</p>
          <p className="font-['Helvetica',sans-serif] text-[14px] font-bold text-[#1A2B56]">23 Jun’24</p>
          <p className="font-['Helvetica',sans-serif] text-[10px] text-[#6C8689]">Sunday</p>
        </div>
        <img alt="" className="absolute right-5 top-4 size-6 shrink-0 opacity-80" src={imgCalendarSvg} />
        <img alt="" className="absolute right-[170px] top-10 h-2 w-2 opacity-60" src={imgDropdownSvg} />
      </div>

      <h4 className="mt-6 font-['Helvetica',sans-serif] text-[14px] font-medium text-[#25376A]">Moving As</h4>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => setMovingAs("home")}
          className={`flex h-[46px] w-[103px] items-center justify-center gap-2 rounded-[10px] border px-2 ${
            movingAs === "home" ? "" : "border-[#E4E6E8] bg-white"
          }`}
          style={
            movingAs === "home"
              ? { borderColor: accent, backgroundColor: `${accent}18` }
              : undefined
          }
        >
          <span
            className={`font-['Helvetica',sans-serif] text-[14px] ${
              movingAs === "home" ? "font-medium" : "text-[#25376A]"
            }`}
            style={movingAs === "home" ? { color: accent } : undefined}
          >
            Home
          </span>
          {movingAs === "home" ? (
            <span
              className="size-[18px] rounded-full border-[5px] bg-white"
              style={{ borderColor: accent }}
              aria-hidden
            />
          ) : (
            <span className="size-[18px] rounded-full border border-[#CED7D8] bg-white" aria-hidden />
          )}
        </button>
        <button
          type="button"
          onClick={() => setMovingAs("business")}
          className={`flex h-[46px] w-[127px] items-center justify-center gap-2 rounded-[10px] border px-2 ${
            movingAs === "business" ? "" : "border-[#E4E6E8] bg-white"
          }`}
          style={
            movingAs === "business"
              ? { borderColor: accent, backgroundColor: `${accent}18` }
              : undefined
          }
        >
          <span
            className={`font-['Helvetica',sans-serif] text-[14px] ${
              movingAs === "business" ? "font-medium" : "text-[#25376A]"
            }`}
            style={movingAs === "business" ? { color: accent } : undefined}
          >
            Business
          </span>
          {movingAs === "business" ? (
            <span
              className="size-[18px] rounded-full border-[5px] bg-white"
              style={{ borderColor: accent }}
              aria-hidden
            />
          ) : (
            <span className="size-[18px] rounded-full border border-[#CED7D8] bg-white" aria-hidden />
          )}
        </button>
      </div>

      <button
        type="button"
        className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl font-['Inter',sans-serif] text-[16px] font-semibold tracking-[-0.0195em] text-white"
        style={{
          backgroundColor: accent,
          boxShadow: "0 12px 28px rgba(224, 98, 54, 0.38)",
        }}
      >
        Add Contact Detail
        <img alt="" className="size-5 brightness-0 invert" src={imgArrowRight} />
      </button>
    </div>
  );
}

function ResourcePair({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="flex w-[370px] flex-col gap-[14px]">
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
