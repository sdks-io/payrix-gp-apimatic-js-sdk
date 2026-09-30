import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingEventsDeductFromBalance = {
  _0: 0,
  _1: 1,
} as const;
export type BillingEventsDeductFromBalance =
  | (typeof BillingEventsDeductFromBalance)[keyof typeof BillingEventsDeductFromBalance]
  | (number & {});

export const billingEventsDeductFromBalanceSchema: EnumSchema<BillingEventsDeductFromBalance> =
  s.enumOf<BillingEventsDeductFromBalance>(BillingEventsDeductFromBalance);
