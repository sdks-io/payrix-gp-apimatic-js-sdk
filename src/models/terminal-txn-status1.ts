import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Pending.**
 * - `1` - **Approved.** Payments can be voided or cancelled.
 * - `2` - **Failed.**
 * - `3` - **Captured.** Payments can be refunded.
 * - `4` - **Settled.** Payments can be refunded.
 * - `5` - **Returned.** Payments have been successfully refunded.
 *
 * </details>
 */
export const TerminalTxnStatus1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type TerminalTxnStatus1 = (typeof TerminalTxnStatus1)[keyof typeof TerminalTxnStatus1] | (number & {});

export const terminalTxnStatus1Schema: EnumSchema<TerminalTxnStatus1> =
  s.enumOf<TerminalTxnStatus1>(TerminalTxnStatus1);
