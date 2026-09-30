import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingEvent = {
  Fees: "fees",
  Chargebacks: "chargebacks",
  Returns: "returns",
  ProfitShares: "profitShares",
  RevShares: "revShares",
} as const;
export type BillingEvent = (typeof BillingEvent)[keyof typeof BillingEvent] | (string & {});

export const billingEventSchema: EnumSchema<BillingEvent> = s.enumOf<BillingEvent>(BillingEvent);
