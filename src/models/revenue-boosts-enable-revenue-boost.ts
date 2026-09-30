import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RevenueBoostsEnableRevenueBoost = {
  _0: 0,
  _1: 1,
} as const;
export type RevenueBoostsEnableRevenueBoost =
  | (typeof RevenueBoostsEnableRevenueBoost)[keyof typeof RevenueBoostsEnableRevenueBoost]
  | (number & {});

export const revenueBoostsEnableRevenueBoostSchema: EnumSchema<RevenueBoostsEnableRevenueBoost> =
  s.enumOf<RevenueBoostsEnableRevenueBoost>(RevenueBoostsEnableRevenueBoost);
