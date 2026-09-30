import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if an authorization has been misused by not being captured or reversed within the
 * timeframe, which varies per network, mcc and type of txn closing (capture/reverse auth), with
 * valid values indicating whether it's Not misused (0) or Misused (1).
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **Not misused.**
 *
 *   - `1` - **Misused.**
 *
 * </details>
 */
export const TxnsMisused1 = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsMisused1 = (typeof TxnsMisused1)[keyof typeof TxnsMisused1] | (number & {});

export const txnsMisused1Schema: EnumSchema<TxnsMisused1> = s.enumOf<TxnsMisused1>(TxnsMisused1);
