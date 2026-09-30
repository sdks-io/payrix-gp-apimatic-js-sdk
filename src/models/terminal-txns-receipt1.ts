import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the terminal should print a receipt or not.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `noReceipt` - **No Receipt.**
 * - `merchant` - **Merchant copy only.**
 * - `customer` - **Customer copy only.**
 * - `both` - **Merchant and Customer copy.**
 *
 * </details>
 */
export const TerminalTxnsReceipt1 = {
  NoReceipt: "noReceipt",
  Merchant: "merchant",
  Customer: "customer",
  Both: "both",
} as const;
export type TerminalTxnsReceipt1 =
  | (typeof TerminalTxnsReceipt1)[keyof typeof TerminalTxnsReceipt1]
  | (string & {});

export const terminalTxnsReceipt1Schema: EnumSchema<TerminalTxnsReceipt1> =
  s.enumOf<TerminalTxnsReceipt1>(TerminalTxnsReceipt1);
