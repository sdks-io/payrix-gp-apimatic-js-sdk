import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsVisaDisclosureIp = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsVisaDisclosureIp =
  | (typeof MerchantsVisaDisclosureIp)[keyof typeof MerchantsVisaDisclosureIp]
  | (number & {});

export const merchantsVisaDisclosureIpSchema: EnumSchema<MerchantsVisaDisclosureIp> =
  s.enumOf<MerchantsVisaDisclosureIp>(MerchantsVisaDisclosureIp);
