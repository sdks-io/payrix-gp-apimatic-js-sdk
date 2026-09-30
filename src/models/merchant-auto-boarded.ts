import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantAutoBoarded = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantAutoBoarded =
  | (typeof MerchantAutoBoarded)[keyof typeof MerchantAutoBoarded]
  | (number & {});

export const merchantAutoBoardedSchema: EnumSchema<MerchantAutoBoarded> =
  s.enumOf<MerchantAutoBoarded>(MerchantAutoBoarded);
