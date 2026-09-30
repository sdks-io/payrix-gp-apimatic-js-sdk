import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to deduct the billing amount from the entity's account balance.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Do not deduct from balance.**
 * - `1` - **Deduct from balance.**
 *
 * </details>
 */
export const BillingEventsDeductFromBalance1 = {
  _0: 0,
  _1: 1,
} as const;
export type BillingEventsDeductFromBalance1 =
  | (typeof BillingEventsDeductFromBalance1)[keyof typeof BillingEventsDeductFromBalance1]
  | (number & {});

export const billingEventsDeductFromBalance1Schema: EnumSchema<BillingEventsDeductFromBalance1> =
  s.enumOf<BillingEventsDeductFromBalance1>(BillingEventsDeductFromBalance1);
