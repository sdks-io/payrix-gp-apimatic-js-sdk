import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **Pending.**
 *
 *   - `1` - **Approved.** Payments can be voided or cancelled.
 *
 *   - `2` - **Failed**
 *
 *   - `3` - **Captured.** Payments can be refunded.
 *
 *   - `4` - **Settled.** Payments can be refunded.
 *
 *   - `5` - **Returned.** Payments has been successfully refunded.
 *
 * </details>
 */
export const TxnStatus1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type TxnStatus1 = (typeof TxnStatus1)[keyof typeof TxnStatus1] | (number & {});

export const txnStatus1Schema: EnumSchema<TxnStatus1> = s.enumOf<TxnStatus1>(TxnStatus1);
