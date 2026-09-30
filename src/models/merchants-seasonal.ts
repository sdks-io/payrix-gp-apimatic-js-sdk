import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsSeasonal = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsSeasonal = (typeof MerchantsSeasonal)[keyof typeof MerchantsSeasonal] | (number & {});

export const merchantsSeasonalSchema: EnumSchema<MerchantsSeasonal> =
  s.enumOf<MerchantsSeasonal>(MerchantsSeasonal);
