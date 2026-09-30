import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A flag that indicates if a merchant meets predetermined vendor criteria to receive cash advance
 * funding.
 */
export const VasEfeOffersIsMerchantPrequalified2 = {
  _0: 0,
  _1: 1,
} as const;
export type VasEfeOffersIsMerchantPrequalified2 =
  | (typeof VasEfeOffersIsMerchantPrequalified2)[keyof typeof VasEfeOffersIsMerchantPrequalified2]
  | (number & {});

export const vasEfeOffersIsMerchantPrequalified2Schema: EnumSchema<VasEfeOffersIsMerchantPrequalified2> =
  s.enumOf<VasEfeOffersIsMerchantPrequalified2>(VasEfeOffersIsMerchantPrequalified2);
