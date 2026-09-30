import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the terminalTxn is coming from a POS system that needs terminal activation.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **POS Terminal Activation.** (Internal)
 * - `1` - **External Terminal Activation.**
 *
 * </details>
 */
export const TerminalTxnsPos1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsPos1 = (typeof TerminalTxnsPos1)[keyof typeof TerminalTxnsPos1] | (number & {});

export const terminalTxnsPos1Schema: EnumSchema<TerminalTxnsPos1> =
  s.enumOf<TerminalTxnsPos1>(TerminalTxnsPos1);
