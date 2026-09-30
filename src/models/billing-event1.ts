import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of event that triggers billing.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `fees` - **Fee.** Fee events trigger the billing configuration.
 * - `chargebacks` - **Chargebacks.** Chargeback events trigger the billing configuration.
 * - `returns` - **Returns.** Return events trigger the billing configuration.
 * - `profitShares` - **Profit Shares.** Profit Sharing events trigger the billing configuration.
 * - `revShares` - **RevShares.** Rev Sharing events trigger the billing configuration.
 *
 * </details>
 */
export const BillingEvent1 = {
  Fees: "fees",
  Chargebacks: "chargebacks",
  Returns: "returns",
  ProfitShares: "profitShares",
  RevShares: "revShares",
} as const;
export type BillingEvent1 = (typeof BillingEvent1)[keyof typeof BillingEvent1] | (string & {});

export const billingEvent1Schema: EnumSchema<BillingEvent1> = s.enumOf<BillingEvent1>(BillingEvent1);
