import type { SVGProps } from "react";
import { useState } from "react";
import {
  img,
  imgArrowBackIos,
  imgArrowForwardIos,
  imgArrowRight,
  imgArrowRight1,
  imgEllipse3,
  imgEllipse4,
  imgEllipse5,
  imgGroup,
  imgGroup1701,
  imgImage26,
  imgIndia46286981,
  img21518460293,
  imgPhone,
  imgRedSemiTruckDrivingHighwaySunset3,
  imgScreenshot20260303At61838Pm1,
  imgShield,
  imgStar1,
  imgUk46286381,
  imgVector,
  imgVector1,
  imgVector2,
  imgVector3,
} from "./figmaImageUrls";

/**
 * Mobile: https://www.figma.com/design/vtwIGM5F7iwx4JmgA3duOh/UniRelo---Website-Revamp?node-id=395-4031
 * Full scroll (402×4741 artboard); fluid width below lg breakpoint.
 */
type ExpertiseTab = "international" | "domestic";

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="#25376A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightSmall({ className }: { className?: string }) {
  return <img alt="" className={className} src={imgArrowRight1} />;
}

/** Single international card (270×375): flag, title, bullets, divider, Know More */
function ExpertiseCountryCard(props: { flagSrc: string; title: string }) {
  const { flagSrc, title } = props;
  return (
    <article className="relative h-[375px] w-[270px] shrink-0 snap-center rounded-xl border border-[#D5D8DD] bg-[#FEFEFE]">
      <img alt="" className="absolute left-6 top-6 size-20 object-contain" src={flagSrc} />
      <h3 className="absolute left-6 top-[133px] font-['Helvetica:Bold',sans-serif] text-[22px] font-bold leading-normal tracking-[-0.02em] text-[#25376A]">
        {title}
      </h3>
      <ul className="absolute left-6 top-[178px] space-y-2 font-['Inter:Regular',sans-serif] text-[13px] leading-normal text-[#25376A]">
        <li className="list-disc pl-4">Licensed &amp; Insured</li>
        <li className="list-disc pl-4">Door-to-Door Service</li>
        <li className="list-disc pl-4">24/7 Support</li>
      </ul>
      <div className="absolute left-6 right-6 top-[310px] h-px bg-[#E6E6E6]" />
      <button
        type="button"
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 font-['Helvetica:Bold',sans-serif] text-[14px] font-bold leading-normal tracking-[-0.02em] text-[#25376A]"
      >
        Know More
        <ArrowRightSmall className="size-3.5" />
      </button>
    </article>
  );
}

function TestimonialCard() {
  return (
    <div className="flex w-[294px] shrink-0 snap-start flex-col gap-8 rounded-[10px] border border-white/30 bg-white/10 p-8">
      <div className="flex flex-col gap-4">
        <img alt="" className="h-6 w-8 object-contain opacity-80" src={img} />
        <p className="font-['Encode_Sans',sans-serif] text-[16px] font-semibold leading-8 tracking-[-0.02em] text-white sm:text-[18px]">
          Whether you&apos;re shipping urgent parts, high-value electronics, or restocking fast-moving inventory,
          UniRelo delivers.
        </p>
      </div>
      <div>
        <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white sm:text-[18px]">
          Mark Johnson
        </p>
        <p className="mt-0.5 font-['Inter:Regular',sans-serif] text-[13px] text-white">Logistics Manager</p>
      </div>
    </div>
  );
}

export default function UniReloMobilePage() {
  const [expertiseTab, setExpertiseTab] = useState<ExpertiseTab>("international");

  return (
    <div
      className="relative w-full overflow-x-hidden bg-white lg:hidden"
      data-name="iPhone 17 - 1"
      data-node-id="395:4031"
    >
      <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-[18px] py-[18px] shadow-[0px_2px_4px_0px_rgba(131,131,131,0.25)]">
        <div className="relative h-[46px] w-[118px] shrink-0">
          <div className="absolute inset-[15.22%_0.41%_15.22%_0]">
            <img alt="UniRelo" className="block size-full max-w-none object-contain" src={imgGroup} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-9 items-center rounded-full border border-[#34519E] pl-2.5 pr-0.5">
            <span className="pr-1.5 text-[12px] leading-none text-[#34519E]">Call Us Now</span>
            <div className="flex size-[34px] items-center justify-center rounded-full bg-[#34519E]">
              <img alt="" className="size-4 object-contain brightness-0 invert" src={imgPhone} />
            </div>
          </div>
          <button type="button" className="-mr-1 p-1 text-[#25376A]" aria-label="Open menu">
            <MenuIcon />
          </button>
        </div>
      </header>

      <div className="flex w-full flex-col">
        {/* Hero — Frame 395:4059 */}
        <div
          className="w-full bg-[rgba(217,217,217,0.17)] px-[18px] pb-10 pt-7 backdrop-blur-[200px]"
          style={{ WebkitBackdropFilter: "blur(200px)" }}
        >
          <div className="mx-auto flex w-full max-w-[367px] flex-col items-center gap-10">
            <div className="flex h-[26px] items-center gap-1 rounded-md bg-[rgba(52,81,158,0.1)] px-2.5 py-2">
              <img alt="" className="size-4 shrink-0" src={imgShield} />
              <span className="text-center text-[10px] font-bold leading-[2em] tracking-[-0.015em] text-[#34519E]">
                20+ Years of Trusted Service
              </span>
            </div>

            <div className="relative w-full px-0 text-center">
              <h1 className="whitespace-pre-line font-['Inter:Bold',sans-serif] text-[36px] font-bold leading-[1.28] tracking-[-0.023em] text-[#1E1D59]">
                {`Relocation \nwon't be a challenge,\nwith UniRelo.`}
              </h1>
              <div className="mx-auto mt-4 h-[3px] w-full max-w-[348px] rounded-full bg-[#DE5C35]" />
            </div>

            {/* Stats: 100+ & 4.8 top row; 25+ full width — Group 395:4069 */}
            <div className="relative h-[262px] w-full max-w-[338px]">
              <div className="absolute left-0 top-10 w-[152px] rounded-2xl bg-[rgba(240,80,34,0.2)] px-4 pb-4 pt-7 text-center">
                <p className="font-['Inter:Bold',sans-serif] text-[18px] font-bold tracking-[-0.046em] text-black">100+</p>
                <p className="mx-auto mt-2 max-w-[116px] text-left text-[12px] leading-tight text-black">
                  Our Esteemed Clients and Partners
                </p>
              </div>
              <div className="absolute right-0 top-0 flex w-[166px] flex-col rounded-2xl bg-[rgba(255,255,255,0.43)] px-4 pb-4 pt-4">
                <div className="mb-3 flex justify-start gap-1 pl-0.5">
                  <img alt="" className="size-5 rounded-full ring-1 ring-white/60" src={imgEllipse3} />
                  <img alt="" className="size-5 rounded-full ring-1 ring-white/60" src={imgEllipse4} />
                  <img alt="" className="size-5 rounded-full ring-1 ring-white/60" src={imgEllipse5} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-['Inter:Bold',sans-serif] text-[24px] font-bold tracking-[-0.024em] text-[#25376A]">
                    4.8
                  </span>
                  <img alt="" className="size-5" src={imgStar1} />
                </div>
                <p className="mt-3 max-w-[125px] text-[12px] leading-tight text-[rgba(52,81,158,0.6)]">
                  +120 Successful Stories of our clients
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full max-w-[337px] rounded-2xl bg-[rgba(52,81,158,0.2)] px-5 pb-3 pt-6 text-center">
                <p className="font-['Inter:Bold',sans-serif] text-[18px] font-bold tracking-[-0.046em] text-black">25+</p>
                <p className="mx-auto mt-1 max-w-[161px] text-[12px] leading-tight text-black">Years of Dedicated Services</p>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full max-w-[337px] items-center justify-center gap-4 rounded-lg bg-[#DE5C35] px-6 py-3 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold tracking-[-0.02em] text-white"
            >
              Get a Quote
              <img alt="" className="size-5" src={imgArrowRight} />
            </button>
          </div>
        </div>

        {/* Expertise — 395:4164 */}
        <section className="relative w-full overflow-hidden bg-[#F7F9FA] px-6 py-[60px]">
          <div className="pointer-events-none absolute -left-[28rem] -top-8 h-[547px] w-[1202px] opacity-20">
            <img alt="" className="h-full w-full object-cover" src={imgImage26} />
          </div>

          <div className="relative z-[1] mx-auto flex w-full max-w-[375px] flex-col items-center gap-[22px]">
            <h2 className="w-full whitespace-pre-line text-left font-['Inter:Bold',sans-serif] text-[38px] font-bold leading-[1.26] tracking-[-0.022em] text-[#25376A]">
              {`Our Expertise. \nOur Strength.`}
            </h2>

            <div
              className="inline-flex w-full max-w-[calc(100vw-48px)] flex-wrap justify-center gap-0 rounded-full bg-[#EFF1F5] sm:flex-nowrap"
              role="tablist"
              aria-label="Relocation expertise"
            >
              <button
                type="button"
                role="tab"
                aria-selected={expertiseTab === "international"}
                onClick={() => setExpertiseTab("international")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3.5 py-2.5 font-['Helvetica:Bold',sans-serif] text-[12px] font-bold tracking-[-0.02em] transition-colors min-[360px]:px-4 ${
                  expertiseTab === "international"
                    ? "bg-[#34519E] text-white"
                    : "bg-[#193462] text-[#34519E]"
                }`}
              >
                <img alt="" className="size-6 brightness-0 invert" src={imgVector} />
                <span className="text-left leading-tight">International Relocation</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={expertiseTab === "domestic"}
                onClick={() => setExpertiseTab("domestic")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3.5 py-2.5 font-['Helvetica:Bold',sans-serif] text-[12px] font-bold tracking-[-0.02em] transition-colors min-[360px]:px-4 ${
                  expertiseTab === "domestic" ? "bg-[#34519E] text-white" : "bg-[#193462] text-[#34519E]"
                }`}
              >
                <img
                  alt=""
                  className="size-6 brightness-0 invert"
                  src={imgVector1}
                />
                <span className="text-left leading-tight">Domestic Relocation</span>
              </button>
            </div>

            {expertiseTab === "international" ? (
              <div className="w-full pt-2.5">
                <div className="-mx-1 flex gap-[18px] overflow-x-auto overflow-y-hidden px-1 pb-2 pt-2 [scrollbar-width:thin] snap-x snap-mandatory">
                  <ExpertiseCountryCard flagSrc={imgIndia46286981} title="India" />
                  <ExpertiseCountryCard flagSrc={imgUk46286381} title="United Kingdom" />
                </div>
              </div>
            ) : (
              <div className="w-full space-y-6 pt-2">
                <p className="font-['Inter:Bold',sans-serif] text-[17px] font-bold leading-snug text-[#25376A]">
                  {`Get Best Rates for Intercity & Interstate Relocation Across United States.`}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#DE5C35] px-6 py-3 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white"
                >
                  Get a Quote
                  <img alt="" className="size-5" src={imgArrowRight} />
                </button>
                <img alt="" className="w-full rounded-2xl object-contain" src="/images/us-domestic-map.svg" />
              </div>
            )}
          </div>
        </section>

        {/* Why Choose — 395:4219 */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#DE5C35] to-[#DA3832] px-6 py-[60px]">
          <div
            className="pointer-events-none absolute inset-0 bg-[rgba(217,217,217,0.17)] backdrop-blur-[200px]"
            style={{ WebkitBackdropFilter: "blur(200px)" }}
          />
          <div className="relative z-[1] mx-auto w-full max-w-[402px] text-white">
            <h2 className="font-['Inter:Bold',sans-serif] text-[32px] font-bold leading-[1.2] tracking-[-0.02em] sm:text-[40px]">
              Why Choose UniRelo.
            </h2>
            <div className="mt-8 flex flex-col gap-3.5">
              <p className="font-['Helvetica:Bold',sans-serif] text-[18px] font-bold tracking-[-0.039em] sm:text-[21px]">
                25 Years of Expertise
              </p>
              <p className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-normal text-white">
                {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
              </p>
              <div className="mt-2 space-y-0 border-t border-white/10">
                <p className="border-b border-white/10 py-4 font-['Helvetica:Regular',sans-serif] text-[15px] leading-snug text-white">
                  Licensed &amp; Assured for Global Movement
                </p>
                <p className="py-4 font-['Helvetica:Regular',sans-serif] text-[15px] leading-snug text-white">
                  24*7 Worldwide Customer Support
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[rgba(255,255,255,0.08)] p-8">
              <div className="flex flex-row items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-['Inter:Bold',sans-serif] text-[32px] font-bold">4.8</span>
                  <img alt="" className="size-8" src={imgStar1} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/60">Powered By</p>
                  <div className="relative mt-1 h-[26px] w-[168px]">
                    <img alt="Shopper Approved" className="absolute left-0 top-0 max-h-[26px] w-auto object-contain" src={imgGroup1701} />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <img alt="" className="size-11 rounded-full ring-1 ring-white/40" src={imgEllipse3} />
                <img alt="" className="size-11 rounded-full ring-1 ring-white/40" src={imgEllipse4} />
                <img alt="" className="size-11 rounded-full ring-1 ring-white/40" src={imgEllipse5} />
                <span className="ml-1 text-[13px] leading-tight text-white">+120 Successful Stories of our clients</span>
              </div>
              <div className="my-5 h-px w-full bg-white/20" />
              <p className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-relaxed text-white">
                {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
              </p>
              <button type="button" className="mt-5 font-['Inter:Bold',sans-serif] text-[14px] font-bold underline">
                KNOW MORE
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials — 408:2030 */}
        <section className="w-full bg-[#34519E] px-6 py-[60px]">
          <div className="mx-auto flex w-full max-w-[375px] flex-col items-center gap-10">
            <div className="w-full space-y-3 px-5 text-left">
              <p
                className="font-['Encode_Sans',sans-serif] text-[12px] font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-[14px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Testimonials
              </p>
              <h2 className="font-['Inter:Bold',sans-serif] text-[24px] font-bold leading-tight tracking-[-0.03em] text-[#F8FBFF] sm:text-[28px]">
                Trusted by 30000+ Customers Worldwide
              </h2>
            </div>
            <div className="flex w-full max-w-[379px] gap-2.5 overflow-x-auto px-2 py-1 [scrollbar-width:thin] snap-x snap-mandatory">
              <TestimonialCard />
              <TestimonialCard />
            </div>
            <div className="flex w-full max-w-[320px] items-center gap-3 px-2">
              <button type="button" className="shrink-0 p-2 opacity-80" aria-label="Previous testimonial">
                <div className="relative size-6">
                  <img alt="" className="absolute inset-0 size-full" src={imgArrowBackIos} />
                  <img alt="" className="absolute inset-[9%_27%_9%_24%] size-3 object-contain" src={imgVector2} />
                </div>
              </button>
              <div className="flex min-w-0 flex-1 gap-1.5">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full ${i === 1 ? "bg-white" : "bg-white/20"}`}
                  />
                ))}
              </div>
              <button type="button" className="shrink-0 p-2 opacity-80" aria-label="Next testimonial">
                <div className="relative size-6">
                  <img alt="" className="absolute inset-0 size-full" src={imgArrowForwardIos} />
                  <img alt="" className="absolute inset-[9%_24%_9%_27%] size-3 object-contain" src={imgVector3} />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Kickstart — 411:11954 */}
        <section className="relative w-full px-8 pb-16 pt-16">
          <div className="relative mx-auto w-full max-w-[338px]">
            <h2 className="font-['Inter:Bold',sans-serif] text-[26px] font-bold leading-tight tracking-[-0.03em] text-[#25376A] sm:text-[28px]">
              Kickstart Your Relocation to India With Unirelo
            </h2>
            <p className="mt-4 font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-normal text-[rgba(37,55,106,0.8)]">
              There&apos;s no place like home, we assure it stays that way, no matter where you move
            </p>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-4 rounded-lg bg-[#DE5C35] px-6 py-3 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white"
            >
              Get a Quote
              <img alt="" className="size-5" src={imgArrowRight} />
            </button>

            <div className="relative mt-10 h-[240px] w-full overflow-hidden rounded-lg">
              <img
                alt=""
                className="absolute -left-24 top-0 h-[200px] w-[360px] max-w-none object-cover"
                src={imgRedSemiTruckDrivingHighwaySunset3}
              />
            </div>
            <div className="relative -mt-8 h-[213px] w-full overflow-hidden rounded-lg bg-neutral-200">
              <img
                alt=""
                className="h-full w-full object-cover"
                src={img21518460293}
              />
            </div>
          </div>
        </section>

        {/* Full-bleed screenshot — 408:2083 */}
        <div className="relative w-full">
          <img
            alt="UniRelo cargo consolidation"
            className="block h-auto w-full object-cover object-top"
            src={imgScreenshot20260303At61838Pm1}
          />
        </div>
      </div>
    </div>
  );
}
