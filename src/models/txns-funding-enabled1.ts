import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not funding is enabled for this Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled.**
 *
 * - `1` - **Enabled.**
 *
 * </details>
 */
export const TxnsFundingEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsFundingEnabled1 =
  | (typeof TxnsFundingEnabled1)[keyof typeof TxnsFundingEnabled1]
  | (number & {});

export const txnsFundingEnabled1Schema: EnumSchema<TxnsFundingEnabled1> =
  s.enumOf<TxnsFundingEnabled1>(TxnsFundingEnabled1);
