import { useState } from "react";

/**
 * Full desktop frame from Figma (generated via MCP; Tailwind + absolute layout).
 * Source: https://www.figma.com/design/vk4B6Ls7MojXECi1ALNLpO/UniRelo---Website-Revamp--Copy-?node-id=395-3420
 * Domestic expertise tab: https://www.figma.com/design/vtwIGM5F7iwx4JmgA3duOh/UniRelo---Website-Revamp?node-id=395-3851
 * Asset URLs expire after ~7 days — export from Figma or host locally for production.
 */
import { SiteHeader } from "./components/layout/SiteHeader";
import {
  img,
  imgArrowBackIos,
  imgArrowForwardIos,
  imgArrowRight,
  imgArrowRight1,
  imgArrowRight2,
  imgCalendarSvg,
  imgCalendarSvg1,
  imgCheckCircle,
  imgDropdownSvg,
  imgEllipse1,
  imgEllipse10,
  imgEllipse11,
  imgEllipse12,
  imgEllipse3,
  imgEllipse4,
  imgEllipse5,
  imgEllipse6,
  imgEllipse7,
  imgEllipse8,
  imgEllipse9,
  imgGroup,
  imgGroup1,
  imgGroup1696,
  imgGroup1697,
  imgGroup1701,
  imgGroup2,
  imgIcon,
  imgIcon1,
  imgImage26,
  imgIndia46286981,
  imgLocationSvg,
  imgLocationSvg1,
  imgLocationSvg2,
  img21518460292,
  img21518460293,
  imgPath2183,
  imgPath2184,
  imgPath2185,
  imgPath2186,
  imgPath2187,
  imgPath2188,
  imgPath2201,
  imgRectangle34624350,
  imgRedSemiTruckDrivingHighwaySunset2,
  imgRedSemiTruckDrivingHighwaySunset3,
  imgRelocationWontBeAChallengeWithUnirelo,
  imgScreenshot20260303At61838Pm1,
  imgShield,
  imgStar1,
  imgStar2,
  imgUk46286381,
  img36MulticolorFlagMc36FlagMalaysia,
  img36MulticolorFlagMc36FlagMonaco,
  imgVector,
  imgVector1,
  imgVector2,
  imgVector3,
  imgVector4,
  imgVector7,
  imgVector8,
  imgVector9,
} from "./figmaImageUrls";

type ExpertiseTab = "international" | "domestic";

