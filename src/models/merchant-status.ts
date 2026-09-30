import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
} as const;
export type MerchantStatus = (typeof MerchantStatus)[keyof typeof MerchantStatus] | (number & {});

export const merchantStatusSchema: EnumSchema<MerchantStatus> = s.enumOf<MerchantStatus>(MerchantStatus);
