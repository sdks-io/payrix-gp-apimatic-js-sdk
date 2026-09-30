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
export const TxnsFundingEnabledStr2 = {
  _0: "0",
  _1: "1",
} as const;
export type TxnsFundingEnabledStr2 =
  | (typeof TxnsFundingEnabledStr2)[keyof typeof TxnsFundingEnabledStr2]
  | (string & {});

export const txnsFundingEnabledStr2Schema: EnumSchema<TxnsFundingEnabledStr2> =
  s.enumOf<TxnsFundingEnabledStr2>(TxnsFundingEnabledStr2);