export default function UniReloFullPage() {
  const [expertiseTab, setExpertiseTab] = useState<ExpertiseTab>("international");

  return (
    <div
      className="relative mx-auto hidden min-h-[4580px] w-full max-w-[1440px] shrink-0 bg-white lg:block lg:w-[1440px]"
      data-name="Desktop - 3"
      data-node-id="395:3420"
    >
      <div
        className="absolute left-0 top-[812px] h-[768px] w-[1440px] overflow-hidden bg-white"
        data-node-id="395:3433"
      >
        <div className="absolute contents left-[270px] top-0" data-node-id="395:3434">
          <div className="absolute h-[646px] left-[270px] top-0 w-[1170px]" data-node-id="395:3435">
            <div className="absolute h-[936px] left-0 opacity-20 top-[-221px] w-[2057px]" data-name="image 26" data-node-id="395:3436">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage26} />
            </div>
          </div>
          <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-1/2 not-italic text-[#25376a] text-[40px] text-center top-[85px] tracking-[-0.8192px] w-[770px]" data-node-id="395:3437">
            <span className="leading-[48px]">Our Expertise</span>
            <span className="leading-[48px] text-[#e81d29]">.</span>
            <span className="leading-[48px]">{` Our Strength`}</span>
            <span className="leading-[48px] text-[#e81d29]">.</span>
          </p>
        </div>
        {expertiseTab === "international" ? (
          <div
            className="-translate-x-1/2 absolute bg-[#de5c35] content-stretch flex gap-[16px] items-center left-[calc(50%+0.5px)] px-[24px] py-[12px] rounded-[8px] top-[646px]"
            data-name="Button"
            data-node-id="395:3438"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px] whitespace-nowrap" data-node-id="395:3439">
              Get a Quote
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="ArrowRight" data-node-id="395:3440">
              <img alt="" className="absolute block max-w-none size-full" src={imgArrowRight} />
            </div>
          </div>
        ) : null}
        {expertiseTab === "international" ? (
          <>
        <div className="absolute contents left-[135px] top-[269px]" data-node-id="403:1472">
          <div className="absolute contents left-[135px] top-[269px]" data-node-id="395:3443">
            <div className="absolute bg-[#eaecef] border border-[#d5d8dd] border-solid h-[333px] left-[135px] rounded-[12px] top-[269px] w-[270px]" data-node-id="395:3444" />
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] left-[160px] not-italic text-[#25376a] text-[22px] top-[418.5px] tracking-[-0.44px] whitespace-nowrap" data-node-id="395:3445">
              <p className="leading-[1.5]">India</p>
            </div>
            <div className="absolute left-[159px] size-[80px] top-[293px]" data-name="india_4628698 1" data-node-id="395:3446">
              <img alt="" className="absolute block max-w-none size-full" src={imgIndia46286981} />
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[18px] items-start justify-center left-[159px] top-[459px]" data-node-id="395:3453">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3454">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3455">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Licensed & Insured`}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3456">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3457">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">Door-to-Door Service</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3458">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3459">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">24/7 Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[437px] top-[269px]" data-node-id="395:3460">
          <div className="absolute bg-[#fefefe] border border-[#d5d8dd] border-solid h-[333px] left-[437px] rounded-[12px] top-[269px] w-[270px]" data-node-id="395:3461" />
          <div className="absolute content-stretch flex flex-col gap-[18px] items-start justify-center left-[461px] top-[459px]" data-node-id="395:3462">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3463">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3464">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Licensed & Insured`}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3465">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3466">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">Door-to-Door Service</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3467">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3468">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">24/7 Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute left-[461px] size-[80px] top-[293px]" data-name="uk_4628638 1" data-node-id="395:3469">
            <img alt="" className="absolute block max-w-none size-full" src={imgUk46286381} />
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] left-[462px] not-italic text-[#25376a] text-[22px] top-[418.5px] tracking-[-0.44px] whitespace-nowrap" data-node-id="395:3474">
            <p className="leading-[1.5]">United Kingdom</p>
          </div>
        </div>
        <div className="absolute contents left-[739px] top-[269px]" data-node-id="395:3475">
          <div className="absolute bg-[#fefefe] border border-[#d5d8dd] border-solid h-[333px] left-[739px] rounded-[12px] top-[269px] w-[270px]" data-node-id="395:3476" />
          <div className="absolute content-stretch flex flex-col gap-[18px] items-start justify-center left-[763px] top-[459px]" data-node-id="395:3477">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3478">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3479">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Licensed & Insured`}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3480">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3481">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">Door-to-Door Service</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3482">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3483">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">24/7 Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute left-[763px] overflow-clip size-[80px] top-[293px]" data-name="malaysia_4854148 1" data-node-id="395:3484">
            <div className="absolute contents inset-0" data-name="36 Multicolor / Flag / mc_36_flag_malaysia" data-node-id="395:3485">
              <img alt="" className="absolute block max-w-none size-full" src={img36MulticolorFlagMc36FlagMalaysia} />
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] left-[764px] not-italic text-[#25376a] text-[22px] top-[418.5px] tracking-[-0.44px] whitespace-nowrap" data-node-id="395:3491">
            <p className="leading-[1.5]">Malaysia</p>
          </div>
        </div>
        <div className="absolute contents left-[1041px] top-[269px]" data-node-id="395:3492">
          <div className="absolute bg-[#fefefe] border border-[#d5d8dd] border-solid h-[333px] left-[1041px] rounded-[12px] top-[269px] w-[270px]" data-node-id="395:3493" />
          <div className="absolute content-stretch flex flex-col gap-[18px] items-start justify-center left-[1066px] top-[459px]" data-node-id="395:3494">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3495">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3496">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Licensed & Insured`}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3497">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3498">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">Door-to-Door Service</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="395:3499">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#25376a] text-[16px] whitespace-nowrap" data-node-id="395:3500">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">24/7 Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute left-[1066px] overflow-clip size-[80px] top-[294px]" data-name="monaco_4854249 1" data-node-id="395:3501">
            <div className="absolute contents inset-0" data-name="36 Multicolor / Flag / mc_36_flag_monaco" data-node-id="395:3502">
              <img alt="" className="absolute block max-w-none size-full" src={img36MulticolorFlagMc36FlagMonaco} />
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] left-[1066px] not-italic text-[#25376a] text-[22px] top-[418.5px] tracking-[-0.44px] whitespace-nowrap" data-node-id="395:3506">
            <p className="leading-[1.5]">Indonesia</p>
          </div>
        </div>
          </>
        ) : (
          <>
            <div className="absolute left-[150px] top-[417px] w-[413px]" data-name="Domestic expertise CTA" data-node-id="410:1903">
              <p className="mb-8 font-['Inter:Bold',sans-serif] text-[24px] font-bold leading-[1.21] tracking-[-0.82px] not-italic text-[#25376a]" data-node-id="408:2086">
                {`Get Best Rates for Intercity & Interstate Relocation Across United States.`}
              </p>
              <div
                className="inline-flex items-center gap-[16px] rounded-[8px] bg-[#de5c35] px-[24px] py-[12px]"
                data-name="Button"
                data-node-id="395:3856"
              >
                <p className="whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[24px] tracking-[-0.3125px] not-italic text-white">
                  Get a Quote
                </p>
                <div className="relative size-[20px] shrink-0">
                  <img alt="" className="absolute block max-w-none size-full" src={imgArrowRight} />
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-[658px] top-[285px] h-[430px] w-[641px]"
              data-name="US domestic map"
              data-node-id="410:1590"
            >
              <img alt="" className="h-full w-full max-w-none object-contain" src="/images/us-domestic-map.svg" />
            </div>
          </>
        )}
        <div
          className="-translate-x-1/2 absolute left-1/2 top-[175px] flex items-start gap-[10px] rounded-[40px] bg-[#eff1f5] p-0"
          data-node-id="395:3507"
          role="tablist"
          aria-label="Relocation expertise"
        >
          <button
            type="button"
            role="tab"
            aria-selected={expertiseTab === "international"}
            className={`flex shrink-0 cursor-pointer items-center justify-center gap-[8px] rounded-[40px] border-0 px-[24px] py-[18px] transition-colors ${
              expertiseTab === "international" ? "bg-[#34519e] text-white" : "bg-[#eff1f5] text-[#25376a]"
            }`}
            data-node-id="395:3508"
            onClick={() => setExpertiseTab("international")}
          >
            <div className="relative size-[24px] shrink-0 overflow-clip" data-name="global-line" data-node-id="395:3509">
              <div className="absolute inset-[8.33%]" data-name="Vector" data-node-id="I395:3509;1561:3936">
                <img
                  alt=""
                  className={`absolute block max-w-none size-full ${expertiseTab === "international" ? "brightness-0 invert" : ""}`}
                  src={imgVector}
                />
              </div>
            </div>
            <div
              className={`flex flex-col justify-center font-['Inter:Bold',sans-serif] text-[16px] font-bold leading-[0] tracking-[-0.32px] whitespace-nowrap not-italic ${
                expertiseTab === "international" ? "text-white" : "text-[#25376a]"
              }`}
              data-node-id="395:3510"
            >
              <p className="leading-[1.5]">International Relocation</p>
            </div>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={expertiseTab === "domestic"}
            className={`flex shrink-0 cursor-pointer items-center justify-center gap-[8px] rounded-[40px] border-0 px-[24px] py-[18px] transition-colors ${
              expertiseTab === "domestic" ? "bg-[#34519e] text-white" : "bg-[#eff1f5] text-[#25376a]"
            }`}
            data-node-id="395:3511"
            onClick={() => setExpertiseTab("domestic")}
          >
            <div className="relative size-[24px] shrink-0 overflow-clip" data-name="home-4-line" data-node-id="395:3512">
              <div className="absolute inset-[5.63%_4.17%_12.5%_4.17%]" data-name="Vector" data-node-id="I395:3512;1561:3857">
                <img
                  alt=""
                  className={`absolute block max-w-none size-full ${expertiseTab === "domestic" ? "brightness-0 invert" : ""}`}
                  src={imgVector1}
                />
              </div>
            </div>
            <div
              className={`flex flex-col justify-center font-['Inter:Bold',sans-serif] text-[16px] font-bold leading-[0] tracking-[-0.32px] whitespace-nowrap not-italic ${
                expertiseTab === "domestic" ? "text-white" : "text-[#25376a]"
              }`}
              data-node-id="395:3513"
            >
              <p className="leading-[1.5]">Domestic Relocation</p>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute contents left-0 top-[1580px]" data-node-id="395:3514">
        <div className="absolute bg-gradient-to-b from-[#de5c35] h-[676px] left-0 to-[#da3832] top-[1580px] w-[1440px]" data-node-id="395:3515" />
        <div className="absolute flex h-[537.972px] items-center justify-center left-[186px] top-[1692px] w-[336.517px]">
          <div className="flex-none rotate-[16.44deg]">
            <div className="h-[501px] relative w-[203px]" data-node-id="395:3516">
              <img alt="" className="absolute block max-w-none size-full" src={imgEllipse8} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[537.972px] items-center justify-center left-[calc(66.67%-32px)] top-[1590px] w-[336.517px]">
          <div className="flex-none rotate-[16.44deg]">
            <div className="h-[501px] relative w-[203px]" data-node-id="395:3517">
              <img alt="" className="absolute block max-w-none size-full" src={imgEllipse9} />
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[100px] bg-[rgba(217,217,217,0.17)] h-[673px] left-0 top-[1580px] w-[1440px]" data-node-id="395:3518" />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[calc(33.33%-345px)] not-italic text-[40px] text-white top-[1714px] tracking-[-0.8192px] w-[770px]" data-node-id="395:3519">
          Why Choose Unirelo.
        </p>
        <div className="absolute content-stretch flex flex-col items-start left-[135px] top-[1794px] w-[492px]" data-node-id="395:3520">
          <div className="border-[rgba(255,255,255,0.12)] border-b border-solid h-[164px] not-italic relative shrink-0 text-white tracking-[-0.8192px] w-full" data-node-id="395:3521">
            <p className="absolute font-['Helvetica:Bold',sans-serif] leading-[normal] left-[calc(50%-246px)] text-[24px] top-[27px] whitespace-nowrap" data-node-id="395:3522">
              25 Years of Expertise
            </p>
            <p className="absolute font-['Helvetica:Regular',sans-serif] leading-[24px] left-[calc(50%-246px)] text-[16px] top-[71px] w-[492px]" data-node-id="395:3523">{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
          </div>
          <div className="border-[rgba(255,255,255,0.12)] border-b border-solid h-[82px] relative shrink-0 w-full" data-node-id="395:3524">
            <p className="absolute font-['Helvetica:Regular',sans-serif] leading-[normal] left-[calc(50%-246px)] not-italic opacity-60 text-[24px] text-white top-[27px] tracking-[-0.8192px] whitespace-nowrap" data-node-id="395:3525">{`Licensed & Assured for Global Movement`}</p>
          </div>
          <div className="border-[rgba(255,255,255,0.12)] border-b border-solid h-[82px] relative shrink-0 w-full" data-node-id="395:3526">
            <p className="absolute font-['Helvetica:Regular',sans-serif] leading-[normal] left-[calc(50%-246px)] not-italic opacity-60 text-[24px] text-white top-[27px] tracking-[-0.8192px] whitespace-nowrap" data-node-id="395:3527">
              24*7 Worldwide Customer Support
            </p>
          </div>
        </div>
        <div className="absolute contents left-[calc(50%+69px)] top-[1739px]" data-node-id="395:3528">
          <div className="absolute bg-[rgba(255,255,255,0.08)] h-[395px] left-[calc(50%+69px)] rounded-[24px] top-[1739px] w-[494px]" data-node-id="395:3529" />
          <div className="absolute h-0 left-[calc(58.33%+3px)] top-[1942px] w-[386px]" data-node-id="395:3530">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector4} />
            </div>
          </div>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(58.33%+3px)] not-italic text-[48px] text-white top-[1792px] tracking-[-0.8192px] whitespace-nowrap" data-node-id="395:3531">
            4.8
          </p>
          <div className="absolute left-[calc(66.67%-34px)] size-[35px] top-[1803px]" data-node-id="395:3532">
            <div className="absolute inset-[4.9%_6.89%_12.69%_6.89%]">
              <img alt="" className="block max-w-none size-full" src={imgStar1} />
            </div>
          </div>
          <div className="absolute contents left-[calc(58.33%+3px)] top-[1871.79px]" data-node-id="395:3533">
            <p className="absolute font-['Helvetica:Regular',sans-serif] leading-[24px] left-[calc(79.17%-170px)] not-italic text-[16px] text-white top-[1880px] tracking-[-0.8192px] whitespace-nowrap" data-node-id="395:3534">
              +120 Successful Stories of our clients
            </p>
            <div className="absolute left-[calc(66.67%-49.21px)] size-[43.214px] top-[1871.79px]" data-node-id="395:3535">
              <div className="absolute inset-[-3.92%]">
                <img alt="" className="block max-w-none size-full" height="46.603" src={imgEllipse5} width="46.603" />
              </div>
            </div>
            <div className="absolute left-[calc(58.33%+36.89px)] size-[43.214px] top-[1871.79px]" data-node-id="395:3536">
              <div className="absolute inset-[-3.92%]">
                <img alt="" className="block max-w-none size-full" height="46.603" src={imgEllipse4} width="46.603" />
              </div>
            </div>
            <div className="absolute left-[calc(58.33%+3px)] size-[43.214px] top-[1871.79px]" data-node-id="395:3537">
              <div className="absolute inset-[-3.92%]">
                <img alt="" className="block max-w-none size-full" height="46.603" src={imgEllipse3} width="46.603" />
              </div>
            </div>
          </div>
          <p className="absolute font-['Helvetica:Regular',sans-serif] leading-[24px] left-[calc(79.17%-297px)] not-italic text-[16px] text-white top-[1959px] tracking-[-0.8192px] w-[386px]" data-node-id="395:3538">{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
          <p className="-translate-x-1/2 absolute decoration-solid font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[calc(58.33%+48px)] not-italic text-[14px] text-center text-white top-[2058px] underline whitespace-nowrap" data-node-id="395:3539">
            KNOW MORE
          </p>
          <div className="absolute contents left-[calc(75%-19px)] top-[1801px]" data-node-id="395:3540">
            <div className="absolute h-[26.042px] left-[calc(75%-19px)] overflow-clip top-[1815px] w-[167.999px]" data-name="ShopperApprovedLogo 1" data-node-id="395:3541">
              <div className="absolute inset-[31.5%_70.34%_23.52%_25.12%]" data-name="Path 2183" data-node-id="395:3542">
                <img alt="" className="absolute block max-w-none size-full" src={imgPath2183} />
              </div>
              <div className="absolute inset-[31.5%_75.81%_23.5%_19.44%]" data-name="Path 2184" data-node-id="395:3543">
                <img alt="" className="absolute block max-w-none size-full" src={imgPath2184} />
              </div>
              <div className="absolute inset-[44.95%_44.19%_23.5%_52.33%]" data-name="Path 2185" data-node-id="395:3544">
                <img alt="" className="absolute block max-w-none size-full" src={imgPath2185} />
              </div>
              <div className="absolute inset-[44.64%_59.28%_10.9%_36.12%]" data-name="Path 2186" data-node-id="395:3545">
                <img alt="" className="absolute block max-w-none size-full" src={imgPath2186} />
              </div>
              <div className="absolute inset-[44.64%_54.07%_10.9%_41.33%]" data-name="Path 2187" data-node-id="395:3546">
                <img alt="" className="absolute block max-w-none size-full" src={imgPath2187} />
              </div>
              <div className="absolute inset-[44.7%_64.61%_22.5%_30.32%]" data-name="Path 2188" data-node-id="395:3547">
                <img alt="" className="absolute block max-w-none size-full" src={imgPath2188} />
              </div>
              <div className="absolute contents inset-[0.02%_81.52%_0_0]" data-node-id="395:3548">
                <div className="absolute inset-[0.02%_84.8%_0_0]" data-node-id="395:3549">
                  <img alt="" className="absolute block max-w-none size-full" src={imgGroup1696} />
                </div>
                <div className="absolute contents inset-[30.85%_81.52%_0.21%_2.92%]" data-node-id="395:3552">
                  <div className="absolute inset-[30.85%_81.52%_0.21%_2.92%]" data-node-id="395:3553">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup1697} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-[31.5%_0_10.9%_55.67%]" data-node-id="395:3555">
                <img alt="" className="absolute block max-w-none size-full" src={imgGroup1701} />
              </div>
              <div className="absolute inset-[44.7%_48.55%_22.36%_46.56%]" data-name="Path 2201" data-node-id="395:3566">
                <img alt="" className="absolute block max-w-none size-full" src={imgPath2201} />
              </div>
            </div>
            <p className="absolute font-['Helvetica:Regular',sans-serif] leading-[normal] left-[calc(87.5%-96px)] not-italic opacity-60 text-[12px] text-white top-[1801px] whitespace-nowrap" data-node-id="395:3567">
              Powered By
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[825px] left-0 top-[2253px] w-[1440px]" data-node-id="395:3568" />
      <div className="-translate-x-1/2 absolute bg-[#34519e] content-stretch flex flex-col gap-[54px] items-center left-1/2 overflow-clip pl-[173px] pr-[143px] py-[80px] rounded-[24px] top-[2340px] w-[1344px]" data-name="Testimonial_V2" data-node-id="395:3569">
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-node-id="395:3571">
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1200.699px]" data-node-id="395:3572">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-white w-[489px]" data-name="Text header" data-node-id="395:3573">
              <p className="font-['Encode_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[14px] tracking-[0.56px] uppercase w-[510.921px]" data-node-id="395:3574" style={{ fontVariationSettings: "'wdth' 100" }}>
                Testimonials
              </p>
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[56px] not-italic relative shrink-0 text-[40px] text-center tracking-[-0.8192px] whitespace-nowrap" data-node-id="395:3575">
                Trusted by 30000+ Customers Worldwide
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[1201px]" data-node-id="395:3576">
            <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex flex-col gap-[64px] items-start p-[32px] relative rounded-[10px] shrink-0 w-[590px]" data-node-id="395:3577">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="395:3578">
                <div className="h-[32.225px] relative shrink-0 w-[39.63px]" data-name="“" data-node-id="395:3579">
                  <img alt="" className="absolute block max-w-none size-full" src={img} />
                </div>
                <p className="font-['Encode_Sans:SemiBold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-[min-content]" data-node-id="395:3580" style={{ fontVariationSettings: "'wdth' 100" }}>
                  UniRelo is the only logistics partner we need — fast, transparent, and fully hands-on from start to delivery.
                </p>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="395:3581">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="Name" data-node-id="395:3582">
                  <p className="font-['Graphik:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-full" data-node-id="395:3583">
                    Mark Johnson
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex flex-col gap-[64px] items-start p-[32px] relative rounded-[10px] shrink-0 w-[590px]" data-node-id="395:3584">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="395:3585">
                <div className="h-[32.225px] relative shrink-0 w-[39.63px]" data-name="“" data-node-id="395:3586">
                  <img alt="" className="absolute block max-w-none size-full" src={img} />
                </div>
                <p className="font-['Encode_Sans:SemiBold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-[min-content]" data-node-id="395:3587" style={{ fontVariationSettings: "'wdth' 100" }}>{`Whether you're shipping urgent parts, high-value electronics, or restocking fast-moving inventory, UniRelo delivers.`}</p>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="395:3588">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="Name" data-node-id="395:3589">
                  <p className="font-['Graphik:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-full" data-node-id="395:3590">
                    Mark Johnson
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="395:3591">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow_back_ios" data-node-id="395:3592">
              <img alt="" className="absolute block max-w-none size-full" src={imgArrowBackIos} />
              <div className="absolute inset-[8.75%_27.04%_8.75%_24.33%]" data-name="Vector" data-node-id="I395:3592;135:36165">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center opacity-60 relative shrink-0 w-[300px]" data-node-id="395:3593">
              <div className="bg-white flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[11px]" data-node-id="395:3594" />
              <div className="bg-[rgba(255,255,255,0.19)] flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[11px]" data-node-id="395:3595" />
              <div className="bg-[rgba(255,255,255,0.19)] flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[11px]" data-node-id="395:3596" />
              <div className="bg-[rgba(255,255,255,0.19)] flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[11px]" data-node-id="395:3597" />
              <div className="bg-[rgba(255,255,255,0.19)] flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[11px]" data-node-id="395:3598" />
              <div className="bg-[rgba(255,255,255,0.19)] flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[11px]" data-node-id="395:3599" />
              <div className="bg-[rgba(255,255,255,0.19)] flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[11px]" data-node-id="395:3600" />
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow_forward_ios" data-node-id="395:3601">
              <img alt="" className="absolute block max-w-none size-full" src={imgArrowForwardIos} />
              <div className="absolute inset-[8.75%_24.33%_8.75%_27.04%]" data-name="Vector" data-node-id="I395:3601;135:36183">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[405px] left-1/2 top-[4167px] w-[1470px]" data-name="Screenshot 2026-03-03 at 6.18.38 PM 1" data-node-id="395:3602">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.43%] left-0 max-w-none top-[-25.43%] w-full" src={imgScreenshot20260303At61838Pm1} />
        </div>
      </div>
      <div
        className="absolute left-0 top-0 h-[553px] w-[1440px] bg-[rgba(217,217,217,0.17)] backdrop-blur-[100px]"
        data-node-id="395:3603"
      />
      <div className="absolute flex h-[537.972px] items-center justify-center left-[calc(66.67%-32px)] top-[143px] w-[336.517px]">
        <div className="flex-none rotate-[16.44deg]">
          <div className="h-[501px] relative w-[203px]" data-node-id="395:3641">
            <img alt="" className="absolute block max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[537.972px] items-center justify-center left-[186px] top-[245px] w-[336.517px]">
        <div className="flex-none rotate-[16.44deg]">
          <div className="h-[501px] relative w-[203px]" data-node-id="395:3642">
            <img alt="" className="absolute block max-w-none size-full" src={imgEllipse6} />
          </div>
        </div>
      </div>
      <div
        className="absolute left-0 top-0 h-[553px] w-[1440px] bg-[rgba(217,217,217,0.17)] backdrop-blur-[100px]"
        data-node-id="395:3643"
      />
      <div className="absolute contents left-[135px] top-[80px]" data-name="Mask group" data-node-id="395:3644">
        <div className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[calc(50%+0.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-244px_-104px] mask-size-[1170px_544px] not-italic text-[#1e1d59] text-[0px] text-center top-[184px] tracking-[-0.8192px] w-[683px] whitespace-pre-wrap" data-node-id="395:3648" style={{ maskImage: `url('${imgRelocationWontBeAChallengeWithUnirelo}')` }}>
          <p className="mb-0 text-[56px]">
            <span className="leading-[56px] text-[#25376a]">Relocation</span>
            <span className="leading-[56px] text-[#101828]">{` `}</span>
          </p>
          <p className="leading-[56px] mb-0 text-[56px] text-[rgba(52,81,158,0.43)]">{`won't be a challenge,`}</p>
          <p className="text-[56px]">
            <span className="leading-[56px] text-[#25376a]">with</span>
            <span className="leading-[56px] text-[#101828]">{` `}</span>
            <span className="leading-[56px] text-[#de5c35]">Unirelo.</span>
          </p>
        </div>
        <div className="-translate-x-1/2 absolute h-[2px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-245px_-188px] mask-size-[1170px_544px] top-[268px] w-[680px]" data-node-id="395:3649" style={{ maskImage: `url('${imgRelocationWontBeAChallengeWithUnirelo}')` }}>
          <div className="absolute inset-[-75%_-0.22%]">
            <img alt="" className="block max-w-none size-full" src={imgVector7} />
          </div>
        </div>
      </div>
      <div className="absolute h-[202px] left-[138px] rounded-[16px] top-[307px] w-[207px]" data-node-id="395:3650">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle34624350} />
      </div>
      <div className="absolute contents left-[calc(75%+19px)] top-[307px]" data-node-id="395:3651">
        <div className="absolute bg-[rgba(255,255,255,0.43)] h-[202px] left-[calc(75%+19px)] rounded-[16px] top-[307px] w-[207px]" data-node-id="395:3652" />
        <div className="absolute contents left-[calc(83.33%-73px)] top-[416px]" data-node-id="395:3653">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(87.5%-133px)] not-italic text-[12px] text-[rgba(52,81,158,0.6)] top-[451px] w-[139px]" data-node-id="395:3654">
            +120 Successful Stories of our clients
          </p>
          <div className="absolute left-[calc(83.33%-33.3px)] size-[25.305px] top-[416px]" data-node-id="395:3655">
            <div className="absolute inset-[-3.92%]">
              <img alt="" className="block max-w-none size-full" height="27.29" src={imgEllipse10} width="27.29" />
            </div>
          </div>
          <div className="absolute left-[calc(83.33%-53.15px)] size-[25.305px] top-[416px]" data-node-id="395:3656">
            <div className="absolute inset-[-3.92%]">
              <img alt="" className="block max-w-none size-full" height="27.29" src={imgEllipse11} width="27.29" />
            </div>
          </div>
          <div className="absolute left-[calc(83.33%-73px)] size-[25.305px] top-[416px]" data-node-id="395:3657">
            <div className="absolute inset-[-3.92%]">
              <img alt="" className="block max-w-none size-full" height="27.29" src={imgEllipse12} width="27.29" />
            </div>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(83.33%-73px)] not-italic text-[#25376a] text-[32px] top-[357px] tracking-[-0.5762px] whitespace-nowrap" data-node-id="395:3658">
          4.8
        </p>
        <div className="absolute left-[calc(83.33%-14.62px)] size-[24.619px] top-[364.74px]" data-node-id="395:3659">
          <div className="absolute inset-[4.9%_6.89%_12.69%_6.89%]">
            <img alt="" className="block max-w-none size-full" src={imgStar2} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(16.67%+129px)] top-[390px]" data-node-id="395:3660">
        <div className="absolute bg-[rgba(240,80,34,0.2)] h-[119px] left-[calc(16.67%+129px)] rounded-[16px] top-[390px] w-[152px]" data-node-id="395:3661" />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(16.67%+169px)] not-italic text-[18px] text-black text-center top-[419px] tracking-[-0.8192px] whitespace-nowrap" data-node-id="395:3662">
          100+
        </p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+147px)] not-italic text-[12px] text-black top-[448px] w-[116px]" data-node-id="395:3663">
          Our Esteemed Clients and Partners
        </p>
      </div>
      <div className="absolute contents left-[calc(66.67%-37px)] top-[390px]" data-node-id="395:3664">
        <div className="absolute bg-[rgba(52,81,158,0.2)] h-[119px] left-[calc(66.67%-37px)] rounded-[16px] top-[390px] w-[152px]" data-node-id="395:3665" />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(66.67%-2px)] not-italic text-[18px] text-black text-center top-[419px] tracking-[-0.8192px] whitespace-nowrap" data-node-id="395:3666">
          25+
        </p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(66.67%-19px)] not-italic text-[12px] text-black top-[448px] w-[116px]" data-node-id="395:3667">
          Years of Dedicated Services
        </p>
      </div>
      <div
        className="absolute left-0 top-[553px] z-[20] box-border h-[259px] w-[1440px] max-w-[1440px] shrink-0 rounded-none"
        data-name="Rectangle 34624353"
        data-node-id="395:3668"
        style={{ backgroundColor: "#34519E" }}
        aria-hidden
      />
      <div
        className="absolute left-[168px] top-[591px] z-[21] flex w-[1104px] flex-col items-center gap-6"
        data-name="Hero booking strip"
      >
        <div
          className="w-full rounded-[20px] border border-solid border-[#E4E6E8] bg-white shadow-[0px_10px_35px_0px_rgba(0,0,0,0.05)]"
          data-name="Background+Border+Shadow"
          data-node-id="395:3669"
        >
          <div className="flex min-h-[92px] flex-nowrap items-stretch py-1 pl-2 pr-3">
            <div className="flex min-w-0 flex-1 items-center gap-3 border-r border-[#E4E6E8] px-3 py-3 sm:px-4">
              <img alt="" className="mt-0.5 size-4 shrink-0 self-start" src={imgLocationSvg} />
              <div className="min-w-0 flex-1">
                <p className="font-['Inter',sans-serif] text-[13px] leading-5 text-[#6C8689]">Origin</p>
                <p className="font-['Inter',sans-serif] text-[14px] leading-5 text-[#6C8689]">
                  City, Country, Zip Code
                </p>
              </div>
              <img alt="" className="h-3 w-3 shrink-0 opacity-80" src={imgDropdownSvg} />
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3 border-r border-[#E4E6E8] px-3 py-3 sm:px-4">
              <img alt="" className="mt-0.5 size-4 shrink-0 self-start" src={imgLocationSvg1} />
              <div className="min-w-0 flex-1">
                <p className="font-['Inter',sans-serif] text-[13px] leading-5 text-[#6C8689]">Destination</p>
                <p className="font-['Inter',sans-serif] text-[14px] font-semibold leading-5 text-[#0A353B]">
                  India
                </p>
              </div>
              <img alt="" className="h-3 w-3 shrink-0 opacity-80" src={imgDropdownSvg} />
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3 border-r border-[#E4E6E8] px-3 py-3 sm:px-4">
              <img alt="" className="mt-0.5 size-4 shrink-0 self-start" src={imgCalendarSvg} />
              <div className="min-w-0 flex-1">
                <p className="font-['Inter',sans-serif] text-[13px] leading-5 text-[#6C8689]">Moving Date</p>
                <p className="font-['Inter',sans-serif] text-[14px] font-semibold leading-5 text-[#0A353B]">
                  12 Apr 2025
                </p>
                <p className="font-['Inter',sans-serif] text-[12px] leading-4 text-[#6C8689]">Sunday</p>
              </div>
              <img alt="" className="h-3 w-3 shrink-0 self-center opacity-80" src={imgDropdownSvg} />
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3 border-r border-[#E4E6E8] px-3 py-3 sm:px-4">
              <img alt="" className="mt-0.5 size-4 shrink-0 self-start" src={imgCalendarSvg1} />
              <div className="min-w-0 flex-1">
                <p className="font-['Inter',sans-serif] text-[13px] leading-5 text-[#6C8689]">Moving As</p>
                <p className="font-['Inter',sans-serif] text-[14px] font-semibold leading-5 text-[#0A353B]">
                  Personal
                </p>
              </div>
              <img alt="" className="h-3 w-3 shrink-0 opacity-80" src={imgDropdownSvg} />
            </div>
            <div className="flex shrink-0 items-center pl-2">
              <button
                type="button"
                className="flex h-12 items-center gap-2 whitespace-nowrap rounded-lg bg-[#DE5C35] px-5 font-['Inter',sans-serif] text-[15px] font-semibold tracking-[-0.02em] text-white shadow-sm transition hover:brightness-105"
                data-name="Button"
                data-node-id="395:3724"
              >
                Add Contact Detail
                <img alt="" className="size-5 shrink-0" src={imgArrowRight1} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[14px] text-white/90"
          data-name="Container"
          data-node-id="395:3729"
        >
          <div className="flex items-center gap-2">
            <img alt="" className="size-5 shrink-0" src={imgCheckCircle} />
            <span className="font-['Inter',sans-serif] font-normal tracking-[-0.01em]">
              No Hidden Fees
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img alt="" className="size-5 shrink-0" src={imgCheckCircle} />
            <span className="font-['Inter',sans-serif] font-normal tracking-[-0.01em]">
              Fully Insured
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img alt="" className="size-5 shrink-0" src={imgCheckCircle} />
            <span className="font-['Inter',sans-serif] font-normal tracking-[-0.01em]">
              24/7 Support
            </span>
          </div>
        </div>
      </div>
      <SiteHeader
        variant="desktop"
        className="absolute left-[135px] top-[10px] z-30 flex h-[46px] w-[1170px] items-center"
        logoSrc={imgGroup}
        logoFramed
      />
      <div className="-translate-x-1/2 absolute bg-[rgba(52,81,158,0.1)] content-stretch flex gap-[4px] h-[26px] items-center left-1/2 px-[10px] py-[8px] rounded-[6px] top-[130px]" data-name="Container" data-node-id="395:3785">
        <div className="relative shrink-0 size-[16px]" data-name="Shield" data-node-id="395:3786">
          <img alt="" className="absolute block max-w-none size-full" src={imgShield} />
        </div>
        <div className="h-[20px] relative shrink-0 w-[132px]" data-name="span" data-node-id="395:3788">
          <p className="-translate-x-1/2 absolute font-['Helvetica:Bold',sans-serif] leading-[20px] left-[66px] not-italic text-[#34519e] text-[10px] text-center top-[calc(50%-10px)] tracking-[-0.1504px] whitespace-nowrap" data-node-id="395:3789">
            20+ Years of Trusted Service
          </p>
        </div>
      </div>
      <div className="absolute contents left-[calc(25%+92px)] top-[3415.94px]" data-name="Mask group" data-node-id="395:3790">
        <div className="absolute h-[957px] left-[-181px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[632.667px_210.438px] mask-size-[397.833px_96.936px] top-[3205px] w-[1674px]" data-name="red-semi-truck-driving-highway-sunset 2" data-node-id="395:3792" style={{ maskImage: `url('${imgRedSemiTruckDrivingHighwaySunset2}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRedSemiTruckDrivingHighwaySunset3} />
        </div>
      </div>
      <div className="absolute contents left-[169px] top-[3512px]" data-name="Mask group" data-node-id="395:3793">
        <div className="absolute h-[788px] left-[135px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[34px_168px] mask-size-[1110px_553px] top-[3344px] w-[1153px]" data-name="2151846029 2" data-node-id="395:3795" style={{ maskImage: `url('${img21518460292}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img21518460293} />
        </div>
        <div className="absolute h-[957px] left-[-181px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[350px_307px] mask-size-[1110px_553px] top-[3205px] w-[1674px]" data-name="red-semi-truck-driving-highway-sunset 1" data-node-id="395:3796" style={{ maskImage: `url('${img21518460292}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRedSemiTruckDrivingHighwaySunset3} />
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[169px] not-italic text-[#25376a] text-[40px] top-[3154px] tracking-[-0.8192px] w-[487px]" data-node-id="395:3797">
        <span className="leading-[56px]">Kickstart Your Relocation to India With</span>
        <span className="leading-[56px]">{` `}</span>
        <span className="leading-[56px] text-[#de5c35]">Unirelo</span>
      </p>
      <div className="absolute contents left-[calc(50%+72px)] top-[3122px]" data-node-id="395:3798">
        <div className="absolute bg-white border border-[#d5d8dd] border-solid h-[530px] left-[calc(50%+72px)] rounded-[12px] top-[3122px] w-[428px]" data-node-id="395:3799" />
        <div className="absolute bg-[#ffeee9] border border-[#de5c35] border-solid h-[46px] left-[calc(58.33%-16px)] rounded-[10.284px] top-[3477px] w-[112px]" data-name="button" data-node-id="395:3800">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-15px)] not-italic text-[#de5c35] text-[14px] top-1/2 whitespace-nowrap" data-node-id="395:3801">
            <p className="leading-[20px]">Personal</p>
          </div>
          <div className="absolute left-[14px] overflow-clip size-[18px] top-[13px]" data-name="radio_button_checked" data-node-id="395:3802">
            <div className="absolute inset-[8.33%]" data-name="icon" data-node-id="I395:3802;54616:25474">
              <img alt="" className="absolute block max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
        <div className="absolute bg-white border-[#e4e6e8] border-[0.643px] border-solid h-[46px] left-[calc(66.67%-12px)] rounded-[10.284px] top-[3477px] w-[127px]" data-name="button" data-node-id="395:3803">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-22.5px)] not-italic text-[#0a353b] text-[14px] top-1/2 whitespace-nowrap" data-node-id="395:3804">
            <p className="leading-[20px]">Business</p>
          </div>
          <div className="absolute left-[14.36px] overflow-clip size-[18px] top-[13.36px]" data-name="radio_button_unchecked" data-node-id="395:3805">
            <div className="absolute inset-[8.33%]" data-name="icon" data-node-id="I395:3805;54616:25476">
              <img alt="" className="absolute block max-w-none size-full" src={imgIcon1} />
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[calc(58.33%-16px)] not-italic overflow-hidden text-[#0a353b] text-[14px] text-ellipsis top-[calc(50%+1171px)] w-[128.546px] whitespace-nowrap" data-node-id="395:3806">
          <p className="leading-[20px] overflow-hidden text-ellipsis">Moving As</p>
        </div>
        <div className="absolute bg-[#de5c35] h-[56px] left-[calc(58.33%-16px)] rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[3557px] w-[364px]" data-name="button" data-node-id="395:3807">
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[170.5px] not-italic text-[16px] text-center text-white top-[16px] tracking-[-0.3125px] whitespace-nowrap" data-node-id="395:3808">
            Add Contact Detail
          </p>
          <div className="absolute left-[248px] size-[20px] top-[18px]" data-name="ArrowRight" data-node-id="395:3809">
            <img alt="" className="absolute block max-w-none size-full" src={imgArrowRight2} />
          </div>
        </div>
        <div className="absolute bg-white border-[#e4e6e8] border-[0.643px] border-solid h-[69px] left-[calc(58.33%-16px)] rounded-[10.284px] top-[3362px] w-[364px]" data-name="Background+Border" data-node-id="395:3812">
          <div className="absolute h-[6.427px] right-[192.74px] top-[37.92px] w-[8.998px]" data-name="Image" data-node-id="395:3813">
            <div className="absolute h-[6.427px] left-0 overflow-clip top-0 w-[8.998px]" data-name="dropdown.svg fill" data-node-id="395:3814">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.499px] left-1/2 top-1/2 w-[7.713px]" data-name="dropdown.svg" data-node-id="395:3815" />
            </div>
          </div>
          <div className="absolute contents left-[19.36px] top-[10.36px]" data-node-id="395:3816">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[36px] not-italic text-[#0a353b] text-[10px] top-[18px] tracking-[0.2px] whitespace-nowrap" data-node-id="395:3817">
              <p className="leading-[14px]">Moving On</p>
            </div>
            <div className="-translate-y-1/2 absolute left-[20px] overflow-clip size-[12px] top-[calc(50%-16.5px)]" data-name="calendar.svg" data-node-id="395:3818">
              <div className="absolute contents inset-0" data-name="Clip path group" data-node-id="395:3819">
                <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[12px_12px]" data-name="Group" data-node-id="395:3822" style={{ maskImage: `url('${imgGroup1}')` }}>
                  <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#0a353b] text-[14px] text-ellipsis top-[calc(50%+2.57px)] w-[128.546px] whitespace-nowrap" data-node-id="395:3825">
              <p className="leading-[20px] overflow-hidden text-ellipsis">23 Jun’24</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#6c8689] text-[10px] text-ellipsis top-[calc(50%+17.56px)] tracking-[0.2px] whitespace-nowrap" data-node-id="395:3826">
              <p className="leading-[14px] overflow-hidden text-ellipsis">Sunday</p>
            </div>
          </div>
          <div className="absolute left-[317.36px] overflow-clip size-[24px] top-[22.36px]" data-name="calendar-line" data-node-id="395:3827">
            <div className="absolute inset-[4.17%_8.33%_12.5%_8.33%]" data-name="Vector" data-node-id="I395:3827;1561:4100">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector8} />
            </div>
          </div>
        </div>
        <div className="absolute bg-white border-[#e4e6e8] border-[0.643px] border-solid h-[137px] left-[calc(58.33%-16px)] rounded-[10.284px] top-[3209px] w-[364px]" data-name="Background+Border" data-node-id="395:3828">
          <div className="absolute flex h-px items-center justify-center right-[-0.64px] top-[67.36px] w-[364px]">
            <div className="flex-none rotate-90">
              <div className="bg-[#e4e6e8] h-[364px] w-px" data-name="Vertical Divider" data-node-id="395:3829" />
            </div>
          </div>
          <div className="absolute contents left-[19.36px] top-[15.36px]" data-node-id="395:3830">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[36px] not-italic text-[#0a353b] text-[10px] top-[23px] tracking-[0.2px] whitespace-nowrap" data-node-id="395:3831">
              <p className="leading-[14px]">Origin</p>
            </div>
            <div className="-translate-y-1/2 absolute left-[20px] size-[12px] top-[calc(50%-45.5px)]" data-name="location.svg" data-node-id="395:3832">
              <img alt="" className="absolute block max-w-none size-full" src={imgLocationSvg2} />
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#6c8689] text-[14px] text-ellipsis top-[calc(50%-26.5px)] whitespace-nowrap" data-node-id="395:3834">
              <p className="leading-[20px] overflow-hidden text-ellipsis">{`City, Country, Zip Code `}</p>
            </div>
          </div>
          <div className="absolute contents left-[19.36px] top-[84.36px]" data-node-id="395:3835">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[36px] not-italic text-[#0a353b] text-[10px] top-[92px] tracking-[0.2px] whitespace-nowrap" data-node-id="395:3836">
              <p className="leading-[14px]">Destination</p>
            </div>
            <div className="-translate-y-1/2 absolute left-[20px] size-[12px] top-[calc(50%+23.5px)]" data-name="location.svg" data-node-id="395:3837">
              <img alt="" className="absolute block max-w-none size-full" src={imgLocationSvg2} />
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#6c8689] text-[14px] text-ellipsis top-[calc(50%+42.5px)] whitespace-nowrap" data-node-id="395:3839">
              <p className="leading-[20px] overflow-hidden text-ellipsis">{`City, Country, Zip Code `}</p>
            </div>
          </div>
          <div className="absolute h-[6.427px] right-[192.74px] top-[37.92px] w-[8.998px]" data-name="Image" data-node-id="395:3840">
            <div className="absolute h-[6.427px] left-0 overflow-clip top-0 w-[8.998px]" data-name="dropdown.svg fill" data-node-id="395:3841">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.499px] left-1/2 top-1/2 w-[7.713px]" data-name="dropdown.svg" data-node-id="395:3842" />
            </div>
          </div>
          <div className="absolute contents left-[298.36px] top-[47.6px]" data-node-id="395:3843">
            <div className="absolute flex items-center justify-center left-[299px] size-[40px] top-[48.25px]">
              <div className="flex-none rotate-90">
                <div className="relative size-[40px]" data-node-id="395:3844">
                  <div className="absolute inset-[-28.57%_-57.14%_-85.71%_-57.14%]">
                    <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+137px)] size-[20px] top-[calc(50%-0.5px)]">
              <div className="flex-none rotate-90">
                <div className="overflow-clip relative size-[20px]" data-name="arrow-left-right-line" data-node-id="395:3845">
                  <div className="absolute inset-[8.54%_12.5%]" data-name="Vector" data-node-id="I395:3845;1561:3696">
                    <img alt="" className="absolute block max-w-none size-full" src={imgVector9} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[33px] left-[calc(58.33%-16px)] not-italic text-[#25376a] text-[22px] top-[3154px] tracking-[-0.2578px] whitespace-nowrap" data-node-id="395:3846">
          Where are you moving?
        </p>
        <div className="absolute contents left-[calc(83.33%-83px)] top-[3158px]" data-node-id="395:3847">
          <div className="absolute bg-[#e4e6e8] h-[24px] left-[calc(83.33%-83px)] rounded-[18px] top-[3158px] w-[68px]" data-node-id="395:3848" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] left-[calc(83.33%-71px)] not-italic text-[#0a353b] text-[10px] top-[3171px] tracking-[0.2px] whitespace-nowrap" data-node-id="395:3849">
            <p className="leading-[14px]">STEP 1/2</p>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[169px] not-italic text-[14px] text-[rgba(37,55,106,0.8)] top-[3282px] w-[433px]" data-node-id="395:3850">
        There’s no place like home, we assure it stays that way, no matter where you move
      </p>
    </div>
  );
}
