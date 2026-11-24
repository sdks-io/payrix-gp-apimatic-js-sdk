import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that this batch summary pertains to. */
export const BrandBatchesBrandBreakdownBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandBatchesBrandBreakdownBrand =
  | (typeof BrandBatchesBrandBreakdownBrand)[keyof typeof BrandBatchesBrandBreakdownBrand]
  | (string & {});

export const brandBatchesBrandBreakdownBrandSchema: EnumSchema<BrandBatchesBrandBreakdownBrand> =
  s.enumOf<BrandBatchesBrandBreakdownBrand>(BrandBatchesBrandBreakdownBrand);
