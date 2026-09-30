import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Credit Card Only: Sale Transaction.** This is the most common type of Transaction, it
 *   processes a sale and charges the customer.
 * - `2` - **Credit Card Only: Auth Transaction.** Authorizes and holds the requested total on the
 *   credit card.
 * - `4` - **Credit Card Only: Reverse Authorization.** Reverses a prior Auth or Sale Transaction
 *   and releases the credit hold.
 * - `5` - **Credit Card Only: Refund Transaction.** Refunds a prior Capture or Sale Transaction
 *   (total may be specified for a partial refund).
 * - `13` - **Batch out terminal.**
 *
 * </details>
 */
export const TerminalTxnType1 = {
  _1: 1,
  _2: 2,
  _4: 4,
  _5: 5,
  _13: 13,
} as const;
export type TerminalTxnType1 = (typeof TerminalTxnType1)[keyof typeof TerminalTxnType1] | (number & {});

export const terminalTxnType1Schema: EnumSchema<TerminalTxnType1> =
  s.enumOf<TerminalTxnType1>(TerminalTxnType1);
