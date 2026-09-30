import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasEfeOffersIsMerchantPrequalified = {
  _0: 0,
  _1: 1,
} as const;
export type VasEfeOffersIsMerchantPrequalified =
  | (typeof VasEfeOffersIsMerchantPrequalified)[keyof typeof VasEfeOffersIsMerchantPrequalified]
  | (number & {});

export const vasEfeOffersIsMerchantPrequalifiedSchema: EnumSchema<VasEfeOffersIsMerchantPrequalified> =
  s.enumOf<VasEfeOffersIsMerchantPrequalified>(VasEfeOffersIsMerchantPrequalified);
