import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantLocationType = {
  _77: 77,
  _78: 78,
  _79: 79,
  _80: 80,
  _81: 81,
} as const;
export type MerchantLocationType =
  | (typeof MerchantLocationType)[keyof typeof MerchantLocationType]
  | (number & {});

export const merchantLocationTypeSchema: EnumSchema<MerchantLocationType> =
  s.enumOf<MerchantLocationType>(MerchantLocationType);
