import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether a signature should be captured during this Transaction.
 *
 * * You can set this field if you want the terminal to take a signature for the Transaction.
 * * The API also sets this field automatically if you associate a signature to the Transaction by
 *   creating a 'terminalTxnDatas' resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not captured.**
 * - `1` - **Captured.**
 *
 * </details>
 */
export const TerminalTxnsSignature1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsSignature1 =
  | (typeof TerminalTxnsSignature1)[keyof typeof TerminalTxnsSignature1]
  | (number & {});

export const terminalTxnsSignature1Schema: EnumSchema<TerminalTxnsSignature1> =
  s.enumOf<TerminalTxnsSignature1>(TerminalTxnsSignature1);
