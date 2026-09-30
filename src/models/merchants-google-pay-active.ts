import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsGooglePayActive = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsGooglePayActive =
  | (typeof MerchantsGooglePayActive)[keyof typeof MerchantsGooglePayActive]
  | (number & {});

export const merchantsGooglePayActiveSchema: EnumSchema<MerchantsGooglePayActive> =
  s.enumOf<MerchantsGooglePayActive>(MerchantsGooglePayActive);
