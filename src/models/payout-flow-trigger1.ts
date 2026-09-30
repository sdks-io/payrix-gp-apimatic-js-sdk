import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The event on the Org or Entity that should trigger the creation of an associated Payout resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `accountCreate` - **Primary payment account creation.** (primary must be 1)
 * - `board` - **Merchant boarding.**
 *
 * </details>
 */
export const PayoutFlowTrigger1 = {
  AccountCreate: "accountCreate",
  Board: "board",
} as const;
export type PayoutFlowTrigger1 = (typeof PayoutFlowTrigger1)[keyof typeof PayoutFlowTrigger1] | (string & {});

export const payoutFlowTrigger1Schema: EnumSchema<PayoutFlowTrigger1> =
  s.enumOf<PayoutFlowTrigger1>(PayoutFlowTrigger1);
