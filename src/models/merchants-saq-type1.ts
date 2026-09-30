import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Payment Card Industry Data Security Standard (PCI DSS) Self-assessment questionnaire (SAQ).
 * Details about a merchant's business and the way they currently accept payments or plan to in the
 * future.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `SAQ-A` - **Card-not-present merchants (e-commerce or mail/telephone-order) with PCI
 *   DSS-validated third-party payments service provider(s) and does not store cardholder data.**
 * - `SAQ-A-EP` - **E-commerce merchants with PCI DSS-validated third-party payments service
 *   provider(s) with a website that doesn't directly collect cardholder data, but may impact it in
 *   some way, and does not store cardholder data.**
 * - `SAQ-B` - **Merchants with imprint machines or standalone, dial-out terminals that do not store
 *   cardholder data.**
 * - `SAQ-B-IP` - **Merchants with standalone, PTS-approved payment terminals that have an IP
 *   connection to the payment processor, but do not store cardholder data.**
 * - `SAQ-C-VT` - **Merchants that enter single transactions manually into an internet-based
 *   terminal hosted by PCI DSS-validated third-party payments service provider(s) and does not
 *   store cardholder data.**
 * - `SAQ-C` - **Merchants with payment application systems connected to the internet that do not
 *   store cardholder data.**
 * - `SAQ-P2PE-HW` - **Merchants with hardware-only payment terminals managed by a PCI SSC-listed
 *   P2PE solution, and does not store cardholder data.**
 * - `SAQ-D` - **Generic field for all Merchants that do not fall under the requirements for any
 *   above SAQ types.**
 *
 * </details>
 */
export const MerchantsSaqType1 = {
  SaqA: "SAQ-A",
  SaqAEp: "SAQ-A-EP",
  SaqB: "SAQ-B",
  SaqBIp: "SAQ-B-IP",
  SaqCVt: "SAQ-C-VT",
  SaqC: "SAQ-C",
  SaqP2PeHw: "SAQ-P2PE-HW",
  SaqD: "SAQ-D",
} as const;
export type MerchantsSaqType1 = (typeof MerchantsSaqType1)[keyof typeof MerchantsSaqType1] | (string & {});

export const merchantsSaqType1Schema: EnumSchema<MerchantsSaqType1> =
  s.enumOf<MerchantsSaqType1>(MerchantsSaqType1);
