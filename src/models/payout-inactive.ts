import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutInactive = {
  _0: 0,
  _1: 1,
} as const;
export type PayoutInactive = (typeof PayoutInactive)[keyof typeof PayoutInactive] | (number & {});

export const payoutInactiveSchema: EnumSchema<PayoutInactive> = s.enumOf<PayoutInactive>(PayoutInactive);
