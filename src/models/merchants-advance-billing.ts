import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsAdvanceBilling = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsAdvanceBilling =
  | (typeof MerchantsAdvanceBilling)[keyof typeof MerchantsAdvanceBilling]
  | (number & {});

export const merchantsAdvanceBillingSchema: EnumSchema<MerchantsAdvanceBilling> =
  s.enumOf<MerchantsAdvanceBilling>(MerchantsAdvanceBilling);
