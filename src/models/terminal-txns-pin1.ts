import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this Transaction was verified with a PIN.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No PIN verification.**
 *
 * - `1` - **PIN verification.**
 *
 * </details>
 */
export const TerminalTxnsPin1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsPin1 = (typeof TerminalTxnsPin1)[keyof typeof TerminalTxnsPin1] | (number & {});

export const terminalTxnsPin1Schema: EnumSchema<TerminalTxnsPin1> =
  s.enumOf<TerminalTxnsPin1>(TerminalTxnsPin1);
