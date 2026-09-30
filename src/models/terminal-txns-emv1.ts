import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the card was dipped (using the EMV chip) during this Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not dipped.**
 * - `1` - **Dipped.**
 *
 * </details>
 */
export const TerminalTxnsEmv1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsEmv1 = (typeof TerminalTxnsEmv1)[keyof typeof TerminalTxnsEmv1] | (number & {});

export const terminalTxnsEmv1Schema: EnumSchema<TerminalTxnsEmv1> =
  s.enumOf<TerminalTxnsEmv1>(TerminalTxnsEmv1);
