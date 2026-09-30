import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsApplePayActive = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsApplePayActive =
  | (typeof MerchantsApplePayActive)[keyof typeof MerchantsApplePayActive]
  | (number & {});

export const merchantsApplePayActiveSchema: EnumSchema<MerchantsApplePayActive> =
  s.enumOf<MerchantsApplePayActive>(MerchantsApplePayActive);
