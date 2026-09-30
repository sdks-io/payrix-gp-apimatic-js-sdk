import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not the merchant has acknowledged and accepted the Visa Disclosure.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Accepted**
 * - `1` - **Accepted**
 *
 * </details>
 */
export const MerchantsVisaDisclosureIp1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsVisaDisclosureIp1 =
  | (typeof MerchantsVisaDisclosureIp1)[keyof typeof MerchantsVisaDisclosureIp1]
  | (number & {});

export const merchantsVisaDisclosureIp1Schema: EnumSchema<MerchantsVisaDisclosureIp1> =
  s.enumOf<MerchantsVisaDisclosureIp1>(MerchantsVisaDisclosureIp1);
