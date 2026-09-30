import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Transaction is reserved and the action that will be taken as a result.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No reserve.**
 *
 * </details>
 */
export const TerminalTxnReserved1 = {
  _0: 0,
} as const;
export type TerminalTxnReserved1 =
  | (typeof TerminalTxnReserved1)[keyof typeof TerminalTxnReserved1]
  | (number & {});

export const terminalTxnReserved1Schema: EnumSchema<TerminalTxnReserved1> =
  s.enumOf<TerminalTxnReserved1>(TerminalTxnReserved1);
