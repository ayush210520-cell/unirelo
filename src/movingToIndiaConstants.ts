/** Shared — Figma desktop 395:4422, mobile 395:5639 */
export const I = "/images/moving-to";

/** Full-width marketing screenshot strip (Moving To page desktop + mobile) */
export const MARKETING_FOOTER_IMAGE = `${I}/footer-screenshot-6f923c.png`;

export { NAV_CHEVRON_MOVING, NAV_CHEVRON_SERVICES } from "./constants/site";

/** Kickstart / accents — desktop quote card uses E06236; mobile CTAs match Figma fill #DE5C35 */
export const KICK_ORANGE = "#E06236";
export const FIGMA_CTA_ORANGE = "#DE5C35";

export const ACCORDION = [
  {
    title: "Lower cost of living",
    body: "Housing, domestic help, transport, childcare and eating out are far more affordable than in the US.",
  },
  { title: "Strong education system", body: "" },
  { title: "Rich culture & family life", body: "" },
  { title: "Travel & experiences", body: "" },
  { title: "Balanced opportunity", body: "" },
] as const;

export const RESOURCE_ROWS: { top: string; bottom: string }[] = [
  { top: "🪪 Visa & Immigration Basics", bottom: "✈️ Customs, Shipping & Commodities" },
  { top: "👨‍👩‍👦 Cost of Living", bottom: "🏥 Healthcare & Insurance" },
  { top: "📚 Education", bottom: "🎉 Culture & Heritage" },
];
